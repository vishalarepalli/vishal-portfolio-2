import React from 'react';
import { VISHAL_FACTS } from '../content/introduction';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(205,168,81,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#cda851]">
            Academic Journey & Credentials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            Education & Certifications
          </h2>
          <p className="text-sm font-sans text-[#8fa996]">
            Exact dates, institutions, scores, and certifications from my verified resume.
          </p>
          <div className="w-16 h-[2px] bg-[#cda851]/40 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Timeline (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#f7f4ec]">
                Education Timeline
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[#8fa996]/20 space-y-8">
              {VISHAL_FACTS.education.map((edu, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundManager.playClick()}
                  className="relative group p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all space-y-3"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-7 w-3.5 h-3.5 rounded-full bg-[#cda851] border-4 border-[#0a1610] group-hover:scale-125 transition-transform" />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#cda851] bg-[#162f22] px-3 py-1 rounded-md border border-[#cda851]/25">
                      <Calendar className="w-3 h-3" />
                      {edu.years}
                    </span>
                    <span className="text-[11px] font-mono text-[#8fa996] uppercase">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-semibold text-[#f7f4ec] leading-snug">
                    {edu.institution}
                  </h4>

                  <p className="text-sm font-sans text-[#d0c5b3]">
                    {edu.degree}
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-xs font-mono text-[#8fa996]">Academic Result:</span>
                    <span className="text-xs font-mono font-bold text-[#cda851] bg-[#0a1610] px-2.5 py-0.5 rounded border border-[#cda851]/30">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Right Column - 5 Cols) */}
          <div id="certifications" className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#f7f4ec]">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {VISHAL_FACTS.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundManager.playClick()}
                  className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#162f22] border border-[#cda851]/30 flex items-center justify-center text-[#cda851] shrink-0 group-hover:scale-105 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#0f2218] text-[#8fa996] border border-[#8fa996]/20">
                      {cert.type}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-semibold text-[#f7f4ec] leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-[#cda851] mt-1">
                      Issuer: {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on resume integrity */}
            <div className="p-4 rounded-2xl bg-[#0e2217]/60 border border-[#8fa996]/15 text-xs text-[#8fa996] leading-relaxed">
              &bull; Certified academic records and course completions verified against Vishal Arepalli's official resume.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
