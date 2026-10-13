import React, { useEffect, useState, useRef } from 'react';
import { soundManager } from '../utils/audio';
import { SkipForward } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
  isReplaying?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isReplaying = false }) => {
  const [phase, setPhase] = useState<'scene1' | 'scene2' | 'scene3' | 'done'>('scene1');
  const startTimeRef = useRef<number>(Date.now());
  const whooshTriggeredRef = useRef(false);

  useEffect(() => {
    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !isReplaying) {
      onComplete();
      return;
    }

    startTimeRef.current = Date.now();
    whooshTriggeredRef.current = false;

    // Trigger whoosh automatically
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;

      // WHOOSH TRIGGER: Starts just before name reveal at 0.75s so it peaks at the name reveal
      if (elapsed >= 0.75 && !whooshTriggeredRef.current) {
        whooshTriggeredRef.current = true;
        soundManager.playWhoosh();
      }

      // SCENE 1: 0.0 - 1.0s
      if (elapsed < 1.0) {
        setPhase('scene1');
      }
      // SCENE 2: 1.0 - 2.5s (Name Reveal)
      else if (elapsed >= 1.0 && elapsed < 2.5) {
        setPhase('scene2');
      }
      // SCENE 3: 2.5 - 5.0s (Transition to Photo & Hero)
      else if (elapsed >= 2.5 && elapsed < 5.0) {
        setPhase('scene3');
      }
      // DONE: >= 5.0s
      else if (elapsed >= 5.0) {
        clearInterval(interval);
        setPhase('done');
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        clearInterval(interval);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, isReplaying]);

  const handleSkip = () => {
    soundManager.playClick();
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07120c] overflow-hidden select-none">
      {/* Background Volumetric Fog & Atmospheric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,68,52,0.45)_0%,_rgba(7,18,12,0.98)_80%)] pointer-events-none" />

      {/* Subtle Cinematic Light Sweep */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(205, 168, 81, 0.12), transparent 70%)',
          opacity: phase === 'scene2' ? 0.9 : phase === 'scene3' ? 0.4 : 0.1,
        }}
      />

      {/* Top Skip Button */}
      <div className="absolute top-6 right-6 z-20 flex items-center">
        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-wider uppercase text-[#d0c5b3] hover:text-[#f7f4ec] bg-[#0f2218]/80 hover:bg-[#1a3828] border border-[#8fa996]/20 transition-all cursor-pointer backdrop-blur-md"
        >
          <span>Skip Intro</span>
          <SkipForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* SCENE 1: 0.0 - 1.0s (Atmospheric quiet intro) */}
      <div
        className={`text-center transition-all duration-700 ${
          phase === 'scene1' ? 'opacity-90 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <p className="font-sans text-xs tracking-[0.45em] uppercase text-[#8fa996]/80 mb-3">
          A Cinematic 3D Experience
        </p>
        <div className="w-12 h-[1px] bg-[#cda851]/40 mx-auto" />
      </div>

      {/* SCENE 2: 1.0 - 2.5s (Bold Name Reveal with Built-in Whoosh) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
          phase === 'scene2'
            ? 'opacity-100 scale-100 blur-0'
            : phase === 'scene1'
            ? 'opacity-0 scale-90 blur-sm'
            : 'opacity-0 scale-105 blur-sm pointer-events-none'
        }`}
      >
        <p className="font-sans text-xs sm:text-sm tracking-[0.55em] uppercase text-[#cda851]/90 mb-4">
          Welcome to my portfolio
        </p>
        
        {/* Name typography matching the storyboard */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-[0.22em] text-[#f7f4ec] font-semibold text-center uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative">
          <span className="text-gold-gradient">VISHAL</span> AREPALLI
          {/* Subtle light sweep reflection */}
          <span 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7f4ec]/35 to-transparent -skew-x-12 animate-pulse pointer-events-none opacity-40" 
          />
        </h1>

        <p className="font-sans text-xs sm:text-sm tracking-[0.35em] text-[#8fa996] uppercase mt-6">
          Full Stack Developer &bull; Problem Solver &bull; Continuous Learner
        </p>
      </div>

      {/* SCENE 3: 2.5 - 5.0s (Cinematic Transition into Real Photograph) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
          phase === 'scene3'
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative group max-w-sm sm:max-w-md p-3 rounded-2xl glass-panel border border-[#cda851]/30 shadow-2xl">
          {/* Vishal's verified photograph reference */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-h-[380px]">
            <img
              src="/assets/vishal_photo.jpg"
              alt="Vishal Arepalli"
              className="w-full h-full object-cover object-top filter brightness-[0.96] contrast-[1.04]"
            />
            {/* Cinematic subtle vignette and gradient lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610] via-transparent to-transparent opacity-75" />
            
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h2 className="font-display text-2xl tracking-wider text-[#f7f4ec]">Vishal Arepalli</h2>
              <p className="text-xs text-[#cda851] tracking-widest uppercase mt-0.5">Computer Science Engineer</p>
            </div>
          </div>
        </div>

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#d0c5b3]/70 mt-6 animate-pulse">
          Entering Experience...
        </p>
      </div>
    </div>
  );
};
