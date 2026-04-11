import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--accent-color)', color: '#fff', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-6)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingBottom: 'var(--space-8)', borderBottom: '1px solid #374151', marginBottom: 'var(--space-6)' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-4)', letterSpacing: '-0.02em' }}>
              GINFRA<span style={{ opacity: 0.7 }}>.</span>
            </div>
            <p style={{ color: '#9ca3af', maxWidth: '300px' }}>
              Method engineering for complex structures. International validation with unquestionable precision.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li><a href="#nosotros" style={{ color: '#9ca3af', transition: 'color 0.2s' }}>About Us</a></li>
              <li><a href="#servicios" style={{ color: '#9ca3af', transition: 'color 0.2s' }}>Services</a></li>
              <li><a href="#proyectos" style={{ color: '#9ca3af', transition: 'color 0.2s' }}>Projects</a></li>
              <li><a href="#contacto" style={{ color: '#9ca3af', transition: 'color 0.2s' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Connect</h4>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <a href="https://instagram.com/ginfrasolution/" target="_blank" rel="noreferrer" style={{ color: '#9ca3af', transition: 'color 0.2s' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:contact@ginfrasolution.com" style={{ color: '#9ca3af', transition: 'color 0.2s' }} aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: typeof window !== 'undefined' && window.innerWidth < 640 ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: typeof window !== 'undefined' && window.innerWidth < 640 ? 'center' : 'center', 
          color: '#6b7280', 
          fontSize: '0.875rem',
          textAlign: typeof window !== 'undefined' && window.innerWidth < 640 ? 'center' : 'left',
          gap: 'var(--space-2)'
        }}>
          <p>&copy; {new Date().getFullYear()} GINFRASOLUTION Engineering. All rights reserved.</p>
          <p>Exclusive Corporate Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
