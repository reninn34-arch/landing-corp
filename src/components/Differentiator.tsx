import React from 'react';
import { motion } from 'framer-motion';

const Differentiator: React.FC = () => {
  return (
    <section id="diferencial" className="section" style={{ backgroundColor: 'var(--accent-color)', color: '#fff' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold" style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
              From Design to Execution
            </h2>
            <h3 className="text-4xl font-semibold" style={{ marginBottom: 'var(--space-5)' }}>
              What Defines Us
            </h3>
            <p className="text-lg" style={{ color: '#d1d5db', marginBottom: 'var(--space-4)' }}>
              We base our methodology on fully understanding your needs, ensuring maximum quality, optimizing processes, and maintaining total transparency throughout the project lifecycle.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { title: 'Listen', desc: 'Effective solutions adapted to the needs of each specific project.' },
                { title: 'Optimization', desc: 'Fulfilment of deadlines, optimized operations and guaranteed savings.' },
                { title: 'Trust', desc: 'Innovative tools designed using precise and reliable methods.' },
                { title: 'Transparency', desc: 'Continuous and clear communication at every stage of the project.' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--accent-color)', fontSize: '1.25rem', marginTop: '-2px' }}>✓</span>
                  <div>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.title}: </span>
                    <span style={{ color: '#e5e7eb' }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              backgroundColor: '#1f2937', /* lighter charcoal */
              padding: 'var(--space-6)',
              borderRadius: '8px',
              border: '1px solid #374151'
            }}
          >
            <p className="text-xl font-medium" style={{ fontStyle: 'italic', marginBottom: 'var(--space-5)', color: '#fff', lineHeight: 1.6 }}>
              "Our participation during the feasibility phase has consistently proven to reduce critical structural incidents to zero and optimize the project CAPEX by a substantial corporate margin."
            </p>
            <div>
              <div className="font-bold text-lg">Global Technical Direction</div>
              <div className="text-sm" style={{ color: '#9ca3af' }}>International Consortiums</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
