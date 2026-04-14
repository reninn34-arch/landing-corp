import React from 'react';
import { motion } from 'framer-motion';
import { getLandingData } from '../services/dataService';

const Gallery: React.FC = () => {
  const data = getLandingData().gallery;

  return (
    <section id="proyectos" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: window.innerWidth < 768 ? 'flex-start' : 'flex-end', 
          marginBottom: 'var(--space-8)',
          gap: 'var(--space-4)'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold" style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
              {data.sectionTitle}
            </h2>
            <h3 className="text-4xl font-semibold">{data.heading}</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="btn btn-outline">View Full Portfolio</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.projects.map((project, index) => {
            const isFeatured = (index === 0 || index === 1);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{
                  position: 'relative',
                  aspectRatio: (isFeatured && window.innerWidth >= 1024) ? '16/9' : '4/3',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                }}
                className={(isFeatured && window.innerWidth >= 1024) ? "group col-span-2" : "group"}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                    opacity: 0.8
                  }}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 1024) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.opacity = '0.8';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: 'var(--space-6)',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                  pointerEvents: 'none'
                }}>
                  <h4 className="text-2xl font-semibold" style={{ color: '#fff', marginBottom: 'var(--space-1)' }}>{project.title}</h4>
                  <p className="text-sm font-medium" style={{ color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.location}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
