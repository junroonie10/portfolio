import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 pb-24">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
          onClick={() => onProjectClick(project)}
        >
          <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
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
              <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <span className="text-xs text-gray-400 font-mono">{project.year}</span>
            </div>
            <p className="text-sm text-gray-500 font-light">{project.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};