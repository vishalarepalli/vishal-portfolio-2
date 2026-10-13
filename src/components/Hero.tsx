import React from 'react';
import { soundManager } from '../utils/audio';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleAction = () => {
    soundManager.playClick();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Warm Ambient Radial Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(205,168,81,0.08)_0%,_rgba(22,47,34,0.35)_40%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Subtle Storyboard Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162f22]/70 border border-[#cda851]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#cda851]" />
            <span className="text-xs font-mono text-[#e5c36f] tracking-wider uppercase">
              Portfolio &bull; Verified Identity
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-lg sm:text-xl font-sans text-[#8fa996] tracking-wide block">
              Hey, I'm
            </span>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-[#f7f4ec] font-semibold leading-[0.95]">
              Vishal <span className="text-gold-gradient">Arepalli</span>
            </h1>
          </div>

          <div className="space-y-4 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-serif text-[#cda851] tracking-wide">
              Aspiring Software Developer
            </h2>
            <p className="text-base sm:text-lg text-[#d0c5b3] leading-relaxed font-sans font-light">
              Pursuing B.Tech in Computer Science Engineering with a foundation in Python, Java, and web technologies. Passionate about building practical software solutions and solving technical problems through continuous learning.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
            <a
              href="#about"
              onClick={handleAction}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#cda851] to-[#e2c275] text-[#0a1610] font-semibold tracking-wide hover:brightness-105 hover:shadow-[0_0_25px_rgba(205,168,81,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto text-center"
            >
              <span>About Me</span>
            </a>

            <a
              href="#projects"
              onClick={handleAction}
              className="px-7 py-3.5 rounded-xl glass-panel hover:bg-[#1a3828] text-[#f7f4ec] border border-[#8fa996]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto text-center"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-[#cda851] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Verified Highlights */}
          <div className="pt-6 border-t border-[#8fa996]/15 grid grid-cols-3 gap-4 w-full max-w-md">
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#cda851]">3</span>
              <p className="text-[11px] font-sans text-[#8fa996] uppercase tracking-wider mt-0.5">Projects</p>
            </div>
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#cda851]">3</span>
              <p className="text-[11px] font-sans text-[#8fa996] uppercase tracking-wider mt-0.5">Certifications</p>
            </div>
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#cda851]">B.Tech</span>
              <p className="text-[11px] font-sans text-[#8fa996] uppercase tracking-wider mt-0.5">CSE (2023-2027)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Storyboard Visual Motif with Vishal's Real Portrait in Cinematic Studio */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Storyboard-inspired framed visual composition */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#cda851]/35 shadow-2xl p-2.5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0d1e15]">
                <img
                  src="/assets/vishal_photo.jpg"
                  alt="Vishal Arepalli"
                  className="w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                />

                {/* Soft atmospheric gradient & film grain */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610] via-transparent to-transparent opacity-80" />

                {/* Live Badge on photo */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3.5 rounded-xl bg-[#0a1610]/85 border border-[#8fa996]/25 backdrop-blur-md">
                  <div>
                    <h3 className="font-display text-lg text-[#f7f4ec] font-semibold leading-tight">
                      Vishal Arepalli
                    </h3>
                    <p className="text-xs text-[#cda851] font-mono">
                      DVR & Dr. HS MIC College
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] text-xs font-bold">
                    CSE
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative warm ambient glow */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#cda851]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-[#234d38]/30 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          onClick={handleAction}
          className="flex flex-col items-center text-xs font-mono tracking-widest uppercase text-[#8fa996] hover:text-[#cda851] transition-colors"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-0.5" />
        </a>
      </div>
    </section>
  );
};
