import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

interface BinaryBeatsLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const BinaryBeatsLogo: React.FC<BinaryBeatsLogoProps> = ({ 
  size = 'medium', 
  showText = true, 
  className = '' 
}) => {
  const { isDark } = useTheme(); // Get theme state

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center space-x-3 ${className}`}
    >
      {/* Code Box */}
      <div 
        className={`${sizeClasses[size]} rounded-xl flex items-center justify-center 
          ${isDark 
            ? 'bg-gradient-inferno shadow-fire-glow animate-fire-flicker' // Dark theme: red/orange, fire glow
            : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-light-shadow-md' // Light theme: blue/purple, subtle shadow
          }`}
      >
        <Code2 
          className={`${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-6 h-6' : 'w-8 h-8'} 
            ${isDark ? 'text-white' : 'text-white'}` // Icon color: white in both for contrast
          } 
        />
      </div>
      
      {showText && (
        <span 
          className={`${textSizeClasses[size]} font-semibold tracking-wide 
            ${isDark 
              ? 'text-molten-gold animate-fire-flicker' // Dark theme: yellow text, flicker
              : 'text-light-text' // Light theme: dark text (black)
            }`}
        >
          BINARY BEATS
        </span>
      )}
    </motion.div>
  );
};

export default BinaryBeatsLogo;
