from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# -------- Models --------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str | None = None
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    name: str
    email: str
    subject: str | None = None
    message: str


@api_router.get("/")
async def root():
    print("🏁 Root API Called")
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    print("📥 Received form submission from:", input.name)

    # Create the object for MongoDB
    doc = {
        "id": str(uuid.uuid4()),
        "name": input.name,
        "email": input.email,
        "subject": input.subject,
        "message": input.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

    try:
        result = await db.status_checks.insert_one(doc)
        print("🚀 Data inserted successfully")
        print("📄 Stored Document:", doc)
        print("🆔 Inserted ID:", result.inserted_id)
    except Exception as e:
        print("❌ MongoDB Insert Failed:", str(e))

    return doc   # Response returns full object

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    print("📤 Fetching data from MongoDB")

    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    for check in status_checks:
        if isinstance(check["timestamp"], str):
            check["timestamp"] = datetime.fromisoformat(check["timestamp"])

    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
