import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section id="contacto" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}
        >
          <h2 className="text-sm font-bold" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
            Corporate Contact
          </h2>
          <h3 className="text-4xl font-semibold" style={{ marginBottom: 'var(--space-4)' }}>
            Let's discuss your next structural challenge
          </h3>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: 'var(--card-bg)',
            padding: isMobile ? 'var(--space-4)' : 'var(--space-8)',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}
          onSubmit={(e) => { e.preventDefault(); alert("Simulated Form Submission."); }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
              <input id="name" type="text" required style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }} placeholder="John Doe" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="company" className="text-sm font-semibold">Company / Organization</label>
              <input id="company" type="text" required style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }} placeholder="International Consortium X" />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="email" className="text-sm font-semibold">Corporate Email</label>
            <input id="email" type="email" required style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }} placeholder="name@company.com" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="message" className="text-sm font-semibold">Project Details or Inquiry</label>
            <textarea id="message" rows={4} required style={{ padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', resize: 'vertical' }} placeholder="Briefly describe the nature of your requirement..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
            Send Message
          </button>
          
          <div style={{ 
            marginTop: 'var(--space-6)', 
            paddingTop: 'var(--space-6)', 
            borderTop: '1px solid var(--border-color)', 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: 'var(--space-6)' 
          }}>
            <div style={{ color: 'var(--text-secondary)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Panama Headquarters</div>
              <div className="text-sm">Williamson place, Classibs building,</div>
              <div className="text-sm">n°0764, Panama City - Panama.</div>
            </div>
            
            <div style={{ color: 'var(--text-secondary)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>Direct Contact</div>
              <div className="text-sm">Grégoire Geiler</div>
              <div className="text-sm">COL: +57 310 669 0432</div>
              <div className="text-sm">USA: +1 941 248 0655</div>
              <a href="mailto:contact@ginfrasolution.com" style={{ display: 'inline-block', marginTop: 'var(--space-2)', color: 'var(--accent-color)', fontWeight: 600 }}>
                contact@ginfrasolution.com
              </a>
            </div>
          </div>
        </motion.form>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
           style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}
        >
           <h4 className="text-sm font-semibold" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-6)' }}>Trusted By Global Leaders</h4>
           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-4)', color: 'var(--text-secondary)' }}>
              {['SOLETANCHE BACHY COLOMBIA', 'RUBRICA ENGINEERING', 'FAYAT METAL', 'VINCI CONSTRUCTION', 'EIFFAGE GÉNIE CIVIL', 'FORKAST', 'FREYSSINET GROUP'].map((client, i) => (
                <div key={i} style={{ padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', backgroundColor: 'var(--card-bg)' }}>
                  {client}
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
