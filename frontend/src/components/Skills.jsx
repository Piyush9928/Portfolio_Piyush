import React from 'react';
import { Code, Server, Terminal, Blocks, GitBranch, Database, Circle } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-teal-400" size={40} />,
      title: 'Frontend Dev',
      skills: ['React, HTML, CSS, JavaScript']
    },
    {
      icon: <Server className="text-teal-400" size={40} />,
      title: 'Backend Dev',
      skills: ['Python, REST API, SQL']
    },
    {
      icon: <Terminal className="text-orange-500" size={40} />,
      title: 'Programming',
      skills: ['C++, Python, JavaScript']
    },
    {
      icon: <Blocks className="text-teal-400" size={40} />,
      title: 'Data Structures',
      skills: ['DSA, Algorithms, OOP']
    },
    {
      icon: <GitBranch className="text-teal-400" size={40} />,
      title: 'Version Control',
      skills: ['Git, GitHub, Collaboration']
    },
    {
      icon: <Database className="text-orange-500" size={40} />,
      title: 'Databases',
      skills: ['MongoDB, MySQL, NoSQL']
    }
  ];

  const techStack = [
    { name: 'Python', color: 'teal' },
    { name: 'JavaScript', color: 'teal' },
    { name: 'React', color: 'orange' },
    { name: 'C++', color: 'teal' },
    { name: 'HTML5', color: 'teal' },
    { name: 'CSS3', color: 'orange' },
    { name: 'SQL', color: 'teal' },
    { name: 'MongoDB', color: 'teal' },
    { name: 'REST API', color: 'orange' },
    { name: 'Git', color: 'teal' },
    { name: 'GitHub', color: 'teal' },
    { name: 'DSA', color: 'orange' },
    { name: 'OOP', color: 'teal' },
    { name: 'MySQL', color: 'teal' },
    { name: 'GUI Dev', color: 'orange' },
    { name: 'Django', color: 'teal' },
    { name: 'FastAPI', color: 'orange' },
    { name: 'Pandas', color: 'teal' },
    { name: 'NumPy', color: 'orange' },
    { name: 'Scikit-learn', color: 'teal' },
    { name: 'Power BI', color: 'teal' },
    { name: 'Bootstrap', color: 'orange' },
    { name: 'Tkinter', color: 'teal' },
    { name: 'Qt', color: 'orange' },
    { name: 'Azure', color: 'teal' }
  ];

  const getColorClass = (color) => {
    return color === 'teal' ? 'text-teal-400' : 'text-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-teal-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            A visual representation of my technical proficiency across various technologies and tools
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-8 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.skills.join(', ')}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-teal-400">Technology</span> Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 hover:border-teal-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center justify-center">
                  <Circle className={`${getColorClass(tech.color)} mb-3`} size={8} fill="currentColor" />
                  <p className="text-white font-medium text-center">{tech.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;