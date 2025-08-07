import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BinaryBeatsLogo from './BinaryBeatsLogo';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navOpacity, setNavOpacity] = useState(1); 

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'resume', label: 'RESUME' },
    { id: 'social', label: 'SOCIAL' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const sectionOpacityMap: { [key: string]: number } = {
    home: 1,    
    about: 0.8, 
    journey: 0.8,
    projects: 0.8,
    certifications: 0.8,
    resume: 0.9,
    team: 0.8,
    social: 0.8,
    contact: 0.9,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'home';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;

        if (
          window.scrollY >= sectionTop - windowHeight / 2 &&
          window.scrollY < sectionTop + sectionHeight - windowHeight / 2
        ) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);

      setNavOpacity(sectionOpacityMap[currentActive] || 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-light-surface/80 dark:bg-dark-card/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-smoke-gray/50'
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ opacity: navOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <BinaryBeatsLogo className="text-light-text dark:text-molten-gold flex-shrink-0" />

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group px-2 py-1 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-from-purple-500 via-blue-500 to-purple-500 dark:text-inferno-orange font-medium'
                    : 'text-light-muted dark:text-dark-text-muted leading-relaxed hover:text-blue-500/30 dark:hover:text-inferno-orange'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium tracking-wider">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-light-crystal-purple dark:bg-gray-300 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-light-muted dark:text-dark-text-muted hover:bg-gray-100 dark:hover:bg-ashen-charcoal focus:outline-none focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-light-surface/95 dark:bg-dark-card/95 backdrop-blur-lg z-30 flex flex-col justify-between pt-24 pb-8 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-light-crystal-purple text-white dark:bg-gradient-ember dark:text-lava-black font-medium shadow-light-shadow-md dark:shadow-molten-glow'
                        : 'text-light-muted dark:text-dark-text-muted hover:bg-smoke-gray/20 hover:text-crystal-purple dark:hover:text-inferno-orange'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium tracking-wider">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-smoke-gray">
                <p className="text-xs text-light-muted dark:text-smoke-gray text-center">
                  © 2024 Binary Beats
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
