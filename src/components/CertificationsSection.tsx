import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Shield,
  BarChart3,
  Brain,
  Cloud,
  Zap,
  Cpu,
  Database,
  Code,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import introToMl from "/Intro to Machine Learning .jpg";
import pandas from "/Pandas.jpg";

const CertificationsSection: React.FC = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const certifications = [
    {
      name: "Intro to Machine Learning",
      provider: "Kaggle",
      image: introToMl,
      icon: <Cloud className="w-6 h-6" />,
      credentialUrl:
        "https://www.kaggle.com/learn/certification/ashaygupta1126/intro-to-machine-learning",
      issued: "June 2025",
      description:
        "Covers foundational machine learning techniques including decision trees, random forests, and model validation using Scikit-Learn.",
    },
    {
      name: "Pandas",
      provider: "Kaggle",
      image: pandas,
      icon: <Code className="w-6 h-6" />,
      credentialUrl:
        "https://www.kaggle.com/learn/certification/ashaygupta1126/pandas",
      issued: "June 2025",
      description:
        "Covers core data manipulation techniques using Pandas, including filtering, grouping, and transforming data in DataFrames.",
    }
  ];

  const initialCertCount = 6;
  const displayedCertifications = showAllCertifications
    ? certifications
    : certifications.slice(0, initialCertCount);

  return (
    <section
      id="certifications"
      className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-light-crystal-blue rounded-full opacity-10 animate-float blur-xl dark:hidden" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-light-crystal-purple rounded-full opacity-15 animate-float blur-lg dark:hidden"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-light-crystal-blue rounded-full opacity-12 animate-float blur-md dark:hidden"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-light-crystal-purple rounded-full opacity-20 animate-float blur-lg dark:hidden"
          style={{ animationDelay: "0.5s" }}
        />

        <div className="absolute top-20 left-10 w-32 h-32 bg-inferno-orange rounded-full opacity-10 animate-flame-dance blur-xl hidden dark:block" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-crimson-blaze rounded-full opacity-15 animate-ember-rise blur-lg hidden dark:block"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gray-500 rounded-full opacity-12 animate-flame-dance blur-md hidden dark:block"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-ember-red rounded-full opacity-20 animate-ember-rise blur-lg hidden dark:block"
          style={{ animationDelay: "0.5s" }}
        />
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
            PROFESSIONAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              CERTIFICATIONS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            Continuously expanding my expertise through industry-recognized
            certifications and professional development programs.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -12,
                  rotate: Math.random() * 4 - 2,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1.333333rem)] group relative"
              >
                <div className="relative p-6 bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl overflow-hidden hover:border-light-crystal-blue dark:hover:border-inferno-orange hover:shadow-light-shadow-lg dark:hover:shadow-fire-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-crystal-blue/20 to-light-crystal-purple/20 dark:from-inferno-orange/20 dark:to-crimson-blaze/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="absolute top-3 right-3 w-10 h-10 bg-light-surface dark:bg-ashen-charcoal rounded-full flex items-center justify-center text-light-crystal-purple dark:text-gray-300">
                      {cert.icon}
                    </div>

                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-light-surface dark:bg-ashen-charcoal backdrop-blur-sm rounded-full text-xs font-medium text-light-muted dark:text-dark-text-muted">
                      {cert.issued}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-light-text dark:text-gray-300 mb-1 group-hover:text-light-crystal-blue dark:group-hover:text-inferno-orange transition-colors duration-300 leading-tight">
                          {cert.name}
                        </h3>
                        <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium text-sm">
                          {cert.provider}
                        </p>
                      </div>

                      <motion.a
                        href={cert.credentialUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 bg-gray-100 dark:bg-smoke-gray rounded-full flex items-center justify-center hover:bg-light-crystal-blue/20 dark:hover:bg-gray-600 transition-colors duration-300 ml-3"
                        title="View Credential"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-light-crystal-blue dark:hover:text-gray-300" />
                      </motion.a>
                    </div>

                    <p className="text-light-muted dark:text-dark-text-muted text-sm leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>

                  <div className="absolute top-2 left-2 w-1 h-1 bg-light-crystal-blue dark:bg-inferno-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className="absolute top-4 right-8 w-1 h-1 bg-light-crystal-purple dark:bg-crimson-blaze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: "100ms" }}
                  />
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-light-crystal-blue dark:bg-molten-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: "200ms" }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl p-4 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-light-crystal-purple dark:text-gray-300" />
            </div>

            <h3 className="text-2xl font-light text-light-text dark:text-gray-300 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-light-muted dark:text-dark-text-muted mb-6 font-light leading-relaxed">
              My certifications reflect a commitment to continuous learning and professional growth in the latest technologies.
            </p>

            {certifications.length > initialCertCount && (
              <motion.button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 40px rgba(139, 69, 19, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-smoke-gray text-light-muted dark:text-dark-text-muted font-medium rounded-full transition-all duration-300 hover:bg-gray-50 dark:hover:bg-ashen-charcoal hover:border-light-crystal-blue dark:hover:border-inferno-orange mx-auto"
              >
                {showAllCertifications ? (
                  <>
                    <ChevronUp className="w-5 h-5 text-light-muted dark:text-dark-text-muted" />
                    <span>VIEW LESS CREDENTIALS</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 text-light-muted dark:text-dark-text-muted" />
                    <span>
                      VIEW ALL CREDENTIALS (
                      {certifications.length - initialCertCount} MORE)
                    </span>
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

export default CertificationsSection;
