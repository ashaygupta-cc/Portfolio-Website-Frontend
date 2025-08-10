import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
  const { isDark } = useTheme(); 
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
      <div 
        className={`${sizeClasses[size]} rounded-xl flex items-center justify-center 
          ${isDark 
            ? 'bg-gradient-inferno shadow-fire-glow animate-fire-flicker' 
            : 'bg-gradient-to-r from-[#3a9fff] to-[#9a5fff] shadow-light-shadow-md' 
          }`}
      >
        <Code2 
          className={`${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-6 h-6' : 'w-8 h-8'} 
            ${isDark ? 'text-white' : 'text-white'}` 
          } 
        />
      </div>
      
      {showText && (
        <span 
          className={`${textSizeClasses[size]} font-semibold tracking-wide 
            ${isDark 
              ? 'text-gray-300 animate-fire-flicker' 
              : 'text-light-text'
            }`}
        >
          BINARY BEATS
        </span>
      )}
    </motion.div>
  );
};

export default BinaryBeatsLogo;
