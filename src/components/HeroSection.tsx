import React from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Scene3D from "./Scene3D";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection: React.FC = () => {
  const { isDark } = useTheme();

  const highlightColor = isDark ? "#FF4500" : "#6366f1";
  const shadows = isDark
    ? "0 10px 40px rgba(255, 69, 0, 0.4)"
    : "0 10px 40px rgba(139, 69, 19, 0.2)";

  return (
    <section
      id="home"
      className="relative min-h-[calc(var(--vh,1vh)*100)] flex items-center justify-center overflow-hidden bg-gradient-light-main dark:bg-gradient-dark-main will-change-transform"
    >
      <Scene3D />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-light-crystal-blue rounded-full opacity-30 animate-float blur-xl dark:hidden" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-light-crystal-purple rounded-full opacity-25 animate-float blur-lg dark:hidden"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-light-crystal-blue rounded-full opacity-20 animate-float blur-md dark:hidden"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-light-crystal-purple rounded-full opacity-25 animate-float blur-lg dark:hidden"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="absolute top-20 left-10 w-32 h-32 bg-inferno-orange rounded-full opacity-20 animate-flame-dance blur-xl hidden dark:block" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-crimson-blaze rounded-full opacity-30 animate-ember-rise blur-lg hidden dark:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gray-500 rounded-full opacity-25 animate-flame-dance blur-md hidden dark:block"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-ember-red rounded-full opacity:20 animate-ember-rise blur-lg hidden dark:block"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2"
            >
              <p className="text-lg text-light-text dark:text-gray-300 font-medium ">
                Hello, I'm
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight animate-flame-dance"
                style={{
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:bg-gradient-inferno animate-molten-flow bg-[length:200%_200%]">
                  ASHAY GUPTA
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-light-muted dark:text-dark-text-muted max-w-2xl leading-relaxed font-light"
            >
              Full-Stack Developer, Machine Learning, Data-Science Enthusiast &
              Tech Entrepreneur passionate about creating innovative digital
              solutions that transform ideas into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* DOWNLOAD RESUME Button */}
              <motion.a
                href="/AshayGupta_Resume.pdf"
                download="AshayGupta_Resume.pdf"
                whileHover={{
                  scale: 1.02,
                  boxShadow: shadows,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#3a9fff] to-[#9a5fff] text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue  dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD RESUME</span>
              </motion.a>

              <motion.a
                key={`get-in-touch-${isDark}`}
                href="mailto:ashay051204@gmail.com"
                whileHover={{
                  scale: 1.02,
                  borderColor: highlightColor,
                  color: highlightColor,
                  boxShadow: isDark ? "0 0 20px rgba(255, 69, 0, 0.3)" : "",
                }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center justify-center space-x-2 px-8 py-4 border-2
                  ${isDark ? "border-smoke-gray" : "border-gray-300"}
                  ${isDark ? "text-gray-300" : "text-gray-600"}
                  font-medium rounded-full transition-all duration-0
                  hover:bg-gray-50 dark:hover:bg-ashen-charcoal
                `}
              >
                <Mail className="w-5 h-5" />
                <span>GET IN TOUCH</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-light text-purple-700 dark:text-inferno-orange mb-1 animate-fire-flicker">
                  1+
                </div>
                <div className="text-sm text-light-muted dark:text-dark-text-muted font-light">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-blue-700 dark:text-crimson-blaze mb-1 animate-fire-flicker">
                  2+
                </div>
                <div className="text-sm text-light-muted dark:text-dark-text-muted font-light">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-purple-700  dark:text-gray-300 mb-1 animate-fire-flicker">
                  90%+
                </div>
                <div className="text-sm text-light-muted dark:text-dark-text-muted font-light">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-light-text dark:text-gray-300"
        >
          <span className="text-sm tracking-wider font-light animate-fire-flicker">
            SCROLL
          </span>
          <svg
            className="w-5 h-5 text-light-text dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
