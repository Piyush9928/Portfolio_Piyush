from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ================================
#           MODELS
# ================================
class StatusCheck(BaseModel):
    """
    Document schema stored in MongoDB.
    Used for:
      - API responses
      - Reading existing documents
    """
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id and any extra fields

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    # NEW contact-form fields
    name: str = ""
    email: str = ""
    subject: str = ""
    message: str = ""

    # OLD field (for backward compatibility with existing docs)
    client_name: Optional[str] = None

    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    """
    Request body for contact form submissions.
    Only new fields are required from frontend.
    """
    name: str
    email: str
    subject: str
    message: str


# ================================
#           ROUTES
# ================================
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    """
    Create a new contact / status document.
    Frontend should POST JSON like:
    {
      "name": "...",
      "email": "...",
      "subject": "...",
      "message": "..."
    }
    """
    # Convert incoming payload to dict
    status_dict = input.model_dump()
    # Build full StatusCheck object (adds id + timestamp)
    status_obj = StatusCheck(**status_dict)

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()

    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    """
    Get last 1000 contact submissions.
    Existing old docs with only client_name will still load
    because StatusCheck ignores extra/missing fields.
    """
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check.get("timestamp"), str):
            check["timestamp"] = datetime.fromisoformat(check["timestamp"])

    # Pydantic will take care of mapping dicts -> StatusCheck objects
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
