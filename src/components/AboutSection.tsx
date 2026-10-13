import React from 'react';
import { AboutPortrait } from './AboutPortrait';
import { VISHAL_FACTS } from '../content/introduction';
import { CheckCircle2, Video, Music, Activity, FileDown } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const getHobbyIcon = (icon: string) => {
    switch (icon) {
      case 'video':
        return <Video className="w-4 h-4 text-[#cda851]" />;
      case 'mic':
        return <Music className="w-4 h-4 text-[#cda851]" />;
      case 'activity':
        return <Activity className="w-4 h-4 text-[#cda851]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#cda851]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#162f22]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#cda851]">
            Developer Profile
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-[#cda851]/40 mx-auto mt-2" />
        </div>

        {/* Two-Column Storyboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Clean High-Resolution 3D Portrait */}
          <div className="lg:col-span-6 w-full">
            <AboutPortrait />
          </div>

          {/* Column 2: Resume-Based Details */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* Career Objective Card */}
            <div className="p-7 rounded-3xl glass-panel border border-[#8fa996]/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#8fa996]/15 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#cda851]">
                  Career Objective
                </span>
                <span className="text-xs text-[#8fa996] font-mono">B.Tech CSE</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-[#f7f4ec] leading-relaxed font-light">
                "{VISHAL_FACTS.careerObjective}"
              </p>
            </div>

            {/* Core Strengths (From Resume) */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-[#f7f4ec]">
                Core Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VISHAL_FACTS.strengths.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-panel border border-[#cda851]/25 hover:border-[#cda851] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#cda851]" />
                      <h4 className="font-sans text-sm font-semibold text-[#f7f4ec]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8fa996] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies & Personal Interests (From Resume) */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-[#f7f4ec]">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VISHAL_FACTS.hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0f2218]/70 border border-[#8fa996]/20 flex items-center gap-3.5 hover:bg-[#162f22] transition-colors"
                  >
                    <div className="p-2 rounded-xl bg-[#1b3b2b] border border-[#cda851]/30">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <span className="text-xs font-medium text-[#f7f4ec]">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Resume Action */}
            <div className="pt-2">
              <a
                href={`${import.meta.env.BASE_URL}assets/vishal_resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#162f22] hover:bg-[#1f4230] text-[#cda851] border border-[#cda851]/40 font-medium text-sm transition-all shadow-md cursor-pointer group"
              >
                <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>View Full Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
