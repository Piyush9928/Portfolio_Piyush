import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-emerald-500">&lt;</span>
              <span className="text-white">Piyush Singh</span>
              <span className="text-emerald-500">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-4">
              Computer Science Engineering student passionate about building innovative solutions and solving
              real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Piyush9928"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-singh-90b5bb2b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ps1521155@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Piyush Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;