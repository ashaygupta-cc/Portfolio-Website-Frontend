/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Watery Light Theme Colors
        'light-bg': '#f0faff',           // Overall background (soft ice)
        'light-surface': '#ffffff',      // Card base or surface
        'light-text': '#1c2a3a',         // Primary text (deep navy)
        'light-muted': '#6c7a89',        // Secondary text
        'light-accent-gold': '#5eead4',  // Changed to water-accent-cyan
        'light-accent-warm': '#f0abfc',  // Changed to water-accent-pink
        'light-crystal-blue': '#74c0fc', // Changed to water-accent-blue
        'light-crystal-purple': '#a5b4fc', // Changed to water-accent-indigo
        'crystal-purple': '#8a2be2', // Existing crystal-purple color
        // New crystal-blue color
        'crystal-blue': '#00bfff', // You can choose your desired shade of blue here (Deep Sky Blue)

        // Fire Blazing Dark Theme Colors
        'inferno-orange': '#FF4500',
        'ember-red': '#B22222',
        'molten-gold': '#FFD700',
        'ashen-charcoal': '#1C1C1C',
        'smoke-gray': '#3B3B3B',
        'crimson-blaze': '#DC143C',
        'lava-black': '#0D0D0D',
        'dark-bg': '#0f0f0f',
        'dark-surface': '#1a1a1a',
        'dark-card': '#2a2a2a',
        'dark-text': '#E0E0E0', // Light text for dark background
        'dark-text-muted': '#A0A0A0', // Slightly darker light text for muted elements
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'crystal-rotate': 'crystal-rotate 20s linear infinite',
        'timeline-pulse': 'timeline-pulse 2s ease-in-out infinite',
        'fire-flicker': 'fire-flicker 2s ease-in-out infinite alternate',
        'ember-rise': 'ember-rise 4s ease-out infinite',
        'flame-dance': 'flame-dance 3s ease-in-out infinite',
        'molten-flow': 'molten-flow 4s ease-in-out infinite',
        'spark-burst': 'spark-burst 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'crystal-rotate': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'timeline-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'fire-flicker': {
          '0%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(1)' },
          '25%': { transform: 'scale(1.05) rotate(1deg)', filter: 'brightness(1.1)' },
          '50%': { transform: 'scale(0.95) rotate(-1deg)', filter: 'brightness(0.9)' },
          '75%': { transform: 'scale(1.02) rotate(0.5deg)', filter: 'brightness(1.05)' },
          '100%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(1)' },
        },
        'ember-rise': {
          '0%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-20px) scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'translateY(-40px) scale(0.5)', opacity: '0' },
        },
        'flame-dance': {
          '0%, 100%': { transform: 'translateY(0px) scaleY(1)', filter: 'hue-rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) scaleY(1.1)', filter: 'hue-rotate(10deg)' },
          '50%': { transform: 'translateY(-8px) scaleY(0.9)', filter: 'hue-rotate(-10deg)' },
          '75%': { transform: 'translateY(-3px) scaleY(1.05)', filter: 'hue-rotate(5deg)' },
        },
        'molten-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spark-burst': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(0.8) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        // Water Breathing Light Theme Gradients
        'gradient-light-main': 'linear-gradient(135deg, #f0faff 0%, #e0f2fe 50%, #f0faff 100%)',
        'gradient-light-crystal': 'linear-gradient(135deg, #dbeafe 0%, #bae6fd 50%, #e0f2fe 100%)',
        'gradient-light-journey': 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f0abfc 100%)',
        
        // Fire Blazing Dark Theme Gradients
        'gradient-dark-main': 'linear-gradient(135deg, #0D0D0D 0%, #1C1C1C 25%, #3B3B3B 50%, #1C1C1C 75%, #0D0D0D 100%)',
        'gradient-inferno': 'linear-gradient(135deg, #FF4500 0%, #DC143C 50%, #B22222 100%)',
        'gradient-ember': 'linear-gradient(135deg, #B22222 0%, #DC143C 50%, #FF4500 100%)',
        'gradient-molten': 'linear-gradient(135deg, #FFD700 0%, #FF4500 50%, #DC143C 100%)',
        'gradient-smoke': 'linear-gradient(135deg, #3B3B3B 0%, #1C1C1C 50%, #0D0D0D 100%)',
        'gradient-flame': 'linear-gradient(45deg, #FF4500, #DC143C, #FFD700, #B22222)',
        'gradient-lava': 'linear-gradient(135deg, #0D0D0D 0%, #B22222 25%, #FF4500 50%, #FFD700 75%, #DC143C 100%)',
        'gradient-dark-card': 'linear-gradient(135deg, #1C1C1C 0%, #3B3B3B 50%, #1C1C1C 100%)',
      },
      boxShadow: {
        // Water Breathing Light Theme Shadows
        'light-shadow-md': '0 4px 6px rgba(116, 192, 252, 0.15)',
        'light-shadow-lg': '0 10px 15px rgba(116, 192, 252, 0.2)',
        'light-shadow-xl': '0 20px 25px rgba(116, 192, 252, 0.25)',
        'light-shadow-purple': '0 0 20px rgba(165, 180, 252, 0.4)',

        // Fire Blazing Dark Theme Shadows
        'fire-glow': '0 0 30px rgba(255, 69, 0, 0.4), 0 0 60px rgba(220, 20, 60, 0.2)',
        'ember-glow': '0 0 20px rgba(178, 34, 34, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)',
        'inferno-glow': '0 0 25px rgba(255, 69, 0, 0.6), 0 0 50px rgba(220, 20, 60, 0.4)',
        'molten-glow': '0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 69, 0, 0.3)',
        'crimson-glow': '0 0 20px rgba(220, 20, 60, 0.5)',
        'fire': '0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(247, 147, 30, 0.2)',
        'ember': '0 0 15px rgba(255, 204, 2, 0.4)',
        'dark-glow': '0 0 30px rgba(255, 107, 53, 0.1)',
      },
    },
  },
  plugins: [],
};