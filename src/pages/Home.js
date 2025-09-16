import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium, FaAws, FaCloud } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen pt-32 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap"
            style={{ color: 'var(--color-primary-text)' }}
            whileHover={{ scale: 1.05 }}
          >
            Hi, I'm <span className="highlight">Adhiraj Jarwal</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl mb-6" 
            style={{ color: 'var(--color-primary-text)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cloud Engineer & AWS Community Builder
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 leading-relaxed" 
            style={{ color: 'var(--color-accent)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Specializing in AWS, Azure, Terraform, and DevOps automation. 
            Building scalable cloud infrastructure and contributing to the global AWS community.
          </motion.p>
          
          <motion.div 
            className="flex gap-8 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-primary-text)' }}>
              <FaAws className="text-2xl" style={{ color: 'var(--color-accent)' }} />
              <span>AWS Certified</span>
            </div>
            <div className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-primary-text)' }}>
              <FaCloud className="text-2xl" style={{ color: 'var(--color-accent)' }} />
              <span>Cloud Expert</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/AdhiJarwal" target="_blank" rel="noopener noreferrer" className="text-2xl hover:-translate-y-1 transition-transform" style={{ color: 'var(--color-primary-text)' }}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/adjrwl" target="_blank" rel="noopener noreferrer" className="text-2xl hover:-translate-y-1 transition-transform" style={{ color: 'var(--color-primary-text)' }}>
              <FaLinkedin />
            </a>
            <a href="https://medium.com/@adhirajmjarwal" target="_blank" rel="noopener noreferrer" className="text-2xl hover:-translate-y-1 transition-transform" style={{ color: 'var(--color-primary-text)' }}>
              <FaMedium />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="w-80 h-80 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--color-light-bg)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/profile.jpg" 
              alt="Adhiraj Jarwal" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;