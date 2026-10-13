import React, { useRef, useState } from 'react';
import { Sparkles, MapPin, GraduationCap } from 'lucide-react';

export const AboutPortrait: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg tilt
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-lg mx-auto">
      {/* 3D Interactive Framed Portrait */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-[#cda851]/30 shadow-2xl group cursor-pointer"
      >
        {/* Genuine High-Res Photograph of Vishal */}
        <img
          src={`${import.meta.env.BASE_URL}assets/vishal_photo.jpg`}
          alt="Vishal Arepalli"
          className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105 select-none"
        />

        {/* Soft atmospheric gradient lighting matching the storyboard */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610] via-transparent to-transparent opacity-75 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1610]/80 border border-[#8fa996]/20 backdrop-blur-md pointer-events-none">
          <GraduationCap className="w-3.5 h-3.5 text-[#cda851]" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#f7f4ec]/80">
            Computer Science
          </span>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#162f22]/70 text-[#cda851] text-[11px] font-sans border border-[#cda851]/20 backdrop-blur-md pointer-events-none">
          <Sparkles className="w-3 h-3" />
          <span>Vishal Arepalli</span>
        </div>

        {/* Bottom Floating Info Pill */}
        <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0a1610]/90 border border-[#8fa996]/25 backdrop-blur-md flex items-center justify-between pointer-events-none">
          <div>
            <h3 className="font-display text-xl text-[#f7f4ec] font-semibold leading-tight">
              Vishal Arepalli
            </h3>
            <p className="text-xs text-[#cda851] font-mono mt-0.5">
              DVR & Dr. HS MIC College of Technology
            </p>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#8fa996] font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#8fa996]" />
            <span>Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};
