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
  PROFILE_IMAGE_URL,
} from './constants';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const AWARD_COLORS: Record<string, string> = {
  '2nd Place': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Semi-finalist': 'bg-slate-50 text-slate-600 border border-slate-200',
};

const TYPE_LABEL: Record<string, string> = {
  professional: 'Professional',
  leadership: 'Leadership',
  military: 'Military Service',
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
    setSelectedAlbum(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-white text-black">
        <LandingPage setPage={handlePageChange} />
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage) {

      // ─── ABOUT ──────────────────────────────────────────────────
      case 'about':
        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Image */}
              <div className="w-full md:w-2/5 shrink-0">
                <img
                  src="https://drive.google.com/thumbnail?sz=w1000&id=1wTNsvvxrtfHwhgp8SGzabjzNSGg6Xezr"
                  alt="Hyunjun You"
                  className="w-full aspect-[4/5] object-cover object-bottom rounded-sm shadow-sm"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-3/5 flex flex-col gap-8">
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-3">About</p>
                  <h1 className="text-3xl font-bold text-slate-900 mb-1">Hyunjun You</h1>
                  <p className="text-slate-500 text-sm mb-6">Rotman Commerce '27 · Strategy & Data Science · Minor in Economics</p>
                  <div className="flex gap-3 flex-wrap mb-6">
                    <span className="text-xs px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-600">GPA 3.80 / 4.00</span>
                    <span className="text-xs px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-600">Toronto, ON</span>
                    <span className="text-xs px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-600">English · Korean · Spanish</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light whitespace-pre-line">
                    {BIO_TEXT}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-4">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILLS.map(skillGroup => (
                      <div key={skillGroup.category}>
                        <p className="text-xs font-medium text-slate-500 mb-2">{skillGroup.category}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {skillGroup.items.map(skill => (
                            <span
                              key={skill}
                              className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
                  >
                    Resume <ExternalLink size={13} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-900 transition-colors"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a
                    href={SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#'}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-900 transition-colors"
                  >
                    <Mail size={14} /> Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );

      // ─── EXPERIENCE ─────────────────────────────────────────────
      case 'experience':
        const professional = EXPERIENCE.filter(e => e.type === 'professional');
        const leadership = EXPERIENCE.filter(e => e.type === 'leadership');
        const military = EXPERIENCE.filter(e => e.type === 'military');

        const renderExpSection = (title: string, items: typeof EXPERIENCE) => (
          <div className="mb-14">
            <h2 className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-8">{title}</h2>
            <div className="flex flex-col gap-10">
              {items.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-10"
                >
                  {/* Left: Meta */}
                  <div className="md:w-56 shrink-0">
                    <p className="text-xs text-slate-400 font-mono mb-1">{exp.period}</p>
                    <p className="text-xs text-slate-400">{exp.location}</p>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 border-t border-slate-100 pt-1">
                    <h3 className="text-base font-semibold text-slate-900">{exp.company}</h3>
                    <p className="text-sm text-slate-500 mb-3 font-light">{exp.role}</p>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm text-slate-600 font-light leading-relaxed pl-3 border-l border-slate-200">
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
            <div className="mb-12">
              <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-3">Experience</p>
              <h1 className="text-3xl font-bold text-slate-900">Professional Background</h1>
            </div>
            {renderExpSection('Professional', professional)}
            {renderExpSection('Leadership', leadership)}
            {renderExpSection('Military Service', military)}
          </motion.div>
        );

      // ─── COMPETITIONS / WORK ─────────────────────────────────────
      case 'competitions':
        const compProjects = PROJECTS.filter(p => p.section === 'competitions');

        return (
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="w-full max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-3">Work & Competitions</p>
              <h1 className="text-3xl font-bold text-slate-900">Projects & Case Competitions</h1>
              <p className="text-slate-500 text-sm mt-2 font-light max-w-xl">
                A selection of strategy projects, case competitions, and consulting work I've been a part of.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {compProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="md:w-36 md:h-28 w-full h-40 rounded-md overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                          {project.title}
                        </h3>
                        {project.award && (
                          <span className={`text-xs px-2.5 py-1 rounded-full shrink-0 font-medium ${AWARD_COLORS[project.award] || 'bg-slate-50 text-slate-500 border border-slate-200'}`}>
                            {project.award}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{project.category} · {project.year}</p>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100">
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

      // ─── PHOTOGRAPHY ─────────────────────────────────────────────
      case 'photography':
        if (selectedAlbum) {
          return (
            <motion.div {...fadeUp} transition={{ duration: 0.4 }} className="pt-4">
              <button
                onClick={() => { setSelectedAlbum(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center gap-2 text-slate-400 hover:text-black transition-colors mb-12"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium tracking-wide uppercase">Back</span>
              </button>

              <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-2">
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
            <div className="mb-12">
              <p className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase mb-3">Photography</p>
              <h1 className="text-3xl font-bold text-slate-900">Moments</h1>
              <p className="text-slate-500 text-sm mt-2 font-light">Shot on iPhone. A collection from Toronto, Saigon, and Seoul.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
              {PROJECTS.filter(p => p.section === 'photography').map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-sm"
                  onClick={() => { setSelectedAlbum(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{project.title}</h3>
                      <p className="text-white/70 text-xs mt-1">{project.year}</p>
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
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
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
