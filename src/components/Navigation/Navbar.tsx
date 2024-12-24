import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu.tsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Extracurriculars', href: '#extracurriculars' },
  { title: 'Resume', href: '#resume' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <motion.a 
          href="/" 
          className="logo"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <div className={`name-container ${isScrolled ? 'shrink' : ''}`}>
            <span className="letter p">P</span>
            <span className="letter rest-first a">a</span>
            <span className="letter rest-first u">u</span>
            <span className="letter rest-first l">l</span>
            <span className="space"> </span>
            <span className="letter k">K</span>
            <span className="letter rest-last r">r</span>
            <span className="letter rest-last a2">a</span>
            <span className="letter rest-last t">t</span>
            <span className="letter rest-last s">s</span>
            <span className="letter rest-last i">i</span>
            <span className="letter rest-last o">o</span>
            <span className="letter rest-last s2">s</span>
          </div>
        </motion.a>
        
        <div className="desktop-menu">
          <div className="nav-center">
            {navItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href}
                className={activeSection === item.href.substring(1) ? 'active' : ''}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="social-links">
          <a 
            href="https://github.com/paulkratsios18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/paulkratsios" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-social-link"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />
    </motion.nav>
  );
};

export default Navbar; 