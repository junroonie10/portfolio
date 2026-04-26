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
    <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-1/2 flex flex-col justify-between p-10 md:p-16 relative z-10 bg-white"
      >
        {/* Top: Name + Role */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase mb-4"
          >
            Portfolio
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
            {PORTFOLIO_OWNER}
          </h1>
          <p className="text-slate-500 text-base font-light mb-6">
            {ROLE}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-light">
            {TAGLINE}
          </p>
        </div>

        {/* Middle: Nav links */}
        <div className="flex flex-col gap-3 my-10">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              onClick={() => setPage(item.id)}
              className="group flex items-center justify-between w-full max-w-xs py-3 border-b border-slate-100 text-left text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span className="text-sm font-medium">{item.label}</span>
              <ArrowRight
                size={14}
                className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200"
              />
            </motion.button>
          ))}

          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + navItems.length * 0.08 }}
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full max-w-xs py-3 border-b border-slate-100 text-left text-slate-400 hover:text-slate-900 transition-colors"
          >
            <span className="text-sm font-medium">Resume ↗</span>
          </motion.a>
        </div>

        {/* Bottom: Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-6"
        >
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={emailUrl}
            className="text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <span className="text-xs text-slate-300 font-mono">hj.you@mail.utoronto.ca</span>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 h-[45vh] md:h-full relative overflow-hidden bg-gray-100"
      >
        <img
          src={PROFILE_IMAGE_URL}
          alt="Hyunjun You"
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s]"
          onError={handleImageError}
          referrerPolicy="no-referrer"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </div>
  );
};
