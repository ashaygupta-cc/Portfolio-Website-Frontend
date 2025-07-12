import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import GitViz from '/GitViz.png'
import { useTheme } from "../contexts/ThemeContext"; 
import PortfolioLight from '/Portfolio Light.png'
import PortfolioDark from '/Portfolio Dark.png'


const ProjectsSection: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { isDark } = useTheme();
  const projects = [
    {
      title: 'GitViz : A GitHub Visual Explorer',
      description: 'GitHub visualization tool built with React, D3, and React Flow, leveraging the GitHub API. Features include interactive repository exploration, developer profile analytics, and dynamic code structure flowcharts.',
      image: GitViz,
      technologies: ['React', 'Node.js', 'ReactFlow', 'Tailwind CSS', 'D3'],
      demoUrl: 'https://git-viz-frontend.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with 3D animations, smooth transitions, and responsive design. Built with React and Three.js for an immersive user experience.',
      image: isDark ? PortfolioDark : PortfolioLight,
      technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Gsap'],
      demoUrl: 'https://portfolio-website-ashay.vercel.app/',
      githubUrl: '#'
    }
   /*, {
      title: 'Real-time Chat App',
      description: 'Scalable real-time messaging application with WebSocket integration, file sharing, and group chat functionality.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Express', 'Redis'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce solution with user authentication, product catalog, shopping cart, and secure payment gateway integration.',
      image: 'https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redux'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management API',
      description: 'Robust RESTful API for task management, including user authentication, task creation, assignment, and status tracking. Built with Node.js and Express.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Machine Learning Model Deployment',
      description: 'Deployed a predictive machine learning model as a web service using Flask, enabling real-time predictions via a simple API endpoint.',
      image: 'https://images.pexels.com/photos/3184354/pexels-photo-3184354.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Scikit-Learn', 'Docker'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Decentralized Voting System',
      description: 'Blockchain-based secure and transparent voting system, ensuring immutability and verifiable results using smart contracts on Ethereum.',
      image: 'https://images.pexels.com/photos/3184244/pexels-photo-3184244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Solidity', 'Truffle', 'Web3.js', 'React'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Expense Tracker',
      description: 'Cross-platform mobile application for tracking personal expenses, categorizing transactions, and visualizing spending habits. Built with React Native.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      demoUrl: '#',
      githubUrl: '#'
    } */
  ];

  const initialProjectCount = 6;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectCount);

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode: subtle, peaceful elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-light-crystal-blue rounded-full opacity-10 animate-float blur-xl dark:hidden" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-light-crystal-purple rounded-full opacity-15 animate-float blur-lg dark:hidden" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-light-crystal-blue rounded-full opacity-12 animate-float blur-md dark:hidden" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-light-crystal-purple rounded-full opacity-20 animate-float blur-lg dark:hidden" style={{ animationDelay: '0.5s' }} />

        {/* Dark mode: fire particles (only visible in dark mode) */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-inferno-orange rounded-full opacity-10 animate-flame-dance blur-xl hidden dark:block" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-crimson-blaze rounded-full opacity-15 animate-ember-rise blur-lg hidden dark:block" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-molten-gold rounded-full opacity-12 animate-flame-dance blur-md hidden dark:block" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-ember-red rounded-full opacity-20 animate-ember-rise blur-lg hidden dark:block" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-molten-gold mb-4 leading-tight"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            FEATURED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              PROJECTS
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            Showcasing a selection of my recent work, highlighting my skills in full-stack 
            development, machine learning, and innovative problem-solving.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > initialProjectCount && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 40px rgba(139, 69, 19, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-smoke-gray text-light-muted dark:text-dark-text-muted font-medium rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-ashen-charcoal hover:border-light-crystal-blue dark:hover:border-inferno-orange mx-auto"
            >
              {showAllProjects ? (
                <>
                  <ChevronUp className="w-5 h-5 text-light-muted dark:text-dark-text-muted" />
                  <span>VIEW LESS PROJECTS</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 text-light-muted dark:text-dark-text-muted" />
                  <span>VIEW ALL PROJECTS ({projects.length - initialProjectCount} MORE)</span>
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-light-muted dark:text-dark-text-muted mb-6 font-light">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>

          <motion.a
            href="https://github.com/ashaygupta-cc" 
            target="_blank"
            rel="noopener noreferrer" 
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 40px rgba(139, 69, 19, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-4 bg-light-crystal-purple text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
          >
            <Github className="w-5 h-5 mr-3" />
            VISIT MY GITHUB
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
