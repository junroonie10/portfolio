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
  '2nd Place':     'bg-[#FBF5E6] text-[#9A6E00] border border-[#D4A853]/40',
  'Semi-finalist': 'bg-[#F0F4F8] text-[#1E3048] border border-[#1E3048]/20',
};

/* ── Section header ───────────────────────────────── */
const SectionHeader = ({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) => (
  <div className="mb-10 md:mb-12">
    <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-2">{eyebrow}</p>
    <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#0F1C2E] leading-tight">{title}</h1>
    {subtitle && (
      <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xl">{subtitle}</p>
    )}
  </div>
);

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

      /* ──────────────────────── ABOUT ──────────────────────── */
      case 'about':
        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

              {/* Photo */}
              <div className="w-full md:w-[38%] shrink-0">
                <img
                  src="https://drive.google.com/thumbnail?sz=w1000&id=1wTNsvvxrtfHwhgp8SGzabjzNSGg6Xezr"
                  alt="Hyunjun You"
                  className="w-full aspect-[4/5] object-cover object-bottom shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-[62%] flex flex-col gap-7">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-3">
                    About
                  </p>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#0F1C2E] mb-1">
                    Hyunjun You
                  </h1>
                  <p className="text-slate-500 text-sm mb-5">
                    Rotman Commerce '27 · Strategy & Data Science · Minor in Economics
                  </p>
                  <p className="text-slate-600 text-sm leading-7 whitespace-pre-line">
                    {BIO_TEXT}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-4">
                    Skills
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {SKILLS.map(group => (
                      <div key={group.category}>
                        <p className="text-xs font-semibold text-[#0F1C2E] mb-2">
                          {group.category}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map(skill => (
                            <span key={skill}
                              className="text-xs px-2.5 py-1 bg-[#0F1C2E]/5
                                         border border-[#0F1C2E]/10 text-slate-600">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               bg-[#0F1C2E] text-white text-sm font-medium
                               hover:bg-[#1a2d42] transition-colors">
                    Resume <ExternalLink size={13} />
                  </a>
                  <a href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#'}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm font-medium
                               hover:border-[#0F1C2E] transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href={SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#'}
                    className="inline-flex items-center gap-2 px-5 py-2.5
                               border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm font-medium
                               hover:border-[#0F1C2E] transition-colors">
                    <Mail size={14} /> Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );

      /* ──────────────────── EXPERIENCE ─────────────────────── */
      case 'experience': {
        const professional = EXPERIENCE.filter(e => e.type === 'professional');
        const leadership   = EXPERIENCE.filter(e => e.type === 'leadership');
        const military     = EXPERIENCE.filter(e => e.type === 'military');

        const ExpItem = ({ exp, delay = 0 }: { exp: typeof EXPERIENCE[0]; delay?: number }) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="pl-4 border-l-2 border-[#D4A853]/50"
          >
            {/* Company + period row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between
                            gap-0.5 sm:gap-4 mb-1">
              <h3 className="text-base font-semibold text-[#0F1C2E]">{exp.company}</h3>
              <span className="text-xs font-mono text-slate-400 shrink-0">
                {exp.period} · {exp.location}
              </span>
            </div>

            {/* Role */}
            <p className="text-sm text-slate-500 italic mb-3">{exp.role}</p>

            {/* Stats */}
            {exp.stats && exp.stats.length > 0 && (
              <StatRow stats={exp.stats} />
            )}

            {/* Bullets */}
            <ul className="mt-3 space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-slate-600 leading-6">
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        );

        const ExpSection = ({
          label, items, baseDelay = 0,
        }: { label: string; items: typeof EXPERIENCE; baseDelay?: number }) => (
          <div className="mb-12">
            <h2 className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-6">
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
            <SectionHeader eyebrow="Experience" title="Professional Background" />
            <ExpSection label="Professional"     items={professional} baseDelay={0.1} />
            <ExpSection label="Leadership"       items={leadership}   baseDelay={0.15} />
            <ExpSection label="Military Service" items={military}     baseDelay={0.2} />
          </motion.div>
        );
      }

      /* ──────────────────── COMPETITIONS ───────────────────── */
      case 'competitions': {
        const compProjects = PROJECTS.filter(p => p.section === 'competitions');

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}
            className="w-full max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Work & Competitions"
              title="Projects & Case Competitions"
              subtitle="Strategy projects, case competitions, and consulting work."
            />

            <div className="flex flex-col gap-4">
              {compProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col sm:flex-row gap-5 p-5 bg-white
                             border border-slate-100 hover:border-[#0F1C2E]/25
                             hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail — hidden on very small screens */}
                  <div className="hidden sm:block w-28 h-24 overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={project.imageUrl} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105
                                 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-[#0F1C2E] leading-snug">
                        {project.title}
                      </h3>
                      {project.award && (
                        <span className={`text-xs px-2.5 py-1 shrink-0 font-medium
                          ${AWARD_STYLE[project.award] ?? 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
                          {project.award}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mb-2">
                      {project.category} · {project.year}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map(tag => (
                        <span key={tag}
                          className="text-xs px-2 py-0.5 bg-[#0F1C2E]/5
                                     text-[#0F1C2E]/55 border border-[#0F1C2E]/8">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      }

      /* ──────────────────── PHOTOGRAPHY ────────────────────── */
      case 'photography':
        if (selectedAlbum) {
          return (
            <motion.div {...fadeUp} transition={{ duration: 0.35 }}>
              <button
                onClick={() => { setSelectedAlbum(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center gap-2 text-slate-400 hover:text-[#0F1C2E]
                           transition-colors mb-10"
              >
                <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase">Back</span>
              </button>

              <div className="mb-10">
                <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-2">
                  Photography
                </p>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0F1C2E] mb-1">
                  {selectedAlbum.title}
                </h1>
                <p className="text-slate-400 text-sm">{selectedAlbum.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 pb-16">
                {selectedAlbum.gallery?.map((url, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="relative aspect-[3/4] overflow-hidden bg-gray-100">
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
            className="w-full max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Photography"
              title="Moments"
              subtitle="Shot on iPhone. Toronto · Saigon · Seoul."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-16">
              {PROJECTS.filter(p => p.section === 'photography').map((project, idx) => (
                <motion.div key={project.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => { setSelectedAlbum(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="group cursor-pointer relative aspect-[3/4] overflow-hidden">
                  <img src={project.imageUrl} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700
                               group-hover:scale-110 grayscale group-hover:grayscale-0"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-[#0F1C2E]/50 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 flex items-end p-5 md:p-6">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/60 text-xs mt-0.5">{project.year}</p>
                    </div>
                  </div>
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

      {/* Padding: enough for nav height on both mobile (h-20) and desktop */}
      <main className="min-h-screen pt-24 pb-16 px-5 md:px-14 lg:px-20">
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
