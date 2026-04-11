import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
              About Us
            </h2>
            <h3 className="text-4xl font-semibold" style={{ marginBottom: 'var(--space-5)' }}>
              Global vision, unquestionable technical precision.
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 640 ? 'column' : 'row',
              gap: 'var(--space-6)', 
              marginBottom: 'var(--space-6)', 
              alignItems: window.innerWidth < 640 ? 'center' : 'flex-start', 
              padding: 'var(--space-4)', 
              borderRadius: '8px', 
              backgroundColor: 'var(--card-bg)', 
              border: '1px solid var(--border-color)',
              textAlign: window.innerWidth < 640 ? 'center' : 'left'
            }}>
              <img 
                src="./ceo.png" 
                alt="CEO Ginfra Solution" 
                style={{ width: '150px', height: '150px', borderRadius: '8px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <div style={{ paddingTop: 'var(--space-2)' }}>
                <p className="font-bold text-xl" style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>Grégoire Geiler</p>
                <p className="text-sm font-medium" style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>Founder & CEO (Over 15 Years Exp.)</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>"MIND YOUR SAFETY. We identify problems before they occur to guarantee savings and secure results worldwide."</p>
              </div>
            </div>

            <p className="text-lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
              We specialize in method engineering for major civil projects. We develop solutions where technical complexity demands an unprecedented level of accuracy.
            </p>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Operating internationally, we integrate as a strategic partner for consortiums and construction firms, guaranteeing the physical, structural, and financial viability of the most demanding projects.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div style={{ backgroundColor: 'var(--card-bg)', padding: 'var(--space-6)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div className="text-4xl font-bold" style={{ color: 'var(--accent-color)', marginBottom: 'var(--space-2)' }}>9</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Countries</div>
            </div>
            <div style={{ backgroundColor: 'var(--card-bg)', padding: 'var(--space-6)', borderRadius: '8px', border: '1px solid var(--border-color)', transform: window.innerWidth < 640 ? 'none' : 'translateY(1.5rem)' }}>
              <div className="text-4xl font-bold" style={{ color: 'var(--accent-color)', marginBottom: 'var(--space-2)' }}>18</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Large-scale Projects</div>
            </div>
            <div style={{ backgroundColor: 'var(--card-bg)', padding: 'var(--space-6)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div className="text-4xl font-bold" style={{ color: 'var(--accent-color)', marginBottom: 'var(--space-2)' }}>+6M€</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Value Executed</div>
            </div>
            <div style={{ backgroundColor: 'var(--card-bg)', padding: 'var(--space-6)', borderRadius: '8px', border: '1px solid var(--border-color)', transform: window.innerWidth < 640 ? 'none' : 'translateY(1.5rem)' }}>
              <div className="text-4xl font-bold" style={{ color: 'var(--accent-color)', marginBottom: 'var(--space-2)' }}>+20</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Controlled Designs</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
