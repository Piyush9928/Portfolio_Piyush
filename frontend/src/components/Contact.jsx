import React, { useState } from 'react';
import axios from "axios";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-piyush-fcoq.onrender.com/status",  // Correct API URL
        {
          client_name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      console.log("Response:", response.data);
      toast({ title: "Message Sent Successfully 🚀" });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error sending data:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <Card className="p-6 space-y-4">
          <p className="flex items-center gap-3"><Mail /> piyush@gmail.com</p>
          <p className="flex items-center gap-3"><Phone /> +91 99999 88888</p>
          <p className="flex items-center gap-3"><MapPin /> India</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </Card>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
          />
          <Button type="submit" className="w-full flex items-center gap-2">
            Send <Send />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
