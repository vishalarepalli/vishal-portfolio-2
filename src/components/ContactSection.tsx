import React, { useState } from 'react';
import { VISHAL_FACTS } from '../content/introduction';
import { Mail, Phone, Copy, Check, Send, Coffee } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleComposeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    const mailtoUrl = `mailto:${VISHAL_FACTS.email}?subject=${encodeURIComponent(
      subject || 'Collaboration Inquiry for Vishal Arepalli'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(205,168,81,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#cda851]">
            Direct Reach & Inquiries
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#f7f4ec]">
            Let's Connect
          </h2>
          <p className="text-sm font-sans text-[#8fa996]">
            Open for opportunities, collaborations, and practical engineering projects.
          </p>
          <div className="w-16 h-[2px] bg-[#cda851]/40 mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (Left Column - 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-[#f7f4ec]">
              Official Contact Information
            </h3>
            <p className="text-sm font-sans text-[#d0c5b3] leading-relaxed font-light">
              Feel free to reach out directly via email or phone. I welcome technical conversations, project discussions, and professional software development opportunities.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8fa996] uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${VISHAL_FACTS.email}`}
                      onClick={() => soundManager.playClick()}
                      className="text-base sm:text-lg font-medium text-[#f7f4ec] hover:text-[#cda851] transition-colors block"
                    >
                      {VISHAL_FACTS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => copyToClipboard(VISHAL_FACTS.email, 'email')}
                    title="Copy email to clipboard"
                    className="p-2.5 rounded-xl bg-[#0f2218] hover:bg-[#1a3828] text-[#8fa996] hover:text-[#cda851] border border-[#8fa996]/20 transition-all cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${VISHAL_FACTS.email}`}
                    onClick={() => soundManager.playClick()}
                    className="px-4 py-2 rounded-xl bg-[#cda851] hover:bg-[#e2c275] text-[#0a1610] text-xs font-semibold transition-all cursor-pointer"
                  >
                    Send Mail
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-3xl glass-panel border border-[#8fa996]/20 hover:border-[#cda851]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#162f22] border border-[#cda851]/40 flex items-center justify-center text-[#cda851] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8fa996] uppercase tracking-wider">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${VISHAL_FACTS.phone.replace(/\s+/g, '')}`}
                      onClick={() => soundManager.playClick()}
                      className="text-base sm:text-lg font-medium text-[#f7f4ec] hover:text-[#cda851] transition-colors block font-mono"
                    >
                      {VISHAL_FACTS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => copyToClipboard(VISHAL_FACTS.phone, 'phone')}
                    title="Copy phone to clipboard"
                    className="p-2.5 rounded-xl bg-[#0f2218] hover:bg-[#1a3828] text-[#8fa996] hover:text-[#cda851] border border-[#8fa996]/20 transition-all cursor-pointer"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${VISHAL_FACTS.phone.replace(/\s+/g, '')}`}
                    onClick={() => soundManager.playClick()}
                    className="px-4 py-2 rounded-xl bg-[#162f22] hover:bg-[#204532] text-[#cda851] border border-[#cda851]/40 text-xs font-semibold transition-all cursor-pointer"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Storyboard Motif: Desk Coffee Mug */}
            <div className="p-5 rounded-2xl bg-[#0e2217]/70 border border-[#8fa996]/20 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#162f22] text-[#cda851] border border-[#cda851]/30">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-[#f7f4ec] italic">
                  "Better Code, Better Tomorrow"
                </p>
                <p className="text-xs text-[#8fa996] font-mono mt-0.5">
                  Build &bull; Learn &bull; Grow
                </p>
              </div>
            </div>
          </div>

          {/* Quick Message Form (Right Column - 6 Cols) */}
          <div className="lg:col-span-6 p-8 rounded-3xl glass-panel border border-[#8fa996]/25 shadow-2xl">
            <h3 className="font-display text-2xl font-semibold text-[#f7f4ec] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#8fa996] mb-6">
              Composes an email formatted directly for Vishal's inbox.
            </p>

            <form onSubmit={handleComposeSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#d0c5b3] mb-1.5 uppercase tracking-wider">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Software Development Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1811] border border-[#8fa996]/25 text-[#f7f4ec] placeholder-[#8fa996]/50 text-sm focus:outline-none focus:border-[#cda851] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#d0c5b3] mb-1.5 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note or question here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0a1811] border border-[#8fa996]/25 text-[#f7f4ec] placeholder-[#8fa996]/50 text-sm focus:outline-none focus:border-[#cda851] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#cda851] to-[#e2c275] text-[#0a1610] font-semibold tracking-wide hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail Client with Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
