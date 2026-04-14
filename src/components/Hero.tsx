import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getLandingData } from '../services/dataService';

const StructuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 60 : 100; // Increased density
    const connectionDistance = isMobile ? 120 : 180; // Increased distance

    const resize = () => {
      if (canvas && canvas.parentElement) {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        ctx.scale(dpr, dpr);
        
        // Update logical dimensions for particle logic
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    // Initialize particles
    const initParticles = () => {
      const dpr = window.devicePixelRatio || 1;
      const logicalWidth = canvas.width / dpr;
      const logicalHeight = canvas.height / dpr;
      
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * logicalWidth,
          y: Math.random() * logicalHeight,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const logicalWidth = canvas.width / dpr;
      const logicalHeight = canvas.height / dpr;

      ctx.clearRect(0, 0, logicalWidth, logicalHeight);
      
      // Update and draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges using logical dimensions
        if (p.x < 0 || p.x > logicalWidth) p.vx *= -1;
        if (p.y < 0 || p.y > logicalHeight) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        // Draw connections with white glow
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 0.4 * (1 - distance / connectionDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

const Hero: React.FC = () => {
  const data = getLandingData().hero;

  return (
    <section className="hero-section">
      <div className="hero-canvas-container">
        <StructuralCanvas />
      </div>
      
      <div className="container hero-content">
        <div className="hero-content-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl" style={{ color: 'var(--hero-text)', marginBottom: 'var(--space-4)', lineHeight: 1.1 }}>
              {data.title}
            </h1>
            <p className="text-lg md:text-xl" style={{ color: '#a3a3a3', maxWidth: '600px' }}>
              {data.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'nowrap' }}
          >
            <a href="#contacto" className="btn btn-white" style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap', flex: '0 0 auto' }}>
              {data.ctaPrimary}
            </a>
            <a href="#proyectos" className="btn" style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.4)', whiteSpace: 'nowrap', flex: '0 0 auto' }}>
              {data.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

