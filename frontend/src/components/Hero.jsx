import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = [
    'Associate Salesforce Developer',
    'Full-Stack Developer',
    'CRM & Automation Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm <span className="text-teal-400">Piyush Singh</span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl md:text-4xl text-teal-400 font-mono">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl">
                Associate Salesforce Developer at CRM Landing and Computer Science Engineering student.
                Passionate about Salesforce CRM customization, Apex development, Lightning Web Components,
                and building scalable full-stack solutions with real-world impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black px-8 py-6 text-lg flex items-center"
              >
                <a href="/Piyush_Singh_Resume.pdf" download="Piyush_Resume.pdf" className="flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Piyush9928"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-singh-90b5bb2b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:ps1521155@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-orange-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-900 p-2 rounded-2xl border border-gray-800">
                <img
                  src="https://customer-assets.emergentagent.com/job_c70164c9-c799-4c1c-bdac-02f28dae48e5/artifacts/7avffx8w_Piyush%20Pic.jpg"
                  alt="Piyush Singh"
                  className="rounded-xl w-full max-w-md h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-teal-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
