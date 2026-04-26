import React from 'react';
import { PageView } from '../types';
import { PORTFOLIO_OWNER, SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, X, Menu } from 'lucide-react';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const navItems: { id: PageView; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'competitions', label: 'Work & Competitions' },
  { id: 'photography', label: 'Photography' },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setPage,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const linkedinUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
  const emailUrl = SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#';

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-50 px-6 md:px-16 flex justify-between items-center">

      {/* Left: Brand */}
      <button
        onClick={() => setPage('landing' as PageView)}
        className="text-base font-bold tracking-tight text-slate-900 hover:opacity-60 transition-opacity"
      >
        {PORTFOLIO_OWNER}
      </button>

      {/* Desktop Center: Nav links */}
      <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`text-sm transition-colors duration-200 ${
              currentPage === item.id
                ? 'text-slate-900 font-medium'
                : 'text-slate-400 hover:text-slate-900 font-normal'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Right: Socials */}
      <div className="hidden md:flex gap-5 items-center">
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
      </div>

      {/* Mobile: Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 text-slate-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10
          transition-all duration-300 transform
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setPage(item.id);
              toggleMobileMenu();
            }}
            className={`text-2xl font-light transition-colors ${
              currentPage === item.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="flex gap-8 mt-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={emailUrl} className="text-slate-500 hover:text-slate-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};
