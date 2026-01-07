import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
