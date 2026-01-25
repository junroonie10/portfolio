import React from 'react';
import { PageView } from '../types';
import { PORTFOLIO_OWNER, SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

interface NavigationProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  setPage, 
  isMobileMenuOpen,
  toggleMobileMenu
}) => {
  
  const navItems: { id: PageView; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'rotman', label: 'Rotman Commerce' },
    { id: 'photography', label: 'Photography' },
  ];

  const linkedinUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
  const emailUrl = SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#';

  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-white z-50 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
      
      {/* Mobile Hamburger */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden p-2 text-black focus:outline-none absolute left-8 z-50"
      >
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Desktop Left: Links */}
      <div className="hidden md:flex gap-8 items-center w-1/3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`
              text-sm font-medium transition-colors duration-200
              ${currentPage === item.id 
                ? 'text-black' 
                : 'text-gray-500 hover:text-black'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Center: Brand */}
      <div className="flex-1 md:w-1/3 flex justify-center">
        <button 
          onClick={() => setPage('landing')}
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition-opacity"
        >
          {PORTFOLIO_OWNER}
        </button>
      </div>

      {/* Right: Socials */}
      <div className="hidden md:flex justify-end gap-6 items-center w-1/3">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:opacity-70 transition-opacity"><Linkedin size={20} /></a>
        <a href={emailUrl} className="text-slate-900 hover:opacity-70 transition-opacity"><Mail size={20} /></a>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8
        transition-all duration-300 transform
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
         {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setPage(item.id);
              toggleMobileMenu();
            }}
            className="text-2xl font-light text-slate-900"
          >
            {item.label}
          </button>
        ))}
        <div className="flex gap-8 mt-8">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900"><Linkedin size={28} /></a>
            <a href={emailUrl} className="text-slate-900"><Mail size={28} /></a>
        </div>
      </div>
    </nav>
  );
};