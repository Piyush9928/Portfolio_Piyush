import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "../hooks/use-toast";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }

    emailjs
      .sendForm(
        "service_afv1cj7",   // e.g. service_xxxxx
        "template_1gcu0zy",  // e.g. template_xxxxx
        formRef.current,
        "MFUgODjqa-aw-1dT0"    // e.g. xxxxxxxxx
      )
      .then(
        () => {
          toast({
            title: "Message Sent 🚀",
            description: "Thanks for reaching out! I will contact you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Send Failed",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-500" size={24} />,
      title: "Email",
      value: "ps1521155@gmail.com",
      link: "mailto:ps1521155@gmail.com",
    },
    {
      icon: <Phone className="text-cyan-400" size={24} />,
      title: "Phone",
      value: "+91-99282XXX936",
      link: "tel:+919928226936",
    },
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      title: "Location",
      value: "Rajasthan, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let’s <span className="text-emerald-500">Connect</span>
          </h2>
          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-emerald-500 to-cyan-400 mb-6"></div>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project, collaboration idea, or opportunity? Drop me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="flex items-center gap-4 bg-slate-800 border border-slate-700 p-5 hover:border-emerald-500 transition-all"
              >
                {item.link ? (
                  <a href={item.link} className="flex items-center gap-4">
                    {item.icon}
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Piyush9928"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all"
              >
                <Github className="text-emerald-500" size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-singh-90b5bb2b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all"
              >
                <Linkedin className="text-cyan-400" size={28} />
              </a>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-slate-800 border border-slate-700 p-8 shadow-xl shadow-emerald-500/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-700 border-slate-600 text-white"
                required
              />

              <Input
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-700 border-slate-600 text-white"
                required
              />

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-700 border-slate-600 text-white"
              />

              <Textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-700 border-slate-600 text-white min-h-32"
                required
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-400 hover:opacity-90 text-black font-semibold py-5 text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
