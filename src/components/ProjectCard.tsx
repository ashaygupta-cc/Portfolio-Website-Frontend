import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-light-surface/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl hover:border-light-crystal-blue dark:hover:border-inferno-orange
                 shadow-[0_0_15px_rgba(135,206,235,0.2),_0_0_15px_rgba(221,160,221,0.2)] 
                 dark:shadow-fire-glow
                 hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)] 
                 dark:hover:shadow-inferno-glow
                 transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-white/90 dark:bg-ashen-charcoal backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-dark-text-muted hover:text-light-crystal-purple dark:hover:text-inferno-orange transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-white/90 dark:bg-ashen-charcoal backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-dark-text-muted hover:text-light-crystal-purple dark:hover:text-inferno-orange transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          whileHover={{ scale: 1.02 }}
          className="text-xl font-medium text-light-text dark:text-gray-300 mb-3 group-hover:text-light-crystal-purple dark:group-hover:text-inferno-orange transition-colors duration-300"
        >
          {title}
        </motion.h3>

        <p className="text-light-muted dark:text-dark-text-muted text-sm leading-relaxed mb-4 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-light-crystal-blue/20 text-light-crystal-blue dark:bg-ashen-charcoal dark:text-dark-text-muted rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 left-4 w-1 h-1 bg-light-crystal-blue dark:bg-inferno-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 w-1 h-1 bg-light-crystal-purple dark:bg-crimson-blaze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '100ms' }} />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-light-crystal-blue dark:bg-molten-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '200ms' }} />
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-light-crystal-purple dark:bg-ember-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '300ms' }} />
    </motion.div>
  );
};

export default ProjectCard;
