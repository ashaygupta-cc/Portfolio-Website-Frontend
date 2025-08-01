import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ExternalLink, Github, Linkedin, MessageCircle, Music, Trophy } from 'lucide-react';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SocialLinksSection: React.FC = () => {
  const { isDark } = useTheme(); 
  const socialPlatforms = [
        {
      name: 'GitHub',
      username: 'ashaygupta-cc',
      url: 'https://github.com/ashaygupta-cc',
      icon: <Github className="w-6 h-6" />,
      color: 'from-light-crystal-blue to-light-crystal-purple', // Light theme color
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Open source projects and contributions'
    },
      {
      name: 'LinkedIn',
      username: 'Ashay Gupta',
      url: 'https://www.linkedin.com/in/ashay-gupta-30068831b/',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'from-light-accent-gold to-light-accent-warm', // Light theme color
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Professional network and updates'
    },
      {
      name: 'CodeChef',
      username: 'ashaygupta_cc',
      url: 'https://www.codechef.com/users/ashaygupta_cc',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-light-crystal-purple to-light-crystal-blue', // Light theme color
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Competitive programming profile and achievements'
    },
      {
      name: 'LeetCode',
      username: 'ashaygupta_cc',
      url: 'https://leetcode.com/u/ashaygupta_cc/',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-light-crystal-blue to-light-crystal-purple',
      bgColor: 'bg-gradient-to-br from-teal-50 to-green-50 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Sharpening DSA problem-solving skills'
    },
      {
      name: 'Instagram',
      username: 'ashay.shiva',
      url: 'https://www.instagram.com/ashay.shiva?igsh=MWIxd3Zmd2U5anA0YQ==',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-light-accent-warm to-light-accent-gold', 
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Personal life and creative content'
    }/*,
      {
      name: 'X (Twitter)',
      username: 'ashaygupta',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-ashen-charcoal dark:to-smoke-gray',
      description: 'Latest updates and tech thoughts'
    }*/
  ];

  return (
    <section id="social"  className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12">
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode: subtle, peaceful elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-light-crystal-blue rounded-full opacity-10 animate-float dark:hidden" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-light-crystal-purple rounded-full opacity-15 animate-float dark:hidden" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 rounded-full opacity-20 animate-pulse dark:hidden" />

        {/* Dark mode: fire particles (only visible in dark mode) */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-inferno-orange rounded-full opacity-10 animate-float hidden dark:block" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-crimson-blaze rounded-full opacity-15 animate-float hidden dark:block" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-smoke-gray/50 to-ashen-charcoal/50 rounded-full opacity:20 animate-pulse hidden dark:block" />
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
            CONNECT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              WITH ME
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            Find me across various platforms. Let's connect, share ideas,
            and build a thriving community together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -12,
                  rotate: Math.random() * 4 - 2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group relative p-6 rounded-3xl border-2 border-gray-200/50 dark:border-smoke-gray/50 shadow-light-shadow-lg dark:shadow-lg hover:shadow-light-shadow-xl dark:hover:shadow-2xl hover:border-light-crystal-blue dark:hover:border-inferno-orange transition-all duration-500 flex items-center space-x-4 ${platform.bgColor}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${platform.color} text-white dark:bg-gradient-inferno flex-shrink-0`}
                >
                  {platform.icon}
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-light-text dark:text-molten-gold mb-1 group-hover:text-light-crystal-purple dark:group-hover:text-inferno-orange transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-light-muted dark:text-dark-text-muted text-sm mb-2">@{platform.username}</p>
                  <p className="text-light-muted dark:text-dark-text-muted text-xs leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-ashen-charcoal backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-gray-700 dark:text-dark-text-muted" />
                </div>

                <div className="absolute top-4 left-4 w-1 h-1 bg-light-crystal-blue dark:bg-inferno-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 right-6 w-1 h-1 bg-light-crystal-purple dark:bg-crimson-blaze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '100ms' }} />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 border border-light-crystal-blue/50 dark:border-smoke-gray rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-light-crystal-purple dark:text-molten-gold" />
            </div>

            <h3 className="text-2xl font-light text-light-text dark:text-molten-gold mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-light-muted dark:text-dark-text-muted mb-6 font-light leading-relaxed">
              Whether you want to collaborate on a project, share ideas, or just say hello -
              I'm always excited to connect with fellow creators and innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 40px rgba(139, 69, 19, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-light-crystal-purple text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
              >
                <span>START A CONVERSATION</span>
              </motion.button>

              <motion.button
                key={`follow-platforms-${isDark}`}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#6366f1',
                  color: '#6366f1'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-smoke-gray text-light-muted dark:text-dark-text-muted font-medium rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-ashen-charcoal"
              >
                <span>FOLLOW ALL PLATFORMS</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
