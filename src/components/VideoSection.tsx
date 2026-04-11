import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <section className="section" style={{ backgroundColor: '#111' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}
        >
          <h2 className="text-sm font-bold" style={{ color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-3)' }}>
            Structural Manifesto
          </h2>
          <h3 className="text-3xl font-semibold" style={{ color: '#fff', marginBottom: 'var(--space-6)' }}>
            Tangible Innovation
          </h3>
          
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
            backgroundColor: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid #333'
          }}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                opacity: 0.8
              }}
              poster="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200"
            >
              {/* <source src="/path-to-high-quality-10s-video.mp4" type="video/mp4" /> */}
            </video>

            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '60px' : '80px',
              height: isMobile ? '60px' : '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer'
            }}>
               <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "32"} height={isMobile ? "24" : "32"} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
