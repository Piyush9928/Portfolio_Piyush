import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
        duration: 5000
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
        duration: 5000
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-500" size={24} />,
      title: 'Email',
      value: 'ps1521155@gmail.com',
      link: 'mailto:ps1521155@gmail.com'
    },
    {
      icon: <Phone className="text-cyan-400" size={24} />,
      title: 'Phone',
      value: '+91-99282 26936',
      link: 'tel:+919928226936'
    },
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      title: 'Location',
      value: 'Rajasthan, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing
            new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800 border-slate-700 p-4 hover:border-emerald-500 transition-all duration-300"
                  >
                    {info.link ? (
                      <a href={info.link} className="flex items-center gap-4">
                        {info.icon}
                        <div>
                          <p className="text-gray-400 text-sm">{info.title}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        {info.icon}
                        <div>
                          <p className="text-gray-400 text-sm">{info.title}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Piyush9928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <Github className="text-emerald-500" size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyush-singh-90b5bb2b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Linkedin className="text-cyan-400" size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white focus:border-emerald-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white focus:border-emerald-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white focus:border-emerald-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white focus:border-emerald-500 min-h-32"
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg"
              >
                <Send className="mr-2" size={20} />
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