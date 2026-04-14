import React from 'react';
import { motion } from 'framer-motion';
import { getLandingData } from '../services/dataService';

const About: React.FC = () => {
  const data = getLandingData().about;

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
              {data.sectionTitle}
            </h2>
            <h3 className="text-4xl font-semibold" style={{ marginBottom: 'var(--space-5)' }}>
              {data.heading}
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
                src={data.ceoImage} 
                alt={`CEO ${data.ceoName}`} 
                style={{ width: '150px', height: '150px', borderRadius: '8px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <div style={{ paddingTop: 'var(--space-2)' }}>
                <p className="font-bold text-xl" style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>{data.ceoName}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-3)' }}>{data.ceoTitle}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6 }}>{data.ceoQuote}</p>
              </div>
            </div>

            <p className="text-lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
              {data.description1}
            </p>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              {data.description2}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {data.stats.map((stat, index) => (
              <div key={index} style={{ 
                backgroundColor: 'var(--card-bg)', 
                padding: 'var(--space-6)', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)',
                transform: (window.innerWidth >= 640 && index % 2 !== 0) ? 'translateY(1.5rem)' : 'none'
              }}>
                <div className="text-4xl font-bold" style={{ color: 'var(--accent-color)', marginBottom: 'var(--space-2)' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

