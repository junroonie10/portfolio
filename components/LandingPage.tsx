import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { PageView } from '../types';
import { PORTFOLIO_OWNER, ROLE, TAGLINE, SOCIAL_LINKS, PROFILE_IMAGE_URL, RESUME_URL } from '../constants';

interface LandingPageProps {
  setPage: (page: PageView) => void;
}

const navItems: { id: PageView; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'competitions', label: 'Work & Competitions' },
  { id: 'photography', label: 'Photography' },
];

export const LandingPage: React.FC<LandingPageProps> = ({ setPage }) => {
  const linkedinUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
  const emailUrl = SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&sat=-100';
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Left Panel — Navy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-[45%] flex flex-col justify-between p-10 md:p-16 relative z-10 bg-[#0F1C2E]"
      >
        {/* Top: Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-medium tracking-[0.25em] text-[#D4A853] uppercase"
        >
          Portfolio · 2025
        </motion.p>

        {/* Middle: Name + Role + Tagline + Nav */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              {PORTFOLIO_OWNER}
            </h1>
            <p className="text-slate-400 text-sm font-light mb-5 tracking-wide">
              {ROLE}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-light">
              {TAGLINE}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.08 }}
                onClick={() => setPage(item.id)}
                className="group flex items-center justify-between w-full max-w-xs py-3 border-b border-white/10 text-left text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-sm font-light group-hover:font-medium transition-all">{item.label}</span>
                <ArrowRight
                  size={14}
                  className="text-white/20 group-hover:text-[#D4A853] group-hover:translate-x-1 transition-all duration-200"
                />
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + navItems.length * 0.08 }}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full max-w-xs py-3 border-b border-white/10 text-slate-500 hover:text-[#D4A853] transition-colors"
            >
              <span className="text-sm font-light">Resume ↗</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom: Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="flex items-center gap-6"
        >
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={emailUrl}
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <span className="text-xs text-slate-600 font-mono">hj.you@mail.utoronto.ca</span>
        </motion.div>
      </motion.div>

      {/* Right Panel — Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-[55%] h-[45vh] md:h-full relative overflow-hidden bg-[#1a2d42]"
      >
        <img
          src={PROFILE_IMAGE_URL}
          alt="Hyunjun You"
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s]"
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />
        {/* Gradient bridge to nav */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F1C2E] to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};
