import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Brain,
  LayoutGrid,
  Sparkles,
  Hammer,
  Zap,
  Users,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Cpu,
  GitBranch,
  Settings,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const TechExpertiseSection: React.FC = () => {
  const { isDark } = useTheme();
  const highlightColor = isDark ? "#FF4500" : "#6366f1";
  const [activeView, setActiveView] = useState<"cards" | "skills">("cards");
  const [activeCategory, setActiveCategory] = useState<
    "frontend" | "backend" | "tools" | "softSkills"
  >("frontend");

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Competitive Programming & DSA",
      description:
        "Solved 600+ DSA and competitive programming problems with strong command of algorithms and data structures using C++.",
      technologies: [
        "C++",
        "STL",
        "DP",
        "Trees",
        "Sorting",
        "Greedy",
        "Recursion",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning & AI",
      description:
        "Developing ML-powered real-life applications by combining intelligent models with robust backend systems.",
      technologies: [
        "Python",
        "Scikit-Learn",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Building full-featured, scalable web applications using modern stacks.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js"],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Prompt-Driven UI/UX",
      description:
        "Designing clean, intuitive interfaces using prompt engineering and modern design tools.",
      technologies: ["Figma", "Bootstrap", "Cursor AI", "Prompt Crafting"],
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Scalable Product Development",
      description:
        "Focused on building real-world products that are performant, productive, and solve real problems.",
      technologies: ["Next.js", "Vercel", "REST APIs", "JWT Auth"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship & Leadership",
      description:
        "Running a tech community on WhatsApp and mentoring students in JEE Chemistry and coding with a passion for knowledge sharing.",
      technologies: ["Agile", "Git", "Mentorship", "Community Building"],
    },
  ];

  const detailedSkills = {
    frontend: [
      {
        name: "React.js",
        icon: "⚛️",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "JavaScript",
        icon: "JS",
        percentage: 95,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "HTML5",
        icon: "📄",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "CSS3",
        icon: "🎨",
        percentage: 80,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Tailwind CSS",
        icon: "💨",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Responsive Design",
        icon: "📱",
        percentage: 100,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Next.js",
        icon: "⚡",
        percentage: 94,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Framer Motion",
        icon: "✨",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "🟢",
        percentage: 88,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "Express.js",
        icon: "🚀",
        percentage: 92,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "Python",
        icon: "🐍",
        percentage: 85,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "REST APIs",
        icon: "🔗",
        percentage: 95,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "GraphQL",
        icon: "🌐",
        percentage: 86,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        percentage: 95,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "Supabase",
        icon: "�",
        percentage: 88,
        barGradient: "from-purple-400 to-pink-400",
      },
      {
        name: "Firebase",
        icon: "🔥",
        percentage: 85,
        barGradient: "from-purple-400 to-pink-400",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        icon: "🐙",
        percentage: 95,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "VS Code",
        icon: "💻",
        percentage: 95,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Chrome DevTools",
        icon: "🔧",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Figma",
        icon: "📐",
        percentage: 85,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Postman",
        icon: "📮",
        percentage: 95,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Vercel",
        icon: "▲",
        percentage: 90,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Netlify",
        icon: "🌐",
        percentage: 100,
        barGradient: "from-blue-300 to-purple-400",
      },
      {
        name: "Cloud",
        icon: "☁️",
        percentage: 85,
        barGradient: "from-blue-300 to-purple-400",
      },
    ],
    softSkills: [
      {
        name: "Problem Solving",
        icon: "💡",
        percentage: 96,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Team Collaboration",
        icon: "🤝",
        percentage: 100,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Communication",
        icon: "🗣️",
        percentage: 90,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Project Management",
        icon: "📋",
        percentage: 96,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Creativity",
        icon: "🎨",
        percentage: 88,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Adaptability",
        icon: "🔄",
        percentage: 90,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Leadership",
        icon: "👑",
        percentage: 100,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Time Management",
        icon: "⏰",
        percentage: 93,
        barGradient: "from-yellow-200 to-orange-400",
      },
      {
        name: "Critical Thinking",
        icon: "🧠",
        percentage: 90,
        barGradient: "from-yellow-200 to-orange-400",
      },
    ],
  };

  return (
    <section
      id="expertise"
      className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-light-crystal-blue rounded-full opacity-10 animate-float dark:hidden" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-light-crystal-purple rounded-full opacity-15 animate-float dark:hidden"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 rounded-full opacity-20 animate-pulse dark:hidden" />

        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gray-500 rounded-full opacity-10 animate-float hidden dark:block" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-crimson-blaze rounded-full opacity-15 animate-float hidden dark:block"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-smoke-gray/50 to-ashen-charcoal/50 rounded-full opacity-20 animate-pulse hidden dark:block" />
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
            className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-gray-300 mb-4 leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            MY TECH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              EXPERTISE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            A comprehensive overview of my technical skills, tools, and areas of
            expertise.
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeView === "cards" && (
            <motion.div
              key="cards-view"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.3333%-21.3333px)]
        bg-light-surface dark:bg-dark-card
        backdrop-blur-sm 
        border border-gray-200/50 dark:border-smoke-gray/50
        rounded-3xl 
        p-4 sm:p-6 text-center
        shadow-light-shadow-lg dark:shadow-lg
        hover:shadow-light-shadow-xl dark:hover:shadow-gray-600
        hover:border-light-crystal-blue dark:hover:border-gray-600
        hover:brightness-105 hover:backdrop-blur-md
        hover:animate-pulse-glow
        transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 bg-light-crystal-blue/30 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-4 text-light-crystal-purple dark:text-gray-300">
                      {skill.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-light-crystal-purple dark:text-gray-300 mb-2 group-hover:text-light-crystal-blue dark:group-hover:text-inferno-orange transition-colors duration-300">
                      {skill.title}
                    </h3>

                    <p className="text-light-muted dark:text-dark-text-muted text-sm leading-relaxed mb-4 font-light">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.technologies.slice(0, 8).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-light-crystal-blue/20 text-light-crystal-blue dark:bg-ashen-charcoal dark:text-dark-text-muted rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {skill.technologies.length > 8 && (
                        <span className="px-3 py-1 bg-light-crystal-blue/30 text-light-crystal-blue dark:bg-ashen-charcoal dark:text-dark-text-muted rounded-full text-xs font-medium">
                          +{skill.technologies.length - 8}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <motion.button
                  onClick={() => setActiveView("skills")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#3a9fff] to-[#9a5fff] text-white font-medium rounded-full transition-all duration-300 hover:bg-blue-400 dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
                >
                  VIEW DETAILED SKILLS
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {activeView === "skills" && (
            <motion.div
              key="skills-view"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {["frontend", "backend", "tools", "softSkills"].map(
                  (category) => (
                    <motion.button
                      key={category}
                      onClick={() =>
                        setActiveCategory(
                          category as
                            | "frontend"
                            | "backend"
                            | "tools"
                            | "softSkills"
                        )
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-light-crystal-purple to-light-crystal-blue text-white dark:bg-gradient-inferno shadow-light-shadow-md dark:shadow-fire-glow"
                          : "bg-light-surface dark:bg-ashen-charcoal text-light-muted dark:text-dark-text-muted  hover:bg-gray-100 dark:hover:bg-smoke-gray"
                      }`}
                    >
                      {category === "softSkills"
                        ? "Soft Skills"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  )
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                  {detailedSkills[activeCategory].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex flex-col p-3 bg-light-surface dark:bg-ashen-charcoal border border-gray-200/50 dark:border-smoke-gray/50 rounded-2xl hover:border-light-crystal-blue dark:hover:border-gray-500 hover:shadow-light-shadow-md dark:hover:shadow-gray-700 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2 md:justify-start md:space-x-2 md:mb-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-light-text dark:text-gray-300 text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-medium text-light-text dark:text-gray-300 text-sm sm:text-base md:hidden">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-smoke-gray md:hidden">
                        <div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${skill.barGradient}`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <motion.button
                  onClick={() => setActiveView("cards")}
                  whileHover={{ scale: 1.02, color: highlightColor }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-smoke-gray text-light-muted dark:text-dark-text-muted font-medium rounded-full transition-all duration-100 hover:bg-gray-50 
                  dark:hover:bg-ashen-charcoal hover:border-light-crystal-blue dark:hover:border-inferno-orange"
                >
                  BACK TO OVERVIEW
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechExpertiseSection;
