import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { PageView } from '../types';
import { PORTFOLIO_OWNER, ROLE, SOCIAL_LINKS, PROFILE_IMAGE_URL } from '../constants';

interface LandingPageProps {
  setPage: (page: PageView) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setPage }) => {
  const linkedinUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
  const emailUrl = SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const currentSrc = target.src.toLowerCase();
    
    // Logic: If it failed, try the next likely candidate.
    // Order: default -> .jpeg -> .png -> .JPG (capital) -> hide
    
    if (currentSrc.endsWith('hyunjun-landing.jpeg')) {
       // Failed to load .jpg, try .jpeg
       target.src = '/hyunjun-landing.jpeg';
    } else if (currentSrc.endsWith('hyunjun-landing.jpeg')) {
       // Failed to load .jpeg, try Capitalized .jpg (often an issue on Git/Linux)
       target.src = '/Hyunjun-Landing.jpeg';
    } else if (currentSrc.includes('hyunjun-landing')) {
       // Final fallback attempt
       target.style.display = 'none';
       console.error("Could not load profile image. Please ensure 'hyunjun-landing.jpeg' exists in the 'public' folder.");
    }
  };
ㅇ
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden font-sans">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative z-10 bg-white"
      >
        <div className="flex flex-col items-center text-center max-w-sm w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {PORTFOLIO_OWNER}
          </h1>
          <p className="text-slate-500 text-lg font-light mb-10 text-center">
            {ROLE}
          </p>

          <div className="flex flex-col space-y-4 w-full max-w-[240px] mb-12">
            <button 
              onClick={() => setPage('about')}
              className="w-full py-3 px-6 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              About Me
            </button>
            <button 
              onClick={() => setPage('rotman')}
              className="w-full py-3 px-6 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Rotman Commerce
            </button>
            <button 
              onClick={() => setPage('photography')}
              className="w-full py-3 px-6 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Photography
            </button>
          </div>

          <div className="flex items-center gap-8">
            <a 
              href={linkedinUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={emailUrl} 
              className="text-slate-600 hover:text-slate-900 transition-colors transform hover:scale-110 duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-gray-100 flex items-center justify-center"
      >
        <img 
          src={PROFILE_IMAGE_URL}
          alt="Hyunjun You - Portrait"
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[2s]"
          onError={handleImageError}
        />
        {/* Fallback text if image fails (hidden by image if loaded) */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 -z-10">
           Loading...
        </div>
      </motion.div>
    </div>
  );
};