import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Stage 1: Wait for text animations to complete (approx 2.5s - 3s)
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 3200);

    // Stage 2: Wait for slide-up transition to finish (1s duration)
    const completeTimer = setTimeout(() => {
      setShowSplash(false);
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!showSplash) return null;

  return (
    <div
      id="splash-screen"
      className={`fixed inset-0 z-100 bg-pure-black flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${slideUp ? '-translate-y-full' : ''}`}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="relative w-full max-w-3xl px-6 flex flex-col items-center">
        <svg viewBox="0 0 800 300" className="w-full h-auto mb-8 blueprint-glow">
          <g stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round">
            {/* Bridge Deck - White with cyan accent */}
            <line x1="50" y1="220" x2="750" y2="220" strokeWidth="4" stroke="#fff" className="animate-draw-deck" />
            <line x1="50" y1="222" x2="750" y2="222" strokeWidth="1.5" stroke="#0ea5e9" className="animate-draw-deck opacity-70" />

            {/* Left Pylon - White */}
            <path d="M 250 220 L 250 50" strokeWidth="8" stroke="#fff" className="animate-draw-pylon delay-300" />
            <path d="M 230 250 L 250 220 L 270 250" strokeWidth="5" stroke="#fff" className="animate-draw-pylon delay-300" />

            {/* Right Pylon - White */}
            <path d="M 550 220 L 550 50" strokeWidth="8" stroke="#fff" className="animate-draw-pylon delay-300" />
            <path d="M 530 250 L 550 220 L 570 250" strokeWidth="5" stroke="#fff" className="animate-draw-pylon delay-300" />

            {/* Left Cables - Subtle Cyan/White mix */}
            <g stroke="rgba(14, 165, 233, 0.7)" strokeWidth="1.8" className="animate-draw-cables delay-700">
              <line x1="250" y1="80" x2="100" y2="220" />
              <line x1="250" y1="110" x2="140" y2="220" />
              <line x1="250" y1="140" x2="180" y2="220" />
              <line x1="250" y1="170" x2="220" y2="220" />
              <line x1="250" y1="80" x2="400" y2="220" />
              <line x1="250" y1="110" x2="360" y2="220" />
              <line x1="250" y1="140" x2="320" y2="220" />
              <line x1="250" y1="170" x2="280" y2="220" />
            </g>

            {/* Right Cables - Subtle Cyan/White mix */}
            <g stroke="rgba(14, 165, 233, 0.7)" strokeWidth="1.8" className="animate-draw-cables delay-1000">
              <line x1="550" y1="80" x2="400" y2="220" />
              <line x1="550" y1="110" x2="440" y2="220" />
              <line x1="550" y1="140" x2="480" y2="220" />
              <line x1="550" y1="170" x2="520" y2="220" />
              <line x1="550" y1="80" x2="700" y2="220" />
              <line x1="550" y1="110" x2="660" y2="220" />
              <line x1="550" y1="140" x2="620" y2="220" />
              <line x1="550" y1="170" x2="580" y2="220" />
            </g>
          </g>
        </svg>

        <div className="text-white text-2xl md:text-5xl font-bold tracking-widest-plus mb-1 md:mb-2 opacity-0 animate-fade-in-delayed font-headline">
          GINFRASOLUTION
        </div>

        <div className="text-muted-hero splash-subtitle uppercase opacity-0 animate-fade-in-delayed-more text-center mt-1">
          Infrastructure Engineering Consultancy
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
