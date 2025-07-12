import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Zap,
  GraduationCap,
  Target,
  Code,
  Rocket,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BinaryBeats from "/Binary Beats logo.jpg";
import StAloysius from "/St Aloysius.jpg";
import CP from "/CP.jpg"
import IIITV from "/IIITV.jpg";
import JEE from "/JEE.jpg";


const JourneySection: React.FC = () => {
  const [showFullJourney, setShowFullJourney] = useState(false);

  const journeySteps = [
    {
      id: 1,
      year: "2023",
      title: "Education",
      subtitle: "St. Aloysius Secondary School",
      description:
        "Completed secondary and high school education at St. Aloysius with consistent top performance in both academics and sports. Maintained a well-rounded profile through active participation in competitions and school activities.",
      image: StAloysius,
      icon: <GraduationCap className="w-6 h-6" />,
      position: "left",
      achievements: [
        "12× Academic Rank 1",
        "6× Inter-College Sprint Winner (100m & 200m)",
        "3× 400m Sprint Winner",
        "2× Inter-House Kabaddi Champion (1× MVP)",
        "2× Kho-Kho Championship Winner",
        "1× Chess Championship Winner",
        "2× Team Quiz Competition (Talent Cocktail) Winner",
        "1× Interschool Debate Winner",
        "4× Full Attendance Award",
      ],
    },
    {
      id: 2,
      year: "2024",
      title: "JEE Journey",
      subtitle: "Competitive Exam Preparation",
      description:
        "Focused on JEE Main, JEE Advanced, COMEDK, and MHT-CET with dedicated coaching in Physics, Chemistry, and Mathematics. Balanced rigorous preparation with strong conceptual clarity, especially in Chemistry.",
      image: JEE,
      icon: <BookOpen className="w-6 h-6" />,
      position: "right",
      achievements: [
        "98.13 percentile in JEE Main",
        "Qualified JEE Advanced",
        "Scored 72/120 in JEE Advanced Chemistry",
        "99.9969 percentile in COMEDK Chemistry",
        "Rank 1111 in MHT-CET",
        "Physics coaching at Career Crave with Er. Shravan Katiyar",
        "Chemistry coaching at Nirmal Singh Chemistry Classes",
        "Mathematics coaching at Vishnoi Classes with Ashish Vishnoi",
      ],
    },
    {
      id: 3,
      year: "2024",
      title: "Education",
      subtitle: "Indian Institute of Information Technology, Vadodara",
      description:
        "Currently a Sophomore at IIIT Vadodara, pursuing B.Tech with a strong focus on Full-Stack Development (MERN Stack), Machine Learning, Competitive Programming, and Leadership Development. Actively exploring both technical depth and collaborative growth.",
      image: IIITV,
      icon: <GraduationCap className="w-6 h-6" />,
      position: "left",
      achievements: ["Ongoing"],
    },
     {
      id: 4,
      year: "2024",
      title: "Competitive Programming",
      subtitle: "CodeChef & Codeforces",
      description:
        "Actively participating in competitive programming contests on platforms like CodeChef and Codeforces, honing problem-solving skills and algorithmic thinking. Achieved 3-star rating on CodeChef in less than 5 months in first year & winning several coding contests also.",
      image: CP,
      icon: <Code className="w-6 h-6" />,
      position: "right",
      achievements: [
        "CodeChef 3-Star Rating",
        "Trio Code Jam Winner",
        "Init Mains, Init Advance Winner",
        "Solved 600+ DSA problems",
      ],
    },
    {
      id: 5,
      year: "2025",
      title: "Founding Binary Beats",
      subtitle: "Innovation & Collaboration",
      description:
        "Established Binary Beats, a collaborative team dedicated to building real-world projects. Focused on combining diverse domain expertise with strong technical skills to deliver innovative solutions. We also collectively participate in hackathons and coding contests.",
      image: BinaryBeats,
      icon: <Rocket className="w-6 h-6" />,
      position: "left",
      achievements: [
        "Built team from ground up to 2+ members",
        "Delivered 2+ successful projects",
        "Achieved 90%+ client satisfaction rate",
      ],
    }
  ];

  const initialStepCount = 6;
  const sortedSteps = journeySteps.sort(
    (a, b) => b.id - a.id 
  );
  const displayedSteps = showFullJourney
    ? sortedSteps
    : sortedSteps.slice(0,initialStepCount);

  return (
    <section
      id="journey"
      className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform
      md:py-20 sm:py-16 xs:py-12" 
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode: subtle, peaceful elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-light-crystal-blue rounded-full opacity-10 animate-float dark:hidden" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-light-crystal-purple rounded-full opacity-15 animate-float dark:hidden"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 rounded-full opacity-20 animate-pulse dark:hidden" />

        {/* Dark mode: fire particles (only visible in dark mode) */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-inferno-orange rounded-full opacity-10 animate-float hidden dark:block" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-crimson-blaze rounded-full opacity-15 animate-float hidden dark:block"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-smoke-gray/50 to-ashen-charcoal/50 rounded-full opacity-20 animate-pulse hidden dark:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-molten-gold mb-4 leading-tight text-3xl sm:text-4xl"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            MY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              JOURNEY MAP
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6 text-base sm:text-lg"
          >
            From curious beginner to tech entrepreneur - explore the milestones,
            challenges, and achievements that shaped my professional journey.
          </motion.p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Central timeline line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-light-crystal-blue via-light-crystal-purple to-light-crystal-blue dark:from-inferno-orange dark:via-crimson-blaze dark:to-molten-gold opacity-30" />

          {/* Central timeline line - Mobile */}
          <div className="lg:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-light-crystal-blue via-light-crystal-purple to-light-crystal-blue dark:from-inferno-orange dark:via-crimson-blaze dark:to-molten-gold opacity-30" />

          {/* Journey steps */}
          <div className="space-y-24 lg:space-y-24">
            <AnimatePresence>
              {displayedSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    x: step.position === "left" ? -100 : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    // Desktop layout (unchanged)
                    step.position === "left"
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } 
          
                  flex-col lg:flex-row`}
                >
                  {/* Desktop Content side */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      step.position === "left" ? "lg:pr-8" : "lg:pl-8"
                    } 
                    lg:block hidden`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl p-8 shadow-light-shadow-lg dark:shadow-lg hover:shadow-light-shadow-xl dark:hover:shadow-2xl hover:border-light-crystal-blue dark:hover:border-inferno-orange transition-all duration-500"
                    >
                      {/* Year badge */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center text-light-crystal-purple dark:text-molten-gold mr-4">
                          {step.icon}
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 rounded-full">
                          <span className="text-light-crystal-purple dark:text-molten-gold font-medium text-sm">
                            {step.year}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-medium text-light-text dark:text-molten-gold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium mb-4 text-lg">
                        {step.subtitle}
                      </p>
                      <p className="text-light-muted dark:text-dark-text-muted leading-relaxed mb-6 font-light">
                        {step.description}
                      </p>

                      {/* Achievements */}
                      { step.achievements && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-light-muted dark:text-dark-text-muted mb-3">
                          Key Achievements:
                        </p>
                        {step.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-light-crystal-blue dark:bg-inferno-orange rounded-full mr-3" />
                            <span className="text-light-muted dark:text-dark-text-muted text-sm font-light">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div> )}
                    </motion.div>
                  </div>

                  {/* Mobile Content - Full width with timeline integration */}
                  <div className="w-full lg:hidden pl-16 pr-4">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl p-6 shadow-light-shadow-lg dark:shadow-lg hover:shadow-light-shadow-xl dark:hover:shadow-2xl hover:border-light-crystal-blue dark:hover:border-inferno-orange transition-all duration-500"
                    >
                      {/* Mobile Year badge and icon */}
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-light-crystal-blue/20 dark:bg-ember-red rounded-xl flex items-center justify-center text-light-crystal-purple dark:text-molten-gold mr-3">
                          {step.icon}
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 rounded-full">
                          <span className="text-light-crystal-purple dark:text-molten-gold font-medium text-sm">
                            {step.year}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium text-light-text dark:text-molten-gold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium mb-3 text-base">
                        {step.subtitle}
                      </p>
                      <p className="text-light-muted dark:text-dark-text-muted leading-relaxed mb-4 font-light text-sm">
                        {step.description}
                      </p>

                      {/* Mobile Achievements */}
                      { step.achievements && (
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-light-muted dark:text-dark-text-muted mb-2">
                          Key Achievements:
                        </p>
                        {step.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-light-crystal-blue dark:bg-inferno-orange rounded-full mr-2" />
                            <span className="text-light-muted dark:text-dark-text-muted text-xs font-light">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div> )}
                    </motion.div>
                  </div>

                  {/* Desktop Central timeline node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-6 h-6 bg-white dark:bg-molten-gold border-4 border-light-crystal-blue dark:border-inferno-orange rounded-full shadow-lg" />
                      <div className="absolute inset-0 w-6 h-6 bg-light-crystal-blue dark:bg-inferno-orange rounded-full animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Mobile timeline node */}
                  <div className="lg:hidden absolute left-6 top-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-4 h-4 bg-white dark:bg-molten-gold border-3 border-light-crystal-blue dark:border-inferno-orange rounded-full shadow-lg" />
                      <div className="absolute inset-0 w-4 h-4 bg-light-crystal-blue dark:bg-inferno-orange rounded-full animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Desktop Image side */}
                  <div
                    className={`hidden lg:block w-5/12 ${
                      step.position === "left" ? "pl-8" : "pr-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: step.position === "left" ? 2 : -2,
                        transition: { duration: 0.3 },
                      }}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-3xl shadow-xl">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Floating year indicator */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-ashen-charcoal backdrop-blur-sm rounded-full">
                          <span className="text-gray-800 dark:text-smoke-gray font-medium text-sm">
                            {step.year}
                          </span>
                        </div>

                        {/* Location pin */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-light-crystal-purple dark:bg-inferno-orange rounded-full flex items-center justify-center text-white">
                          <MapPin className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-light-crystal-blue dark:bg-inferno-orange rounded-full opacity-60" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-light-crystal-purple dark:bg-crimson-blaze rounded-full opacity-60" />
                    </motion.div>
                  </div>

                  {/* Mobile Image - Integrated in card */}
                  <div className="lg:hidden w-full pl-16 pr-4 mt-4">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      className="relative group"
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-45 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Mobile Location pin */}
                        <div className="absolute bottom-3 right-3 w-8 h-8 bg-light-crystal-purple dark:bg-inferno-orange rounded-full flex items-center justify-center text-white">
                          <MapPin className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Future vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 border border-light-crystal-blue/50 dark:border-smoke-gray rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-light-crystal-purple dark:text-molten-gold" />
            </div>

            <h3 className="text-3xl font-light text-light-text dark:text-molten-gold mb-4">
              The Journey Continues...
            </h3>
            <p className="text-light-muted dark:text-dark-text-muted mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              This is just the beginning. I'm excited about the future of
              technology and the endless possibilities ahead. Join me as we
              continue to innovate, create, and transform ideas into reality.
            </p>

            {/* Toggle Button */}
            {journeySteps.length > initialStepCount && (
              <motion.button
                onClick={() => setShowFullJourney(!showFullJourney)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 40px rgba(139, 69, 19, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-light-crystal-purple dark:bg-gradient-inferno text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:hover:shadow-fire-glow mx-auto"
              >
                {showFullJourney ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    <span>VIEW BRIEF JOURNEY</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    <span>BE PART OF THE JOURNEY</span>
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
