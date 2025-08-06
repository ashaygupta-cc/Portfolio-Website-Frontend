// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Plus, Send, Github,Linkedin } from 'lucide-react';
// import JobApplicationModal from './JobApplicationModal';
// import Ashay from '/Ashay Logo.jpg'
// import Tarun from '/Tarun.jpg'
// import Arpit from '/Arpit.jpg'
// import { useTheme } from '../contexts/ThemeContext';


// const TeamSection: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState<'position' | 'resume'>('position');

//   const { isDark } = useTheme();

//  const teamMembers = [
//   {
//     name: 'Ashay Gupta',
//     role: 'Backend Developer & Competitive Programmer',
//     image: Ashay,
//     bio: 'Passionate backend developer with a strong command over Node.js, Express, REST APIs, and database design. Also an avid competitive programmer, focused on optimizing algorithms and problem-solving. Building scalable and efficient server-side systems.',
//     social: {
//       linkedin: 'https://www.linkedin.com/in/ashay-gupta-30068831b/',
//       github: 'https://github.com/ashaygupta-cc'
//     }
//   },
//   {
//     name: 'Tarun Jain',
//     role: 'Frontend Developer & Competitive Programmer',
//     image: Tarun,
//     bio: 'Creative frontend developer skilled in building responsive user interfaces using React, Tailwind CSS, and modern web technologies. Actively involved in competitive programming, honing problem-solving skills and algorithmic thinking.',
//     social: {
//       linkedin: 'https://www.linkedin.com/in/tarundeepakjain/',
//       github: 'https://github.com/tarundeepakjain'
//     }
//   },
//   {
//     name: 'Arpit Maheshwari',
//     role: 'Competitive Programmer', 
//     image: Arpit,
//     bio: 'Dedicated competitive programmer with a knack for solving complex algorithmic challenges and optimizing code for efficiency. Focused on excelling in programming contests.',
//     social: {
//       linkedin: 'https://www.linkedin.com/in/arpit-maheshwari-bb59a2336',
//       github: '#'
//     }
//   }
// ];

//   const handleOpenModal = (type: 'position' | 'resume') => {
//     setModalType(type);
//     setIsModalOpen(true);
//   };

//   return (
//     <section id="team" className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Light mode: subtle, peaceful elements */}
//         <div className="absolute top-1/4 left-10 w-64 h-64 bg-light-crystal-blue rounded-full opacity-30 animate-float dark:hidden" />
//         <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-light-crystal-purple rounded-full opacity-25 animate-float dark:hidden" style={{ animationDelay: '2s' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-light-crystal-blue/10 to-light-crystal-purple/10 rounded-full opacity-20 animate-pulse dark:hidden" />

//         {/* Dark mode: fire particles (only visible in dark mode) */}
//         <div className="absolute top-1/4 left-10 w-64 h-64 bg-inferno-orange rounded-full opacity-10 animate-float hidden dark:block" />
//         <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-crimson-blaze rounded-full opacity-15 animate-float hidden dark:block" style={{ animationDelay: '2s' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-smoke-gray/50 to-ashen-charcoal/50 rounded-full opacity-20 animate-pulse hidden dark:block" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-light text-light-text dark:text-molten-gold mb-4 leading-tight"
//             style={{
//               fontFamily: 'Inter, sans-serif',
//               letterSpacing: '-0.02em'
//             }}
//           >
//             MEET THE<br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
//               BINARY BEATS TEAM
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
//           >
//             Meet the talented individuals who contribute to Binary Beats' success.
//             A diverse team of experts passionate about innovation and excellence.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl p-6 text-center shadow-light-shadow-lg dark:shadow-lg hover:shadow-light-shadow-xl dark:hover:shadow-2xl hover:border-light-crystal-blue dark:hover:border-inferno-orange transition-all duration-500"
//             >
//               <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-light-crystal-purple dark:border-inferno-orange shadow-md">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="text-xl font-medium text-light-text dark:text-molten-gold mb-1">{member.name}</h3>
//               <p className="text-light-crystal-purple dark:text-crimson-blaze font-medium text-sm mb-4">{member.role}</p>
//               <p className="text-light-muted dark:text-dark-text-muted text-sm leading-relaxed mb-4 font-light">
//                 {member.bio}
//               </p>
//               <div className="flex justify-center space-x-4">
//                 {member.social.linkedin && (
//                   <motion.a
//                     href={member.social.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.2 }}
//                     className="text-gray-600 dark:text-dark-text-muted hover:text-light-crystal-blue dark:hover:text-light-crystal-purple transition-colors"
//                   >
//                     <Linkedin className="w-5 h-5" />
//                   </motion.a>
//                 )}
//                 {member.social.github && (
//                   <motion.a
//                     href={member.social.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.2 }}
//                     className="text-gray-600 dark:text-dark-text-muted hover:text-gray-900 dark:hover:text-white transition-colors"
//                   >
//                     <Github className="w-5 h-5" />
//                   </motion.a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-br from-light-crystal-blue/10 to-light-crystal-purple/10 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 border border-light-crystal-blue/50 dark:border-smoke-gray rounded-3xl p-12 max-w-4xl mx-auto">
//             <div className="w-16 h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-6">
//               <Users className="w-8 h-8 text-light-crystal-purple dark:text-molten-gold" />
//             </div>

//             <h3 className="text-2xl font-light text-light-text dark:text-molten-gold mb-4">
//               Join Our Collaborative Team
//             </h3>
//             <p className="text-light-muted dark:text-dark-text-muted mb-8 font-light max-w-2xl mx-auto leading-relaxed">
//               We're always looking for passionate and talented individuals to join our growing team.
//               Explore our open positions or send us your resume for future opportunities.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 onClick={() => handleOpenModal('position')}
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: '0 10px 40px rgba(139, 69, 19, 0.2)'
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex items-center justify-center space-x-2 px-8 py-4 bg-light-crystal-purple text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:bg-gradient-inferno dark:hover:shadow-fire-glow"
//               >
//                 <Plus className="w-5 h-5" />
//                 <span>VIEW OPEN POSITIONS</span>
//               </motion.button>

//               <motion.button
//                 key={`send-resume-${isDark}`}
//                 onClick={() => handleOpenModal('resume')}
//                 whileHover={{
//                   scale: 1.02,
//                   borderColor: '#6366f1',
//                   color: '#6366f1'        
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`
//                   flex items-center justify-center space-x-2 px-8 py-4 border-2
//                   ${isDark ? 'border-smoke-gray' : 'border-gray-300'}
//                   ${isDark ? 'text-dark-text' : 'text-light-muted'}
//                   font-medium rounded-full transition-all duration-300
//                   hover:bg-gray-50 dark:hover:bg-ashen-charcoal
//                 `}
//               >
//                 <Send className="w-5 h-5" />
//                 <span>SEND YOUR RESUME</span>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Job Application Modal */}
//       <JobApplicationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         jobType={modalType}
//       />
//     </section>
//   );
// };

// export default TeamSection;
