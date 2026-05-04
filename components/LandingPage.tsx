import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { PageView } from '../types';
import { PORTFOLIO_OWNER, ROLE, TAGLINE, SOCIAL_LINKS, PROFILE_IMAGE_URL, RESUME_URL } from '../constants';

interface LandingPageProps {
  setPage: (page: PageView) => void;
}

const navItems: { id: PageView; label: string }[] = [
  { id: 'about',        label: 'About'              },
  { id: 'experience',   label: 'Experience'          },
  { id: 'competitions', label: 'Work & Competitions' },
  { id: 'photography',  label: 'Photography'         },
];

export const LandingPage: React.FC<LandingPageProps> = ({ setPage }) => {
  const linkedinUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
  const emailUrl    = SOCIAL_LINKS.find(l => l.name === 'Email')?.url    || '#';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&sat=-100';
  };

  return (
    // flex-col on mobile (photo top → content bottom)
    // md:flex-row-reverse puts photo on RIGHT, content on LEFT on desktop
    <div className="flex flex-col md:flex-row-reverse min-h-screen w-full overflow-hidden">

      {/* ── Photo Panel (first in DOM = top on mobile, right on desktop) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-64 md:h-screen md:w-[55%] relative overflow-hidden bg-slate-200 shrink-0"
      >
        <img
          src={PROFILE_IMAGE_URL}
          alt="Hyunjun You"
          className="w-full h-full object-cover object-top md:object-center hover:scale-105 transition-transform duration-[2s]"
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />
        {/* Right-side gradient for desktop blending */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* ── Content Panel (second in DOM = bottom on mobile, left on desktop) ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full md:w-[45%] md:h-screen flex flex-col justify-between
                   px-8 py-10 md:px-16 md:py-14 bg-white"
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase"
        >
          Portfolio · 2025
        </motion.p>

        {/* Name + Role + Tagline + Nav */}
        <div className="flex flex-col gap-8 my-8 md:my-0">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0F1C2E] leading-tight mb-2">
              {PORTFOLIO_OWNER}
            </h1>
            <p className="text-slate-500 text-sm mb-4">{ROLE}</p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{TAGLINE}</p>
          </div>

          {/* Nav list */}
          <nav className="flex flex-col">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.07 }}
                onClick={() => setPage(item.id)}
                className="group flex items-center justify-between py-3 border-b border-slate-100
                           text-slate-700 hover:text-[#0F1C2E] transition-colors text-left"
              >
                <span className="text-sm">{item.label}</span>
                <ArrowRight
                  size={14}
                  className="text-slate-300 group-hover:text-[#D4A853] group-hover:translate-x-1 transition-all duration-200"
                />
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + navItems.length * 0.07 }}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-slate-100
                         text-slate-400 hover:text-[#D4A853] transition-colors"
            >
              <span className="text-sm">Resume ↗</span>
            </motion.a>
          </nav>
        </div>

        {/* Bottom: socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex items-center gap-5 pt-4 md:pt-0"
        >
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
             className="text-slate-400 hover:text-[#0F1C2E] transition-colors" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={emailUrl}
             className="text-slate-400 hover:text-[#0F1C2E] transition-colors" aria-label="Email">
            <Mail size={17} />
          </a>
          <span className="text-xs text-slate-400 font-mono">hj.you@mail.utoronto.ca</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
