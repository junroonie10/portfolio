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
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0 },
};

const AWARD_STYLE: Record<string, string> = {
  '2nd Place':    'bg-[#FBF5E6] text-[#9A6E00] border border-[#D4A853]/40',
  'Semi-finalist': 'bg-[#F0F4F8] text-[#1E3048] border border-[#1E3048]/20',
};

/* ─── Reusable section header ─────────────────────── */
const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <div className="mb-12">
    <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-3">{eyebrow}</p>
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0F1C2E] leading-tight">{title}</h1>
    {subtitle && <p className="text-slate-500 text-sm mt-2 font-light max-w-xl">{subtitle}</p>}
  </div>
);

/* ─── Impact stat card row ────────────────────────── */
const StatRow = ({ stats }: { stats: { value: string; label: string }[] }) => (
  <div className="flex flex-wrap gap-4 mt-4 mb-1">
    {stats.map(s => (
      <div key={s.label} className="flex flex-col">
        <span className="font-serif text-xl font-bold text-[#0F1C2E]">{s.value}</span>
        <span className="text-xs text-slate-400 font-light mt-0.5">{s.label}</span>
      </div>
    ))}
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage]       = useState<PageView>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAlbum, setSelectedAlbum]   = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
    setSelectedAlbum(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen">
        <LandingPage setPage={handlePageChange} />
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage) {

      /* ══════════════════════════════════════════════
         ABOUT
      ══════════════════════════════════════════════ */
      case 'about':
        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Photo */}
              <div className="w-full md:w-2/5 shrink-0">
                <img
                  src="https://drive.google.com/thumbnail?sz=w1000&id=1wTNsvvxrtfHwhgp8SGzabjzNSGg6Xezr"
                  alt="Hyunjun You"
                  className="w-full aspect-[4/5] object-cover object-bottom shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/5 flex flex-col gap-8">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-3">About</p>
                  <h1 className="font-serif text-3xl font-bold text-[#0F1C2E] mb-1">Hyunjun You</h1>
                  <p className="text-slate-500 text-sm mb-5">
                    Rotman Commerce '27 · Strategy & Data Science · Minor in Economics
                  </p>

                  {/* Badges */}
                  <div className="flex gap-2 flex-wrap mb-6">
                    {[
                      { v: '3.80 / 4.00', l: 'GPA' },
                      { v: 'Toronto, ON', l: '' },
                      { v: 'EN · KO · ES', l: 'Languages' },
                    ].map(b => (
                      <span
                        key={b.v}
                        className="text-xs px-3 py-1.5 bg-[#0F1C2E]/5 border border-[#0F1C2E]/10 rounded-sm text-[#0F1C2E] font-medium"
                      >
                        {b.v}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed font-light whitespace-pre-line">
                    {BIO_TEXT}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-4">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {SKILLS.map(group => (
                      <div key={group.category}>
                        <p className="text-xs font-semibold text-[#0F1C2E] mb-2">{group.category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map(skill => (
                            <span
                              key={skill}
                              className="text-xs px-2.5 py-1 bg-[#0F1C2E]/5 border border-[#0F1C2E]/10 rounded-sm text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1C2E] text-white text-sm font-medium hover:bg-[#1a2d42] transition-colors"
                  >
                    Resume <ExternalLink size={13} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm font-medium hover:border-[#0F1C2E] transition-colors"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a
                    href={SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#'}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0F1C2E]/20 text-[#0F1C2E] text-sm font-medium hover:border-[#0F1C2E] transition-colors"
                  >
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

        const renderSection = (label: string, items: typeof EXPERIENCE, delay = 0) => (
          <div className="mb-14">
            <h2 className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-8">{label}</h2>
            <div className="flex flex-col gap-12">
              {items.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay + i * 0.08 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-10"
                >
                  {/* Date / Location */}
                  <div className="md:w-52 shrink-0 pt-0.5">
                    <p className="text-xs font-mono text-slate-400 mb-1">{exp.period}</p>
                    <p className="text-xs text-slate-400">{exp.location}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 border-t-2 border-[#0F1C2E]/8 pt-3">
                    <h3 className="font-serif text-lg font-bold text-[#0F1C2E]">{exp.company}</h3>
                    <p className="text-sm text-slate-500 mb-3 font-light italic">{exp.role}</p>

                    {/* Impact stat row */}
                    {exp.stats && exp.stats.length > 0 && (
                      <div className="mb-4">
                        <StatRow stats={exp.stats} />
                      </div>
                    )}

                    <ul className="flex flex-col gap-2.5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 font-light leading-relaxed pl-3 border-l-2 border-[#D4A853]/40"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-4xl mx-auto">
            <SectionHeader eyebrow="Experience" title="Professional Background" />
            {renderSection('Professional', professional, 0.1)}
            {renderSection('Leadership', leadership, 0.2)}
            {renderSection('Military Service', military, 0.3)}
          </motion.div>
        );
      }

      /* ══════════════════════════════════════════════
         WORK & COMPETITIONS
      ══════════════════════════════════════════════ */
      case 'competitions': {
        const compProjects = PROJECTS.filter(p => p.section === 'competitions');

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-5xl mx-auto">
            <SectionHeader
              eyebrow="Work & Competitions"
              title="Projects & Case Competitions"
              subtitle="A selection of strategy projects, case competitions, and consulting work."
            />

            <div className="flex flex-col gap-5">
              {compProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-white border border-[#0F1C2E]/8 hover:border-[#0F1C2E]/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div className="md:w-36 md:h-28 w-full h-36 overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="font-serif text-base font-bold text-[#0F1C2E] group-hover:text-[#1a2d42] transition-colors">
                          {project.title}
                        </h3>
                        {project.award && (
                          <span className={`text-xs px-2.5 py-1 shrink-0 font-medium ${AWARD_STYLE[project.award] || 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
                            {project.award}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{project.category} · {project.year}</p>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-[#0F1C2E]/5 text-[#0F1C2E]/60 border border-[#0F1C2E]/8"
                        >
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

      /* ══════════════════════════════════════════════
         PHOTOGRAPHY
      ══════════════════════════════════════════════ */
      case 'photography':
        if (selectedAlbum) {
          return (
            <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="pt-4">
              <button
                onClick={() => { setSelectedAlbum(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center gap-2 text-slate-400 hover:text-[#0F1C2E] transition-colors mb-12"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-medium tracking-[0.15em] uppercase">Back</span>
              </button>

              <div className="mb-14">
                <p className="text-xs font-medium tracking-[0.2em] text-[#D4A853] uppercase mb-2">Photography</p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0F1C2E] tracking-tight mb-2">
                  {selectedAlbum.title}
                </h1>
                <p className="text-slate-400 text-sm font-light">{selectedAlbum.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-24">
                {selectedAlbum.gallery?.map((photoUrl, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="relative aspect-[3/4] overflow-hidden bg-gray-100"
                  >
                    <img
                      src={photoUrl}
                      alt={`${selectedAlbum.title} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        }

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-5xl mx-auto">
            <SectionHeader
              eyebrow="Photography"
              title="Moments"
              subtitle="Shot on iPhone. Toronto · Saigon · Seoul."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
              {PROJECTS.filter(p => p.section === 'photography').map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer relative aspect-[3/4] overflow-hidden"
                  onClick={() => { setSelectedAlbum(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0F1C2E]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/60 text-xs mt-1 font-light">{project.year}</p>
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
    <div className="min-h-screen bg-[#F8F7F4] text-[#0F1C2E] selection:bg-[#0F1C2E] selection:text-white">
      <Navigation
        currentPage={currentPage}
        setPage={handlePageChange}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <main className="min-h-screen pt-28 pb-16 px-6 md:px-16 lg:px-24">
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
