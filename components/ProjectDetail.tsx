import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 md:p-8"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
      >
        <X size={24} className="text-black" />
      </button>

      <div className="w-full h-full max-w-6xl mx-auto overflow-y-auto no-scrollbar flex flex-col md:flex-row gap-8 md:gap-16 pt-12 md:pt-0">
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-auto object-cover max-h-[80vh] shadow-xl"
            />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 pb-12">
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
           >
             <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">
               {project.category} — {project.year}
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
               {project.title}
             </h2>
             
             <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-lg">
               {project.details || project.description}
             </p>

             <div className="border-t border-gray-200 pt-6">
               <h4 className="text-sm font-semibold uppercase tracking-wide mb-3">Technologies</h4>
               <div className="flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </div>
    </motion.div>
  );
};