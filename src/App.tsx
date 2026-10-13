import React, { useState } from 'react';
import { Atmosphere3D } from './components/Atmosphere3D';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0b1711] text-[#f7f4ec] font-sans selection:bg-[#cda851]/30 selection:text-[#f7f4ec]">
      {/* 5-Second Cinematic Intro with Built-in Whoosh */}
      {showIntro && (
        <CinematicIntro
          onComplete={handleIntroComplete}
        />
      )}

      {/* 3D Atmospheric Background (Fog, Lighting, Particles) */}
      <Atmosphere3D />

      {/* Subtle Film Grain Layer */}
      <div className="fixed inset-0 pointer-events-none z-1 film-grain opacity-60" />

      {/* Main Website Structure */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationCertifications />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
