import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();



  const handleNavigation = (path) => {
    if (path !== '/') {
      // For non-home pages, replace history with Home -> Current Page
      window.history.replaceState(null, '', '/');
      window.history.pushState(null, '', path);
    }
    navigate(path);
  };

  React.useEffect(() => {
    const handlePopState = () => {
      // When back is pressed, we're now at Home (due to our history setup)
      navigate('/');
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)', backgroundAttachment: 'fixed' }}>
      <Navbar onNavigate={handleNavigation} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;