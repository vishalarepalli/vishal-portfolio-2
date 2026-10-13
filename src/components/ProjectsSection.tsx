import React, { useState } from 'react';
import { Terminal, Music, Activity, Play, Pause, Send } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const ProjectsSection: React.FC = () => {
  // Terminal Project Interactive State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "MySQL Terminal v8.0 Connected.",
    "Type 'help', 'skills', 'education', or 'select * from projects;'",
  ]);

  // Audio Player Project Mockup State
  const [mockIsPlaying, setMockIsPlaying] = useState(false);
  const [mockCurrentTrack, setMockCurrentTrack] = useState('Lo-Fi Coding Beats');

  // Fitness Tracker State
  const [steps, setSteps] = useState(8420);

  const handleTerminalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!terminalInput.trim()) return;

    soundManager.playClick();
    const cmd = terminalInput.trim().toLowerCase();
    const newOutput = [...terminalOutput, `$ ${terminalInput}`];

    if (cmd === 'help') {
      newOutput.push(
        "Available commands: 'help', 'skills', 'projects', 'education', 'contact', 'whoami', 'clear'"
      );
    } else if (cmd === 'whoami') {
      newOutput.push("Developer: Vishal Arepalli (B.Tech CSE)");
    } else if (cmd === 'skills') {
      newOutput.push("Languages: Python, C, Java | Web: HTML, CSS, JS | DB: MySQL, DBMS");
    } else if (cmd.includes('project')) {
      newOutput.push(
        "1. MySQL Terminal Portfolio  2. MERN Audio Player & Manager  3. Flutter Fitness Tracker"
      );
    } else if (cmd === 'education') {
      newOutput.push(
        "B.Tech CSE: DVR & Dr. HS MIC College | Intermediate: Narayana JC | SSC: Narayana TS"
      );
    } else if (cmd === 'contact') {
      newOutput.push("Email: vishalarepalli246@gmail.com | Phone: +91 9666246114");
    } else if (cmd === 'clear') {
      setTerminalOutput(["Terminal cleared."]);
      setTerminalInput('');
      return;
    } else {
      newOutput.push(`Command not recognized: '${cmd}'. Type 'help' for options.`);
    }

    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  const handleRunPreset = (cmd: string) => {
    setTerminalInput(cmd);
    soundManager.playClick();
    const newOutput = [...terminalOutput, `$ ${cmd}`];
    if (cmd === 'skills') {
      newOutput.push("Languages: Python, C, Java | Web: HTML, CSS, JS | DB: MySQL, DBMS");
    } else if (cmd === 'projects') {
      newOutput.push("1. MySQL Terminal Portfolio  2. MERN Audio Player  3. Flutter Fitness Tracker");
    } else if (cmd === 'education') {
      newOutput.push("B.Tech CSE (7.6/10) | Intermediate (82.2%) | SSC (95%)");
    }
    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(34,67,50,0.25)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#cda851]">
            Ideas &rarr; Code &rarr; Real World
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            My Projects
          </h2>
          <p className="text-sm font-sans text-[#8fa996]">
            Strictly presenting the 3 projects explicitly developed and documented in my resume.
          </p>
          <div className="w-16 h-[2px] bg-[#cda851]/40 mx-auto mt-2" />
        </div>

        {/* 3 Verified Projects Grid */}
        <div className="space-y-12">
          {/* PROJECT 1: MySQL Terminal-Based Personal Portfolio */}
          <div className="p-8 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#cda851]">
                    Project 01 &bull; CLI Interface
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#f7f4ec]">
                    MySQL Terminal-Based Personal Portfolio
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#d0c5b3] font-light leading-relaxed">
                <p>
                  &bull; Developed an interactive, terminal-inspired portfolio website to showcase technical skills, projects, certifications, and educational background.
                </p>
                <p>
                  &bull; Designed a command-line-style interface and deployed the website using GitHub Pages for easy accessibility.
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#cda851] border border-[#cda851]/25">
                  MySQL
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#f7f4ec] border border-[#8fa996]/20">
                  Command-Line Interface
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#8fa996] border border-[#8fa996]/20">
                  GitHub Pages
                </span>
              </div>
            </div>

            {/* Interactive Terminal Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden bg-[#07130d] border border-[#8fa996]/30 shadow-2xl font-code text-xs">
                {/* Terminal Header */}
                <div className="px-4 py-2.5 bg-[#0e2217] border-b border-[#8fa996]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-[#8fa996] text-[11px] ml-2">vishal@portfolio: ~/mysql-cli</span>
                  </div>
                  <span className="text-[10px] text-[#cda851]">Active Session</span>
                </div>

                {/* Terminal Screen */}
                <div className="p-4 h-52 overflow-y-auto space-y-1.5 text-[#d0c5b3] select-text">
                  {terminalOutput.map((line, idx) => (
                    <div
                      key={idx}
                      className={line.startsWith('$') ? 'text-[#cda851] font-semibold' : 'text-[#8fa996]'}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Quick Command Buttons */}
                <div className="px-4 py-2 bg-[#0a1811] border-t border-[#8fa996]/15 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[10px] text-[#8fa996] uppercase tracking-wider">Quick:</span>
                  <button
                    onClick={() => handleRunPreset('skills')}
                    className="px-2 py-0.5 rounded bg-[#162f22] hover:bg-[#1e4230] text-[#cda851] text-[10px]"
                  >
                    skills
                  </button>
                  <button
                    onClick={() => handleRunPreset('projects')}
                    className="px-2 py-0.5 rounded bg-[#162f22] hover:bg-[#1e4230] text-[#cda851] text-[10px]"
                  >
                    projects
                  </button>
                  <button
                    onClick={() => handleRunPreset('education')}
                    className="px-2 py-0.5 rounded bg-[#162f22] hover:bg-[#1e4230] text-[#cda851] text-[10px]"
                  >
                    education
                  </button>
                </div>

                {/* Input Prompt */}
                <form onSubmit={handleTerminalSubmit} className="p-3 bg-[#07130d] flex items-center gap-2 border-t border-[#8fa996]/15">
                  <span className="text-[#cda851] font-bold">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type command ('help')..."
                    className="flex-1 bg-transparent text-[#f7f4ec] outline-none text-xs"
                  />
                  <button type="submit" className="text-[#8fa996] hover:text-[#cda851]">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* PROJECT 2: Audio player and manager – MERN stack */}
          <div className="p-8 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851]">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#cda851]">
                    Project 02 &bull; Full-Stack MERN
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#f7f4ec]">
                    Audio player and manager – MERN stack
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#d0c5b3] font-light leading-relaxed">
                <p>
                  &bull; Developed a full-stack audio player application using MongoDB, Express.js, React, and Node.js with features like audio streaming, playlist management, and user interaction.
                </p>
                <p>
                  &bull; Implemented RESTful APIs and responsive UI to ensure smooth playback experience and efficient data handling across frontend and backend.
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#cda851] border border-[#cda851]/25">
                  MongoDB
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#f7f4ec] border border-[#8fa996]/20">
                  Express.js
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#f7f4ec] border border-[#8fa996]/20">
                  React
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#cda851] border border-[#cda851]/25">
                  Node.js
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#8fa996] border border-[#8fa996]/20">
                  RESTful APIs
                </span>
              </div>
            </div>

            {/* MERN Audio Player Visual Mockup */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#091710] border border-[#8fa996]/30 shadow-2xl flex flex-col space-y-4">
                <div className="flex items-center justify-between border-b border-[#8fa996]/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-[#f7f4ec]">MERN Streaming Node</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#cda851]">RESTful API v1.0</span>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="h-20 bg-[#0e2419] rounded-xl p-3 flex items-center justify-center gap-1.5 overflow-hidden">
                  {[40, 70, 30, 90, 60, 45, 80, 100, 75, 55, 35, 85, 95, 60, 40, 70, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-[#8fa996] to-[#cda851] rounded-full transition-all duration-300"
                      style={{
                        height: `${mockIsPlaying ? Math.max(15, Math.round(h * Math.random())) : Math.round(h * 0.4)}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Player Controls & Track Info */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#f7f4ec]">{mockCurrentTrack}</h4>
                    <p className="text-[11px] text-[#8fa996]">Playlist: Full-Stack Audio Stream</p>
                  </div>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setMockIsPlaying(!mockIsPlaying);
                    }}
                    className="p-3 rounded-full bg-[#cda851] text-[#0a1610] hover:bg-[#e2c275] transition-all cursor-pointer shadow-md"
                  >
                    {mockIsPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                </div>

                {/* Playlist Manager items */}
                <div className="space-y-1.5 pt-2 border-t border-[#8fa996]/10 text-xs">
                  <div
                    onClick={() => {
                      soundManager.playClick();
                      setMockCurrentTrack('Ambient Coding Flow');
                    }}
                    className="p-2 rounded-lg bg-[#142e20] flex items-center justify-between text-[#d0c5b3] hover:text-[#f7f4ec] cursor-pointer"
                  >
                    <span>1. Ambient Coding Flow</span>
                    <span className="font-mono text-[#8fa996]">03:24</span>
                  </div>
                  <div
                    onClick={() => {
                      soundManager.playClick();
                      setMockCurrentTrack('Database Beat Matrix');
                    }}
                    className="p-2 rounded-lg bg-[#0f2218] flex items-center justify-between text-[#8fa996] hover:text-[#f7f4ec] cursor-pointer"
                  >
                    <span>2. Database Beat Matrix</span>
                    <span className="font-mono text-[#8fa996]">04:12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 3: Fitness Tracker- Flutter */}
          <div className="p-8 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#cda851]">
                    Project 03 &bull; Cross-Platform Mobile
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#f7f4ec]">
                    Fitness Tracker- Flutter
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#d0c5b3] font-light leading-relaxed">
                <p>
                  &bull; Built a cross-platform fitness tracking application using Flutter with features like activity monitoring, step counting, and workout tracking.
                </p>
                <p>
                  &bull; Designed an intuitive and responsive UI and integrated real-time data updates to enhance user engagement and performance tracking.
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#cda851] border border-[#cda851]/25">
                  Flutter
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#f7f4ec] border border-[#8fa996]/20">
                  Dart
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#8fa996] border border-[#8fa996]/20">
                  Cross-Platform
                </span>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-[#162f22] text-[#cda851] border border-[#cda851]/25">
                  Real-Time Updates
                </span>
              </div>
            </div>

            {/* Flutter Fitness Mobile Dashboard Mockup */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#0a1710] border border-[#8fa996]/30 shadow-2xl flex flex-col space-y-4">
                <div className="flex items-center justify-between border-b border-[#8fa996]/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-mono text-[#f7f4ec]">Flutter Engine Active</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#cda851]">Real-Time Sync</span>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#12271c] border border-[#8fa996]/15 flex flex-col">
                    <span className="text-xs text-[#8fa996] font-mono uppercase">Steps Counted</span>
                    <span className="text-2xl font-bold font-mono text-[#cda851] mt-1">{steps.toLocaleString()}</span>
                    <span className="text-[11px] text-emerald-400 mt-0.5">&uarr; Goal 10,000</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#12271c] border border-[#8fa996]/15 flex flex-col">
                    <span className="text-xs text-[#8fa996] font-mono uppercase">Workout Log</span>
                    <span className="text-2xl font-bold font-mono text-[#f7f4ec] mt-1">45 min</span>
                    <span className="text-[11px] text-[#cda851] mt-0.5">Cardio Active</span>
                  </div>
                </div>

                {/* Activity Progress Bar & Interaction */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs text-[#8fa996]">
                    <span>Daily Activity Ring</span>
                    <span className="font-mono text-[#cda851]">84% Completed</span>
                  </div>
                  <div className="h-2.5 bg-[#162f22] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8fa996] to-[#cda851] w-[84%]" />
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSteps((s) => s + 50);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#162f22] hover:bg-[#1f4230] text-[#cda851] text-xs font-mono border border-[#cda851]/30 transition-all text-center cursor-pointer"
                >
                  + Simulate Real-Time Step Increment (+50)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
