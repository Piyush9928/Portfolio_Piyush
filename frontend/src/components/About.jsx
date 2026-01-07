import React from 'react';
import { Code2, Database, Cpu, Award, Cloud } from 'lucide-react';
import { Card } from './ui/card';
import Piyush from "../assets/Piyush.jpg";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="text-blue-400" size={32} />,
      title: 'Salesforce Development',
      description: 'Working with Apex, SOQL/SOSL, LWC, Flows, and CRM automation'
    },
    {
      icon: <Code2 className="text-teal-400" size={32} />,
      title: 'Full-Stack Development',
      description: 'Proficient in MERN stack, Django, and modern web technologies'
    },
    {
      icon: <Database className="text-teal-400" size={32} />,
      title: 'Data & Backend Systems',
      description: 'Experience with databases, APIs, and scalable backend services'
    },
    {
      icon: <Cpu className="text-orange-500" size={32} />,
      title: 'Problem Solving',
      description: '100+ DSA problems solved, 5-star Python on HackerRank'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl blur-xl opacity-20"></div>
              <img
                src={Piyush}
                alt="Piyush Singh"
                className="relative rounded-2xl shadow-2xl w-full max-w-md border border-gray-800"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Associate Salesforce Developer & Computer Science Engineering Student
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              I'm Piyush Singh, an Associate Salesforce Developer at CRM Landing and a Computer Science Engineering
              student at NIMS University Rajasthan. I work on Salesforce CRM customization, Apex development,
              Lightning Web Components (LWC), and automation to build scalable business solutions.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Alongside Salesforce, I have a strong foundation in full-stack development and backend systems,
              with experience across Python, Java, C++, React, Django, and the MERN stack. With hands-on exposure
              through internships and real-world projects, I focus on building reliable, data-driven applications.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-teal-400">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-teal-400">4+</div>
                <div className="text-gray-400">Internships</div>
              </div>
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-gray-400">DSA Problems</div>
              </div>
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <div className="text-3xl font-bold text-orange-500">7.24</div>
                <div className="text-gray-400">CGPA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 hover:border-teal-500 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
