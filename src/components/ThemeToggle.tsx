import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 
        ${isDark 
          ? 'bg-gradient-inferno text-white shadow-fire-glow animate-fire-flicker'
          : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
        }`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
      
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 
        ${isDark 
          ? 'bg-gradient-ember blur-md' 
          : 'bg-light-crystal-blue/50 blur-md' 
        }`} 
      />
    </motion.button>
  );
};

export default ThemeToggle;
