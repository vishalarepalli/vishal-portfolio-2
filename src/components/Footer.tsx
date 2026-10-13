import React from 'react';
import { FileText, ArrowUp, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 bg-[#07130d] border-t border-[#8fa996]/15 overflow-hidden">
      {/* Silhouette Mountains Backdrop Atmosphere */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040a06] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-[#8fa996]">
            Thanks for visiting
          </p>

          <h3 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            Vishal <span className="text-gold-gradient">Arepalli</span>
          </h3>

          <p className="font-serif italic text-lg text-[#cda851]">
            "Keep building..."
          </p>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href={`${import.meta.env.BASE_URL}assets/vishal_resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f2218] hover:bg-[#1a3828] text-xs font-mono text-[#d0c5b3] border border-[#8fa996]/20 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#cda851]" />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-xl bg-[#0f2218] hover:bg-[#1a3828] text-[#8fa996] hover:text-[#f7f4ec] border border-[#8fa996]/20 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Strict Resume Integrity Declaration */}
          <div className="pt-8 border-t border-[#8fa996]/10 max-w-xl text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8fa996]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cda851]" />
              <span>Strict Resume Accuracy Guarantee</span>
            </div>
            <p className="text-[11px] text-[#8fa996]/70 leading-relaxed font-sans">
              Every detail in this portfolio—including projects, educational records, scores, skills, certifications, and contact details—strictly mirrors Vishal Arepalli's official resume without exaggeration or fabrication.
            </p>
            <p className="text-[10px] text-[#8fa996]/50 font-mono">
              Designed & Built with React, Vite, TypeScript, Three.js &bull; 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
