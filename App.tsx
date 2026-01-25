import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ProjectDetail } from './components/ProjectDetail';
// import { AIChat } from './components/AIChat';
import { LandingPage } from './components/LandingPage';
import { PageView, Project } from './types';
import { PROJECTS, SOCIAL_LINKS, PAGE_CONTENT, RESUME_URL } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<Project | null>(null); // For Photography Albums
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handlePageChange = (page: PageView) => {
    setCurrentPage(page);
    setSelectedAlbum(null); // Reset album view when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter projects based on page
  const getProjects = () => {
    if (currentPage === 'rotman') {
      return PROJECTS.filter(p => p.section === 'rotman');
    }
    if (currentPage === 'photography') {
      return PROJECTS.filter(p => p.section === 'photography');
    }
    return PROJECTS;
  };

  // Render Landing Page completely separately
  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-white text-black">
        <LandingPage setPage={handlePageChange} />
        {/* <AIChat /> */}
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
           <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <h1 className="text-4xl font-bold text-center mb-16 mt-8">About Me</h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-start">
               {/* Left: Image */}
               <div className="w-full md:w-1/2">
                  <img 
                    src="https://picsum.photos/seed/hiking/1200/800" 
                    alt="Hiking" 
                    className="w-full h-auto object-cover rounded-sm shadow-sm"
                  />
               </div>

               {/* Right: Text */}
               <div className="w-full md:w-1/2 flex flex-col justify-between">
                 <p className="text-lg leading-relaxed text-gray-700 font-light whitespace-pre-line mb-10">
                   Welcome to my portfolio! My name is Hyunjun You. I am a student at the University of Toronto pursuing a degree in Commerce (Rotman Commerce). I am passionate about the intersection of finance and technology.
                   <br /><br />
                   I also am a TA for introductory management courses and am involved in student organizations where I work to make financial literacy more accessible for younger students. 
                   <br /><br />
                   Outside of academics, I am an avid photographer, capturing moments from my travels and daily life. I believe in the power of visual storytelling to convey emotions that words sometimes cannot.
                 </p>
                 
                 <div className="flex flex-wrap gap-4">
                   <a 
                     href={RESUME_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-8 py-3 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
                   >
                     Resume
                   </a>
                   <a 
                     href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#'} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-8 py-3 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
                   >
                     LinkedIn
                   </a>
                   <a 
                     href={SOCIAL_LINKS.find(l => l.name === 'Email')?.url || '#'} 
                     className="px-8 py-3 rounded-full border border-slate-900 text-slate-900 font-medium text-sm hover:bg-slate-900 hover:text-white transition-all duration-300"
                   >
                     Email
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>
        );

      case 'rotman':
        // Rotman keeps the original layout: Text below image, Modal on click
        return (
          <motion.div
             key="rotman"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="pt-8"
          >
             {/* Header */}
             <div className="flex flex-col items-center text-center py-16 md:py-32 px-4">
               <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                 {PAGE_CONTENT.rotman.title}
               </h1>
               <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed mb-10">
                 {PAGE_CONTENT.rotman.description}
               </p>
               <div className="flex gap-8 mb-24">
                  <a href={SOCIAL_LINKS.find(l=>l.name==='LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"><Linkedin size={22} /></a>
                  <a href={SOCIAL_LINKS.find(l=>l.name==='Email')?.url} className="text-slate-900 hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"><Mail size={22} /></a>
               </div>
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                 <ChevronDown size={40} className="text-slate-300 font-light" strokeWidth={1} />
               </motion.div>
             </div>

             {/* Rotman Grid - Updated to 3 columns and smaller images */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pb-24 max-w-7xl mx-auto">
              {getProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors truncate pr-2">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 font-mono shrink-0">{project.year}</span>
                    </div>
                    {/* Display the category (e.g. RSM260) */}
                    <p className="text-sm text-gray-500 font-light truncate">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'photography':
        // If an album is selected, show the specific gallery page
        if (selectedAlbum) {
          return (
            <motion.div
              key="album-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-8"
            >
              <button 
                onClick={() => {
                  setSelectedAlbum(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 text-slate-500 hover:text-black transition-colors mb-12"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium tracking-wide uppercase">Back to Collections</span>
              </button>

              <div className="text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter">
                  {selectedAlbum.title}
                </h1>
                <p className="text-gray-500 font-light">{selectedAlbum.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24">
                {selectedAlbum.gallery?.map((photoUrl, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
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

        // Default Photography View: List of Albums (Toronto, Saigon, Seoul)
        return (
          <motion.div
             key="photography-hub"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="pt-8"
          >
             {/* Header */}
             <div className="flex flex-col items-center text-center py-16 md:py-32 px-4">
               <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                 {PAGE_CONTENT.photography.title}
               </h1>
               <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed mb-10">
                 {PAGE_CONTENT.photography.description}
               </p>
               <div className="flex gap-8 mb-24">
                  <a href={SOCIAL_LINKS.find(l=>l.name==='LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"><Linkedin size={22} /></a>
                  <a href={SOCIAL_LINKS.find(l=>l.name==='Email')?.url} className="text-slate-900 hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"><Mail size={22} /></a>
               </div>
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                 <ChevronDown size={40} className="text-slate-300 font-light" strokeWidth={1} />
               </motion.div>
             </div>

             {/* Photography Albums Grid (Text on Hover) */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
              {getProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer relative aspect-[3/4] overflow-hidden"
                  onClick={() => {
                    setSelectedAlbum(project);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {/* Image */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                  
                  {/* Overlay & Text (Visible only on hover) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
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
        toggleMobileMenu={toggleMobileMenu}
      />

      <main 
        className={`
          transition-all duration-300
          min-h-screen
          pt-32 px-6 md:px-16 lg:px-24
        `}
      >
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      {/* Project Detail Modal is ONLY for Rotman projects now, since Photography opens a new 'page' */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* <AIChat /> */}
    </div>
  );
};

export default App;