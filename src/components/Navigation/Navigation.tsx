import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="nav-container">
      <div className="logo">
        <a href="#home">Paul Kratsios</a>
      </div>
      
      <div className="nav-links">
        {navItems.map(item => (
          <a key={item.title} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>

      <button 
        className="menu-button"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />
    </nav>
  );
};

export default Navigation; 