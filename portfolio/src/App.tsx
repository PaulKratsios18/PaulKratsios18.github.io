import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navigation/Navbar.tsx';
import About from './components/About/About.tsx';
import Experience from './components/Experience/Experience.tsx';
import Athletic from './components/Achievements/Athletic.tsx';
import Resume from './components/Resume/Resume.tsx';
import Projects from './components/Projects/Projects.tsx';
import Skills from './components/Skills/SkillsGrid.tsx';
import Contact from './components/Contact/ContactForm.tsx';
import './App.css';
import './styles/globals.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isLoading ? (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-content">PK</div>
        </motion.div>
      ) : (
        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Athletic />
          <Resume />
          <Contact />
        </main>
      )}
    </div>
  );
};

export default App;