import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = (path) => {
    onNavigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full backdrop-blur-md z-50 py-4 shadow-lg"
      style={{ backgroundColor: 'var(--color-navbar-bg)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <button onClick={() => handleNavigation('/')} className="text-2xl font-bold" style={{ color: 'var(--color-primary-text)' }}>
          Adhiraj Jarwal
        </button>
        
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto md:bg-transparent shadow-lg md:shadow-none p-8 md:p-0 gap-8 md:gap-8`} style={{ backgroundColor: isOpen ? 'var(--color-light-bg)' : 'transparent' }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="font-medium transition-colors relative"
              style={{
                color: location.pathname === item.path ? 'var(--color-accent)' : 'var(--color-primary-text)'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? 'var(--color-accent)' : 'var(--color-primary-text)'}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        <div className="md:hidden text-2xl cursor-pointer" style={{ color: 'var(--color-primary-text)' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;