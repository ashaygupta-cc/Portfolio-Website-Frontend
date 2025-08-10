import React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Award } from "lucide-react";

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Binary Beats",
      period: "2025 - Present",
      location: "Remote",
      description:
        "Founded and leading a tech team focused on innovative digital solutions. Managing a team of developers and designers while overseeing product development and client relationships.",
      achievements: [
        "Built team from ground up to 2+ members",
        "Delivered 2+ successful projects",
        "Achieved 90%+ client satisfaction rate",
      ],
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Indian Institute of Information Technology Vadodara",
      period: "2024-2028",
      location: "Gandhinagar, Gujarat, India",
      cpi: "8.17",
      achievements: [
        "Codechef 3-Star",
        "Trio Code Jam Winner",
        "Init Mains Winner",
        "Init Advance Winner",
      ],
    },
    {
      degree: "Secondary & High School Education",
      school: "St. Aloysius Secondary School",
      period: "2011-2023",
      location: "Unnao, Uttar Pradesh, India",
      description:
        "Completed secondary and high school education at St. Aloysius with consistent top performance in both academics and sports. Maintained a well-rounded profile through active participation in competitions and school activities.",
      achievements: [
        "12× Academic Rank 1",
        "25+ Competitions Won",
      ],
    },
  ];

  const certifications = [
    "Intro to Machine Learning (Kaggle)",
    "Pandas (Kaggle)",
  ];

  return (
    <section
      id="resume"
      className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12"
    >
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
            MY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              RESUME
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            A concise overview of my professional journey, academic
            achievements, and key certifications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-medium text-light-text dark:text-gray-300 mb-6">
              Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-2xl hover:border-sky-300 dark:hover:border-gray-700
                  hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)] dark:hover:shadow-gray-600 transition-all duration-300"
                >
                  <h4 className="text-xl font-medium text-light-text dark:text-gray-300 mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium text-sm mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center text-light-muted dark:text-dark-text-muted text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                    <MapPin className="w-4 h-4 ml-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-light-muted dark:text-dark-text-muted leading-relaxed mb-4 font-light">
                    {exp.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-light-muted dark:text-dark-text-muted mb-3">
                      Key Achievements:
                    </p>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-700 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-light-muted dark:text-dark-text-muted text-sm font-light">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
                <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-medium text-light-text dark:text-gray-300 mb-6">
                Education
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-2xl hover:border-sky-300 dark:hover:border-gray-700
                    hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)] dark:hover:shadow-gray-600 transition-all duration-300"
                  >
                    <h4 className="text-xl font-medium text-light-text dark:text-gray-300 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium text-sm mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center text-light-muted dark:text-dark-text-muted text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                      <MapPin className="w-4 h-4 ml-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cpi && (
                      <p className="text-light-muted dark:text-dark-text-muted leading-relaxed mb-4 font-light">
                        CPI: <span className="font-medium">{edu.cpi}</span>
                      </p>
                    )}
                    { edu.achievements && (
                    <div className="space-y-1 ">
                      <p className="text-sm font-medium text-light-muted dark:text-dark-text-muted mb-3">
                        Key Achievements:
                      </p>
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-700 dark:bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <p className="text-light-muted dark:text-dark-text-muted text-sm font-light">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-medium text-light-text dark:text-gray-300 mb-6">
                Certifications
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-xl 
                    hover:border-sky-300 dark:hover:border-gray-700
                    hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)] dark:hover:shadow-gray-600 transition-all duration-300"
                  >
                    <p className="text-light-muted dark:text-dark-text-muted font-medium text-sm">
                      {cert}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 border border-light-crystal-blue/50 dark:border-smoke-gray rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-light-crystal-purple dark:text-gray-300" />
            </div>

            <h3 className="text-3xl font-light text-light-text dark:text-gray-300 mb-4">
              Download My Full Resume
            </h3>
            <p className="text-light-muted dark:text-dark-text-muted mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              For a detailed overview of my skills, experience, and
              achievements, please download my complete resume.
            </p>

            <motion.a
              href="/AshayGupta_Resume.pdf"
              download="AshayGupta_Resume.pdf"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(139, 69, 19, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#3a9fff] to-[#9a5fff] text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue  dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD RESUME</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
