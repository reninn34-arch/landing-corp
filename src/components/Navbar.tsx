import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize if screen becomes desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { href: "#nosotros", label: "About Us" },
    { href: "#servicios", label: "Services" },
    { href: "#proyectos", label: "Projects" },
    { href: "#diferencial", label: "Advantage" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-nav"
        style={{
          backgroundColor: (scrolled || isOpen) ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.4)',
          borderBottom: (scrolled || isOpen) ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.3s ease',
          zIndex: isOpen ? 110 : 50 // Ensure nav is above overlay when open
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', letterSpacing: '0.05em', zIndex: 101, textTransform: 'uppercase' }}>
            GINFRA<span style={{ color: '#0ea5e9' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="md:block">
            <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  style={{ color: '#fff', fontWeight: 500, transition: 'color 0.2s' }}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contacto" className="btn btn-white" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              zIndex: 101,
              color: isOpen ? 'var(--text-primary)' : '#fff', // Dynamic color to ensure visibility
              padding: 'var(--space-2)'
            }}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: '#fff',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'var(--space-8)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', alignItems: 'center' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--text-primary)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="btn btn-primary"
                style={{ padding: '1rem 3rem', fontSize: '1.25rem', width: '100%', maxWidth: '300px' }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
