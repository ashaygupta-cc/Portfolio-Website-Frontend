import React, { useState, useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  BookOpen,
  Code,
  Rocket,
} from "lucide-react";

import BinaryBeats from "/Binary Beats logo.jpg";
import StAloysius from "/St Aloysius.jpg";
import CP from "/CP.jpg";
import IIITV from "/IIITV.jpg";
import JEE from "/JEE.jpg";

const JourneySection: React.FC = () => {
  const [carouselDuration, setCarouselDuration] = useState(28);
  const [isMobile, setIsMobile] = useState(false); // New state for mobile detection
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({}); 
  const carouselControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCarouselDuration(mobile ? 10 : 15);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    carouselControls.start("running");
  }, [carouselDuration, carouselControls]);

  const handleCardClick = (id: number) => {
    if (isMobile) {
      setFlippedCards((prev) => {
        const newState = { ...prev, [id]: !prev[id] };
        const anyCardFlipped = Object.values(newState).some(Boolean);

        if (anyCardFlipped) {
          carouselControls.start("paused");
        } else {
          carouselControls.start("running");
        }
        return newState;
      });
    }
  };

  const journeySteps = [
    {
      id: 1,
      year: "2023",
      title: "Education",
      subtitle: "St. Aloysius Secondary School, Unnao",
      description:
        "Completed secondary and high school education at St. Aloysius with consistent top performance in both academics and sports. Maintained a well-rounded profile through active participation in competitions and school activities.",
      image: StAloysius,
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: ["12× Academic Rank 1", "25+ Competitions Winner"],
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
      achievements: [
        "98.13 percentile in JEE Main",
        "Qualified JEE Advanced",
        "Scored 72/120 in JEE Advanced Chemistry",
        "99.9969 percentile in COMEDK Chemistry",
        "Rank 1111 in MHT-CET",
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
      achievements: [],
    },
    {
      id: 4,
      year: "2024",
      title: "Competitive Programming",
      subtitle: "CodeChef, Codeforces & LeetCode",
      description:
        "Actively participating in competitive programming contests on platforms like CodeChef, LeetCode and Codeforces, honing problem-solving skills and algorithmic thinking. Achieved 3-star rating on CodeChef in less than 5 months in first year & winning several coding contests also.",
      image: CP,
      icon: <Code className="w-6 h-6" />,
      achievements: [
        "CodeChef 3-Star Rating",
        "Trio Code Jam Winner",
        "Init Mains, Init Advance Winner",
        "CodeStrike Winner",
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
      achievements: [
        "Built team from ground up to 2+ members",
        "Delivered 2+ successful projects",
        "Achieved 90%+ client satisfaction rate",
      ],
    },
  ];

  const carouselVariants: Variants = {
    running: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: carouselDuration,
          ease: "easeInOut",
        },
      },
    },
    paused: {
      x: "current",
      transition: {
        duration: 0.001,
        ease: "linear"
      }
    }
  };

  const imageVariants: Variants = {
    float: {
      y: [-5, 5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12"
    >
      <style>
        {`
        .scrollable-carousel::-webkit-scrollbar {
          display: none;
        }
        .scrollable-carousel {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-light-crystal-blue rounded-full opacity-10 animate-float dark:hidden" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-light-crystal-purple rounded-full opacity-15 animate-float dark:hidden"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 rounded-full opacity-20 animate-pulse dark:hidden" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-inferno-orange rounded-full opacity-10 animate-float hidden dark:block" />
        <div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-crimson-blaze rounded-full opacity-15 animate-float hidden dark:block"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-smoke-gray/50 to-ashen-charcoal/50 rounded-full opacity-20 animate-pulse hidden dark:block" />
      </div>

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-7xl mx-auto px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-gray-300 mb-4 leading-tight text-3xl sm:text-4xl"
            style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}
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

        <div className="w-full overflow-x-auto py-10 scrollable-carousel">
          <motion.div
            className="flex flex-nowrap gap-6"
            variants={carouselVariants}
            animate={carouselControls}
          >
            {[...journeySteps, ...journeySteps].map((step, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 md:w-96 h-[450px]"
                onHoverStart={!isMobile ? () => carouselControls.start("paused") : undefined}
                onHoverEnd={!isMobile ? () => carouselControls.start("running") : undefined}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={!isMobile ? { y: -8, transition: { duration: 0.3 } } : undefined}
                  className="group relative h-full w-full [perspective:1000px] hover:cursor-pointer"
                  onClick={isMobile ? () => handleCardClick(step.id) : undefined}
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${!isMobile ? 'group-hover:[transform:rotateY(180deg)]' : ''}`}
                    style={isMobile ? { transform: flippedCards[step.id] ? "rotateY(180deg)" : "rotateY(0deg)" } : {}}
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-light-surface/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl hover:border-light-crystal-blue dark:hover:border-inferno-orange shadow-[0_0_15px_rgba(135,206,235,0.2),_0_0_15px_rgba(221,160,221,0.2)]  dark:shadow-gray-700 hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)]  dark:hover:shadow-gray-600 transition-all duration-500 h-full p-6 md:p-8">

                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center text-light-crystal-purple dark:text-gray-300 mr-4">
                            {step.icon}
                          </div>
                          <div className="px-4 py-2 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 rounded-full">
                            <span className="text-light-crystal-purple dark:text-gray-300 font-medium text-sm">
                              {step.year}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className="w-16 h-16 rounded-full overflow-hidden"
                          variants={imageVariants}
                          animate="float"
                        >
                          <img
                            src={step.image}
                            alt={`${step.title} logo`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-medium text-light-text dark:text-gray-300 mb-2 group-hover:text-light-crystal-purple dark:group-hover:text-inferno-orange transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg font-medium text-light-crystal-purple dark:text-crimson-blaze mb-4">
                        {step.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-light-muted dark:text-dark-text-muted leading-relaxed mb-4 md:mb-6 font-light">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-light-surface/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl hover:border-sky-300 dark:hover:border-inferno-orange shadow-[0_0_15px_rgba(135,206,235,0.2),_0_0_15px_rgba(221,160,221,0.2)]  dark:shadow-fire-glow-sm  hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)]  dark:hover:shadow-fire-glow transition-all duration-500 h-full p-6 md:p-8 flex items-center">
                      <div className="space-y-4 w-full">
                        <h4 className="text-xl md:text-2xl font-medium text-light-text dark:text-gray-300 mb-2 text-center">
                          Key Achievements
                        </h4>
                        <div className="space-y-2 max-w-xs mx-auto">
                          {step.achievements && step.achievements.length > 0 ? (
                            step.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-2 h-2 bg-gray-700 dark:bg-gray-500 rounded-full mr-3" />
                                <span className="text-xs md:text-sm text-light-muted dark:text-dark-text-muted font-light">
                                  {achievement}
                                </span>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs md:text-sm text-light-muted dark:text-dark-text-muted font-light text-center">
                              No specific achievements listed for this step.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
