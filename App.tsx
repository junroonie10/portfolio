import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ProjectDetail } from './components/ProjectDetail';
import { LandingPage } from './components/LandingPage';
import { PageView, Project } from './types';
import {
  PROJECTS,
  SOCIAL_LINKS,
  RESUME_URL,
  BIO_TEXT,
  EXPERIENCE,
  SKILLS,
} from './constants';

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0 },
};

const AWARD_STYLE: Record<string, string> = {
  '2nd Place':     'bg-[#FBF5E6] text-[#9A6E00] border border-[#D4A853]/50',
  'Semi-finalist': 'bg-[#F0F4F8] text-[#1E3048] border border-[#1E3048]/20',
};

/* ── Impact stats ─────────────────────────────────── */
const StatRow = ({ stats }: { stats: { value: string; label: string }[] }) => (
  <div className="flex flex-wrap gap-6 py-3 my-2 border-t border-b border-slate-100">
    {stats.map(s => (
      <div key={s.label} className="flex flex-col min-w-[52px]">
        <span className="text-lg font-bold text-[#0F1C2E] leading-tight">{s.value}</span>
        <span className="text-xs text-slate-400 mt-0.5">{s.label}</span>
      </div>
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════ */
const App: React.FC = () => {
  const [currentPage, setCurrentPage]           = useState<PageView>('landing');
  const [selectedProject, setSelectedProject]   = useState<Project | null>(null);
  const [selectedAlbum, setSelectedAlbum]       = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
    setSelectedAlbum(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'landing') {
    return <LandingPage setPage={handlePageChange} />;
  }

  const renderContent = () => {
    switch (currentPage) {

      /* ══════════════════════════════════════════════
         ABOUT
      ══════════════════════════════════════════════ */
      case 'about':
        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-5xl mx-auto">

            {/* ── Page Header ── */}
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase mb-3">
                About Me
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] leading-tight mb-4">
                Hyunjun You
              </h1>
              <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
                Welcome to my portfolio. I'm a commerce student at Rotman (University of Toronto),
                focusing on strategy and data science — passionate about consulting, product, and
                how rigorous thinking translates into real decisions. Feel free to explore.
              </p>
            </div>

            {/* ── Two-column: photo + bio ── */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-14">
              {/* Photo */}
              <div className="w-full md:w-[42%] shrink-0">
                <img
                  src="https://drive.google.com/thumbnail?sz=w1000&id=1wTNsvvxrtfHwhgp8SGzabjzNSGg6Xezr"
                  alt="Hyunjun You"
                  className="w-full aspect-[4/5] object-cover object-bottom"
                />
              </div>

              {/* Bio + Skills */}
              <div className="w-full md:w-[58%] flex flex-col gap-8 md:pt-2">
                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Rotman Commerce '27 · Strategy & Data Science · Minor in Economics
                  </p>
                  <p className="text-xs text-slate-400 mb-6">GPA 3.80 / 4.00 · Toronto, ON</p>
                  <p className="text-slate-700 text-sm leading-7 whitespace-pre-line">
                    {BIO_TEXT}
                  </p>
                </div>

                {/* Skills — clean label + tag layout */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-5">
                    Skills
                  </p>
                  <div className="flex flex-col gap-4">
                    {SKILLS.map(group => (
                      <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                        <p className="text-xs font-semibold text-[#0F1C2E] w-36 shrink-0 pt-0.5">
                          {group.category}
                        </p>
                        <p className="text-sm text-slate-500">
                          {group.items.join(' · ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               bg-[#0F1C2E] text-white text-sm font-medium
                               hover:bg-[#1a2d42] transition-colors">
                    Download Resume <ExternalLink size={13} />
                  </a>
                  <a href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#'}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm
                               hover:border-[#0F1C2E] transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href={SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#'}
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm
                               hover:border-[#0F1C2E] transition-colors">
                    <Mail size={14} /> Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );

      /* ══════════════════════════════════════════════
         EXPERIENCE
      ══════════════════════════════════════════════ */
      case 'experience': {
        const professional = EXPERIENCE.filter(e => e.type === 'professional');
        const leadership   = EXPERIENCE.filter(e => e.type === 'leadership');
        const military     = EXPERIENCE.filter(e => e.type === 'military');

        const ExpItem = ({ exp, delay = 0 }: { exp: typeof EXPERIENCE[0]; delay?: number }) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="pl-5 border-l-2 border-[#D4A853]/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
              <h3 className="text-base font-semibold text-[#0F1C2E]">{exp.company}</h3>
              <span className="text-xs font-mono text-slate-400 shrink-0">
                {exp.period} · {exp.location}
              </span>
            </div>
            <p className="text-sm text-slate-500 italic mb-3">{exp.role}</p>
            {exp.stats && exp.stats.length > 0 && <StatRow stats={exp.stats} />}
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-slate-600 leading-6">{b}</li>
              ))}
            </ul>
          </motion.div>
        );

        const ExpSection = ({ label, items, baseDelay = 0 }: {
          label: string; items: typeof EXPERIENCE; baseDelay?: number;
        }) => (
          <div className="mb-14">
            <h2 className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-7">
              {label}
            </h2>
            <div className="flex flex-col gap-10">
              {items.map((exp, i) => (
                <ExpItem key={exp.id} exp={exp} delay={baseDelay + i * 0.08} />
              ))}
            </div>
          </div>
        );

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase mb-3">
                Experience
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] leading-tight mb-4">
                Professional Background
              </h1>
              <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                My experience spans management consulting, strategy research, and operational leadership.
                Feel free to click through for more detail on any role.
              </p>
            </div>
            <ExpSection label="Professional"     items={professional} baseDelay={0.1} />
            <ExpSection label="Leadership"       items={leadership}   baseDelay={0.15} />
            <ExpSection label="Military Service" items={military}     baseDelay={0.2} />
          </motion.div>
        );
      }

      /* ══════════════════════════════════════════════
         WORK & COMPETITIONS  —  2-col image grid
      ══════════════════════════════════════════════ */
      case 'competitions': {
        const compProjects = PROJECTS.filter(p => p.section === 'competitions');

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-5xl mx-auto">

            {/* Page Header */}
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase mb-3">
                Work & Competitions
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] leading-tight mb-4">
                Projects & Case Competitions
              </h1>
              <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
                A selection of strategy projects, case competitions, and consulting work.
                Feel free to click on any project to see more detail.
              </p>
            </div>

            {/* ── 2-column image grid (no borders) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pb-16">
              {compProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  {/* Image — primary element */}
                  <div className="aspect-[4/3] overflow-hidden bg-[#0F1C2E]/8 mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0
                                 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Text below image */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[#0F1C2E] leading-snug mb-1
                                     group-hover:text-[#D4A853] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {project.category} · {project.year}
                      </p>
                    </div>
                    {project.award && (
                      <span className={`text-xs px-2.5 py-1 shrink-0 font-medium whitespace-nowrap
                        ${AWARD_STYLE[project.award] ?? 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
                        {project.award}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      }

      /* ══════════════════════════════════════════════
         PHOTOGRAPHY
      ══════════════════════════════════════════════ */
      case 'photography':
        if (selectedAlbum) {
          return (
            <motion.div {...fadeUp} transition={{ duration: 0.35 }}
              className="w-full max-w-5xl mx-auto">
              <button
                onClick={() => { setSelectedAlbum(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center gap-2 text-slate-400 hover:text-[#0F1C2E]
                           transition-colors mb-10"
              >
                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase">Back</span>
              </button>

              <div className="mb-10 md:mb-14">
                <p className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase mb-3">
                  Photography
                </p>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] mb-2">
                  {selectedAlbum.title}
                </h1>
                <p className="text-slate-500 text-sm">{selectedAlbum.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 pb-16">
                {selectedAlbum.gallery?.map((url, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="relative aspect-[3/4] overflow-hidden bg-[#0F1C2E]/5">
                    <img src={url} alt={`${selectedAlbum.title} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-5xl mx-auto">

            {/* Page Header */}
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-medium tracking-[0.22em] text-[#D4A853] uppercase mb-3">
                Photography
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] leading-tight mb-4">
                Moments
              </h1>
              <p className="text-slate-500 text-base max-w-xl leading-relaxed">
                A collection of moments from Toronto, Saigon, and Seoul. Shot on iPhone.
                Feel free to click on any album to explore.
              </p>
            </div>

            {/* 2-col album grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 pb-16">
              {PROJECTS.filter(p => p.section === 'photography').map((project, idx) => (
                <motion.div key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => { setSelectedAlbum(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group cursor-pointer">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-[#0F1C2E]/5 mb-3">
                    <img src={project.imageUrl} alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0
                                 group-hover:scale-105 transition-all duration-500"
                      loading="lazy" />
                  </div>
                  {/* Title below */}
                  <h3 className="text-sm font-semibold text-[#0F1C2E] group-hover:text-[#D4A853] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{project.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#0F1C2E]
                    selection:bg-[#0F1C2E] selection:text-white">
      <Navigation
        currentPage={currentPage}
        setPage={handlePageChange}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <main className="min-h-screen pt-24 pb-20 px-5 md:px-14 lg:px-24">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
