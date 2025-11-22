import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Focus Flow',
      description: 'Full-stack productivity dashboard with Pomodoro timer, task manager, and motivational widgets. Deployed on Netlify and Render.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tags: ['React', 'FastAPI', 'MongoDB', 'TailwindCSS'],
      category: 'Full-Stack',
      github: 'https://github.com/Piyush9928/FocusFlow',
      demo: '#'
    },
    {
      title: 'Traffic Flow Prediction',
      description: 'Machine learning model using Random Forest Classifier to predict traffic conditions with feature importance analysis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      category: 'Machine Learning',
      github: 'https://github.com/Piyush9928/Traffic-flow-prediction',
      demo: '#'
    },
    {
      title: 'Loan Approval Prediction',
      description: 'ML model predicting loan approval outcomes using Logistic Regression and Random Forest with comprehensive data preprocessing.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      tags: ['Python', 'Machine Learning', 'Data Analysis'],
      category: 'Machine Learning',
      github: 'https://github.com/Piyush9928/loan-approval-prediction',
      demo: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'Qt-based C++ application with MySQL integration for managing patient records, validation, and real-time feedback.',
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop',
      tags: ['C++', 'Qt', 'MySQL', 'GUI'],
      category: 'Desktop App',
      github: 'https://github.com/Piyush9928',
      demo: '#'
    },
    {
      title: 'School Management System',
      description: 'Python Tkinter GUI application with SQLite for real-time student data entry and display with validation features.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      tags: ['Python', 'Tkinter', 'SQLite', 'GUI'],
      category: 'Desktop App',
      github: 'https://github.com/Piyush9928/school-system',
      demo: '#'
    },
    {
      title: 'Cafe Management System',
      description: 'GUI-based billing system with automated cost updates, tax calculation, and intuitive interface design.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      tags: ['Python', 'Tkinter', 'GUI'],
      category: 'Desktop App',
      github: 'https://github.com/Piyush9928/cafe-system',
      demo: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio built with HTML, CSS, and Bootstrap featuring interactive UI components and mobile optimization.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/Piyush9928/portfolio',
      demo: '#'
    },
    {
      title: 'Task Automation Tool',
      description: 'Python Tkinter tool for automated file organization by type with real-time folder monitoring and sorting.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tags: ['Python', 'Tkinter', 'Automation'],
      category: 'Desktop App',
      github: 'https://github.com/Piyush9928/TaskAutomation',
      demo: '#'
    },
    {
      title: 'Hotel Booking Management',
      description: 'Console-based C# .NET application with MySQL for managing rooms, customers, and bookings with CRUD operations.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      tags: ['C#', '.NET', 'MySQL'],
      category: 'Desktop App',
      github: 'https://github.com/Piyush9928/Hotel-Booking',
      demo: '#'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Machine Learning', 'Desktop App', 'Web Development'];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, machine learning, and
            software engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`${
                activeFilter === category
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  : 'border-slate-700 text-gray-300 hover:border-emerald-500 hover:text-emerald-500'
              }`}
            >
              <Filter className="mr-2" size={16} />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 p-3 rounded-full transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="bg-cyan-400 hover:bg-cyan-500 p-3 rounded-full transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      className="bg-slate-700 text-emerald-400 border-slate-600 hover:border-emerald-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;