import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      company: 'RJEasysoftech Pvt. Ltd.',
      position: 'C++ Development Intern',
      duration: 'Jul 2024 - Aug 2024',
      description: 'Developed a Qt-based C++ Hospital Management System with GUI for patient records, validation, and real-time feedback. Integrated MySQL database connectivity to efficiently store, retrieve, and manage patient data.',
      achievements: [
        'Built Qt-based GUI application with MySQL integration',
        'Implemented data validation and real-time feedback systems',
        'Participated in software design meetings and requirement analysis'
      ],
      color: 'emerald'
    },
    {
      company: 'CodeAlpha',
      position: 'Python Programming Intern',
      duration: 'Nov 2024 - Dec 2024',
      description: 'Developed multiple Python applications including a chatbot using NLTK, file organizer tool, and stock portfolio tracker with real-time data fetching capabilities.',
      achievements: [
        'Built rule-based chatbot with NLTK and Tkinter GUI',
        'Created file automation tool for organizing files by category',
        'Developed stock tracker with yFinance API integration'
      ],
      color: 'cyan'
    },
    {
      company: 'CodSoft',
      position: 'Java Programming Intern',
      duration: 'Nov 2024 - Dec 2024',
      description: 'Created Java-based applications with Swing GUI including ATM simulator, student grade calculator, and number guessing game with object-oriented design principles.',
      achievements: [
        'Developed ATM Interface with secure banking operations',
        'Built Student Grade Calculator with validation logic',
        'Implemented score tracking and dynamic feedback systems'
      ],
      color: 'orange'
    },
    {
      company: 'Kaleidonex Technologies LLP',
      position: 'Python Development Intern',
      duration: 'Oct 2024 - Nov 2024',
      description: 'Built enterprise-level Python applications including Employee Attendance System, CRM Management System, and encryption tool with MySQL integration.',
      achievements: [
        'Developed Employee Attendance System with role-based access',
        'Created CRM tool with full CRUD operations',
        'Implemented encryption/decryption tool with user authentication'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'border-emerald-500 bg-emerald-500/10',
      cyan: 'border-cyan-400 bg-cyan-400/10',
      orange: 'border-orange-500 bg-orange-500/10',
      purple: 'border-purple-400 bg-purple-400/10'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-emerald-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-cyan-400 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                  <Card
                    className={`bg-slate-800/50 backdrop-blur-sm border-2 ${getColorClasses(
                      exp.color
                    )} p-6 hover:transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-emerald-500" size={20} />
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    </div>
                    <h4 className="text-xl text-cyan-400 mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-emerald-500 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full border-4 border-${exp.color}-500 bg-slate-950`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;