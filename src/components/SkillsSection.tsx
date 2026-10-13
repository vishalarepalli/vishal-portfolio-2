import React from 'react';
import { VISHAL_FACTS } from '../content/introduction';
import { Code2, Globe, Database, Layers } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(205,168,81,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#cda851]">
            Technical Foundation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            My Skills
          </h2>
          <p className="text-sm font-sans text-[#8fa996]">
            Technologies & concepts explicitly documented in my verified resume.
          </p>
          <div className="w-16 h-[2px] bg-[#cda851]/40 mx-auto mt-2" />
        </div>

        {/* 4 Clean Categories of Verified Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Programming Languages */}
          <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#f7f4ec]">
                    Languages
                  </h3>
                  <p className="text-[11px] font-mono text-[#8fa996] uppercase">
                    Core Programming
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {VISHAL_FACTS.skills.programmingLanguages.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playClick()}
                    className="p-3.5 rounded-xl bg-[#0f2218]/80 border border-[#8fa996]/15 hover:border-[#cda851]/40 transition-colors flex items-center justify-between"
                  >
                    <span className="font-sans text-sm font-semibold text-[#f7f4ec]">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#162f22] text-[#cda851] border border-[#cda851]/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#8fa996]/10 text-[11px] text-[#8fa996] font-mono">
              3 Listed Languages
            </div>
          </div>

          {/* 2. Web Technologies */}
          <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#f7f4ec]">
                    Web Technologies
                  </h3>
                  <p className="text-[11px] font-mono text-[#8fa996] uppercase">
                    Frontend Standard
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {VISHAL_FACTS.skills.webTechnologies.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playClick()}
                    className="p-3.5 rounded-xl bg-[#0f2218]/80 border border-[#8fa996]/15 hover:border-[#cda851]/40 transition-colors flex items-center justify-between"
                  >
                    <span className="font-sans text-sm font-semibold text-[#f7f4ec]">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#162f22] text-[#8fa996] border border-[#8fa996]/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#8fa996]/10 text-[11px] text-[#8fa996] font-mono">
              3 Web Standards
            </div>
          </div>

          {/* 3. Database */}
          <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#f7f4ec]">
                    Database
                  </h3>
                  <p className="text-[11px] font-mono text-[#8fa996] uppercase">
                    Relational Storage
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {VISHAL_FACTS.skills.database.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playClick()}
                    className="p-3.5 rounded-xl bg-[#0f2218]/80 border border-[#8fa996]/15 hover:border-[#cda851]/40 transition-colors flex items-center justify-between"
                  >
                    <span className="font-sans text-sm font-semibold text-[#f7f4ec]">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#162f22] text-[#cda851] border border-[#cda851]/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#8fa996]/10 text-[11px] text-[#8fa996] font-mono">
              Relational SQL Engine
            </div>
          </div>

          {/* 4. Concepts */}
          <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#f7f4ec]">
                    Concepts
                  </h3>
                  <p className="text-[11px] font-mono text-[#8fa996] uppercase">
                    Systems Architecture
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {VISHAL_FACTS.skills.concepts.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playClick()}
                    className="p-3.5 rounded-xl bg-[#0f2218]/80 border border-[#8fa996]/15 hover:border-[#cda851]/40 transition-colors flex items-center justify-between"
                  >
                    <span className="font-sans text-sm font-semibold text-[#f7f4ec]">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#162f22] text-[#8fa996] border border-[#8fa996]/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#8fa996]/10 text-[11px] text-[#8fa996] font-mono">
              Database Architecture
            </div>
          </div>
        </div>

        {/* Storyboard Panel 4 Motif: Tactile Wooden Blocks ("CODE • LEARN • BUILD • REPEAT") */}
        <div className="mt-14 p-6 rounded-3xl glass-panel-subtle border border-[#8fa996]/20 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="px-5 py-2.5 rounded-xl bg-[#162f22] border border-[#cda851]/30 font-display text-xl font-bold tracking-widest text-[#f7f4ec] uppercase shadow">
            CODE
          </div>
          <span className="text-[#cda851] text-lg">&bull;</span>
          <div className="px-5 py-2.5 rounded-xl bg-[#162f22] border border-[#cda851]/30 font-display text-xl font-bold tracking-widest text-[#f7f4ec] uppercase shadow">
            LEARN
          </div>
          <span className="text-[#cda851] text-lg">&bull;</span>
          <div className="px-5 py-2.5 rounded-xl bg-[#162f22] border border-[#cda851]/30 font-display text-xl font-bold tracking-widest text-[#f7f4ec] uppercase shadow">
            BUILD
          </div>
          <span className="text-[#cda851] text-lg">&bull;</span>
          <div className="px-5 py-2.5 rounded-xl bg-[#162f22] border border-[#cda851]/30 font-display text-xl font-bold tracking-widest text-[#f7f4ec] uppercase shadow">
            REPEAT
          </div>
        </div>
      </div>
    </section>
  );
};
