import React from "react";
import { motion } from "framer-motion";
import BinaryBeatsLogo from "./BinaryBeatsLogo";
import AshayImgDark from "/Ashay DarkTheme.jpg";
import AshayImgLight from "/Ashay LightTheme.jpg";
import { useTheme } from "../contexts/ThemeContext"; 

const AboutSection: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <section
      id="about"
     className="relative min-h-screen py-20 pt-20 pb-0.4 bg-gradient-light-main dark:bg-gradient-dark-main will-change-transform"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-light-crystal-blue rounded-full opacity-10 animate-float blur-xl dark:hidden" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-light-crystal-purple rounded-full opacity-15 animate-float blur-lg dark:hidden" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-light-crystal-blue rounded-full opacity-12 animate-float blur-md dark:hidden" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 left-10 w-32 h-32 bg-inferno-orange rounded-full opacity-10 animate-flame-dance blur-xl hidden dark:block" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-crimson-blaze rounded-full opacity-15 animate-ember-rise blur-lg hidden dark:block" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gray-500 rounded-full opacity-12 animate-flame-dance blur-md hidden dark:block" style={{ animationDelay: '2s' }} />
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
            className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-gray-300 mb-4 leading-tight animate-fire-flicker"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
          ABOUT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno animate-molten-flow bg-[length:200%_200%]">
            {' '}ME
          </span>
        
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            A brief introduction about me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-light-crystal dark:bg-gradient-ember shadow-light-shadow-lg dark:shadow-fire-glow">
                <img
                 src={isDark ? AshayImgDark : AshayImgLight}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}              
                className="absolute -bottom-4 -right-4 p-4 bg-light-surface dark:bg-ashen-charcoal rounded-2xl shadow-light-shadow-md dark:shadow-ember-glow border border-gray-200/50 dark:border-smoke-gray"
              >
                <BinaryBeatsLogo size="medium" showText={false} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-light-muted dark:text-dark-text-muted leading-relaxed font-light">
              I'm <span className="font-medium text-light-text dark:text-gray-300">Ashay Gupta</span>
              , a full-stack developer currently in my second year of college.
              My journey began with competitive programming : I'm a 3☆
              CodeChef coder with 600+ problems solved using C++, along with
              experience in Python and C.
            </p>

            <p className="text-lg text-light-muted dark:text-dark-text-muted leading-relaxed font-light">
              I later explored full-stack development and founded{" "}
              <span className="font-medium text-light-text dark:text-inferno-orange">Binary Beats</span>,
              a collaborative team that builds real-world projects by combining
              domain expertise and technical skill.
            </p>

            <p className="text-lg text-light-muted dark:text-dark-text-muted leading-relaxed font-light">
              I also enjoy building UI/UX through AI prompts using tools like
              Cursor AI, Figma and other AI models, and I'm currently diving
              deep into Machine Learning with projects like digit recognition
              and image classification, backed by strong fundamentals in
              algorithms and neural networks.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "TypeScript",
                "C++"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-[#3a9fff] to-[#9a5fff]  text-white dark:bg-gradient-ember dark:text-gray-300 rounded-full text-sm font-medium  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
