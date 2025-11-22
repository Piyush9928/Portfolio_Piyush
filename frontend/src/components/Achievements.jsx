import React from 'react';
import { Trophy, Award, Star, Code, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-emerald-500" size={40} />,
      title: 'NASA Space Apps Challenge',
      description: 'Participated in the global hackathon, developing innovative solutions for real-world space and Earth data problems',
      color: 'emerald'
    },
    {
      icon: <Users className="text-cyan-400" size={40} />,
      title: 'GDG Make & Break Hackathon',
      description: 'Competed at LNMIIT, building a functional prototype within 12 hours under expert mentorship',
      color: 'cyan'
    },
    {
      icon: <Star className="text-orange-500" size={40} />,
      title: '5-Star Python Coder',
      description: 'Achieved 5-Star Python Coder recognition on HackerRank for programming excellence',
      color: 'orange'
    },
    {
      icon: <Code className="text-purple-400" size={40} />,
      title: '100+ LeetCode Problems',
      description: 'Solved 100+ Data Structures and Algorithms problems demonstrating strong problem-solving skills',
      color: 'purple'
    },
    {
      icon: <Award className="text-emerald-500" size={40} />,
      title: 'Multiple Certifications',
      description: 'Completed certifications in MERN Stack, Data Analytics, ML, and OOP from Infosys, Coursera, and Forage',
      color: 'emerald'
    },
    {
      icon: <Zap className="text-cyan-400" size={40} />,
      title: '10+ Technical Projects',
      description: 'Built diverse projects ranging from full-stack applications to machine learning models',
      color: 'cyan'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'border-emerald-500 hover:shadow-emerald-500/50',
      cyan: 'border-cyan-400 hover:shadow-cyan-400/50',
      orange: 'border-orange-500 hover:shadow-orange-500/50',
      purple: 'border-purple-400 hover:shadow-purple-400/50'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="achievements" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-emerald-500">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border-2 ${getColorClasses(
                achievement.color
              )} p-6 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'MERN Stack Development', org: 'TuteDude' },
              { name: 'Data Structures & Algorithms (Java)', org: 'Infosys Springboard' },
              { name: 'Object-Oriented Programming (Java)', org: 'Infosys Springboard' },
              { name: 'Data Analytics Job Simulation', org: 'Forage' },
              { name: 'Python with AI', org: 'AI for Techies' },
              { name: 'SQL Bootcamp', org: 'Lets Upgrade' },
              { name: 'Power BI', org: 'Infosys Springboard' },
              { name: 'Microsoft Excel', org: 'Coursera' },
              { name: 'Deloitte Data Analytics Simulation', org: 'Forage' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 p-4 rounded-lg hover:border-emerald-500 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <Award className="text-emerald-500 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;