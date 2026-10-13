import React, { useState } from 'react';
import { soundManager } from '../utils/audio';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    soundManager.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 backdrop-blur-md bg-[#0a1610]/70 border-b border-[#8fa996]/15 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b3b2b] to-[#0f2218] border border-[#cda851]/40 flex items-center justify-center font-display text-2xl font-bold text-[#cda851] group-hover:border-[#cda851] group-hover:scale-105 transition-all shadow-md">
            V
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg tracking-wider font-semibold text-[#f7f4ec] leading-none">
              Vishal Arepalli
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#8fa996] uppercase mt-0.5">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#about"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            Education
          </a>
          <a
            href="#certifications"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            Certifications
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="text-sm font-medium text-[#d0c5b3] hover:text-[#cda851] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Resume PDF Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}assets/vishal_resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#cda851] text-[#0a1610] hover:bg-[#e2c275] transition-all shadow cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0f2218] border border-[#8fa996]/20 text-[#d0c5b3]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 border-t border-[#8fa996]/20 mt-3 flex flex-col gap-3 animate-in fade-in">
          <a
            href="#about"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg hover:bg-[#162f22] text-[#f7f4ec] font-medium"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg hover:bg-[#162f22] text-[#f7f4ec] font-medium"
          >
            Technical Skills
          </a>
          <a
            href="#projects"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg hover:bg-[#162f22] text-[#f7f4ec] font-medium"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg hover:bg-[#162f22] text-[#f7f4ec] font-medium"
          >
            Education & Certifications
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg hover:bg-[#162f22] text-[#f7f4ec] font-medium"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-[#8fa996]/10 px-2">
            <a
              href={`${import.meta.env.BASE_URL}assets/vishal_resume.pdf`}
              target="_blank"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#cda851] text-[#0a1610] text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
