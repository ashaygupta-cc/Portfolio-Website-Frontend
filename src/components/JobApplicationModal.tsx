import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, AlertCircle, Loader, FileText, User, Mail, Phone, MapPin, Calendar, Briefcase, ArrowLeft, Users, Code, Palette, Database, Cloud, Shield, Heart, Star } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobType: 'position' | 'resume';
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, jobType }) => {
  const [currentView, setCurrentView] = useState<'positions' | 'form'>('positions');
  const [selectedPosition, setSelectedPosition] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    availability: '',
    portfolio: '',
    linkedin: '',
    github: '',
    coverLetter: '',
    resume: null as File | null,
    workType: 'full-time'
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const [dragActive, setDragActive] = useState(false);

  const teamPositions = [
    {
      id: 'frontend-collaborator',
      title: 'Frontend Collaborator',
      department: 'Development Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Flexible Hours',
      available: true,
      urgent: true,
      icon: <Code className="w-5 h-5" />,
      color: 'from-light-crystal-blue to-light-crystal-purple', // Light theme color
      bgColor: 'from-blue-50 to-cyan-50', // Light theme color
      description: 'Join our frontend team to build amazing user interfaces. Share knowledge, learn together, and contribute to exciting projects.',
      skills: ['React/Vue', 'CSS/Tailwind', 'JavaScript', 'UI/UX'],
      benefits: ['Skill sharing', 'Flexible schedule', 'Project ownership', 'Learning opportunities']
    },
    {
      id: 'backend-collaborator',
      title: 'Backend Collaborator',
      department: 'Development Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Part-time/Full-time',
      available: true,
      urgent: false,
      icon: <Database className="w-5 h-5" />,
      color: 'from-light-accent-gold to-light-accent-warm', // Light theme color
      bgColor: 'from-green-50 to-emerald-50', // Light theme color
      description: 'Help build robust backend systems and APIs. Collaborate on architecture decisions and share in project success.',
      skills: ['Node.js/Python', 'Databases', 'APIs', 'Cloud Services'],
      benefits: ['Technical mentorship', 'Architecture input', 'Revenue sharing', 'Portfolio building']
    },
    {
      id: 'design-collaborator',
      title: 'Design Collaborator',
      department: 'Creative Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Project-based',
      available: true,
      urgent: false,
      icon: <Palette className="w-5 h-5" />,
      color: 'from-light-crystal-purple to-light-crystal-blue', // Light theme color
      bgColor: 'from-purple-50 to-pink-50', // Light theme color
      description: 'Create beautiful designs and user experiences. Work closely with developers and contribute to design systems.',
      skills: ['Figma/Sketch', 'UI/UX Design', 'Prototyping', 'Brand Design'],
      benefits: ['Creative freedom', 'Design leadership', 'Client interaction', 'Portfolio growth']
    },
    {
      id: 'devops-collaborator',
      title: 'DevOps Collaborator',
      department: 'Infrastructure Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'Intermediate+',
      commitment: 'As needed',
      available: false,
      urgent: false,
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-light-accent-warm to-light-accent-gold', // Light theme color
      bgColor: 'from-orange-50 to-red-50', // Light theme color
      description: 'Help maintain and improve our deployment infrastructure. Share expertise in cloud technologies.',
      skills: ['AWS/GCP', 'Docker', 'CI/CD', 'Monitoring'],
      benefits: ['Infrastructure ownership', 'Learning budget', 'Certification support', 'Tech leadership']
    },
    {
      id: 'product-collaborator',
      title: 'Product Collaborator',
      department: 'Strategy Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Flexible',
      available: false,
      urgent: false,
      icon: <Users className="w-5 h-5" />,
      color: 'from-light-crystal-blue to-light-crystal-purple', // Light theme color
      bgColor: 'from-indigo-50 to-purple-50', // Light theme color
      description: 'Shape product direction and strategy. Work with clients and team to define project requirements.',
      skills: ['Product Strategy', 'User Research', 'Analytics', 'Communication'],
      benefits: ['Strategic input', 'Client relationships', 'Business development', 'Leadership growth']
    },
    {
      id: 'marketing-collaborator',
      title: 'Marketing Collaborator',
      department: 'Growth Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Part-time',
      available: true,
      urgent: true,
      icon: <Star className="w-5 h-5" />,
      color: 'from-light-accent-warm to-light-accent-gold', // Light theme color
      bgColor: 'from-pink-50 to-rose-50', // Light theme color
      description: 'Help grow our brand and reach new clients. Create content, manage social media, and build our community.',
      skills: ['Content Creation', 'Social Media', 'SEO', 'Brand Strategy'],
      benefits: ['Creative projects', 'Brand building', 'Network growth', 'Marketing skills']
    },
    {
      id: 'qa-collaborator',
      title: 'QA Collaborator',
      department: 'Quality Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'Entry to Mid Level',
      commitment: 'Project-based',
      available: true,
      urgent: false,
      icon: <Shield className="w-5 h-5" />,
      color: 'from-light-crystal-purple to-light-crystal-blue', // Light theme color
      bgColor: 'from-teal-50 to-cyan-50', // Light theme color
      description: 'Ensure our products meet the highest quality standards. Learn testing methodologies and automation.',
      skills: ['Manual Testing', 'Test Automation', 'Bug Tracking', 'User Testing'],
      benefits: ['Quality ownership', 'Testing expertise', 'Process improvement', 'Attention to detail']
    },
    {
      id: 'content-collaborator',
      title: 'Content Collaborator',
      department: 'Content Team',
      location: 'Remote Collaboration',
      type: 'Collaborative',
      experience: 'All Levels Welcome',
      commitment: 'Flexible',
      available: false,
      urgent: false,
      icon: <Heart className="w-5 h-5" />,
      color: 'from-light-accent-gold to-light-accent-warm', // Light theme color
      bgColor: 'from-amber-50 to-orange-50', // Light theme color
      description: 'Create engaging content for our blog, documentation, and marketing materials. Share your expertise.',
      skills: ['Technical Writing', 'Blogging', 'Documentation', 'Storytelling'],
      benefits: ['Thought leadership', 'Writing portfolio', 'Community building', 'Knowledge sharing']
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setCurrentView(jobType === 'position' ? 'positions' : 'form');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      setCurrentView('positions');
      setSelectedPosition('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        position: '',
        experience: '',
        availability: '',
        portfolio: '',
        linkedin: '',
        github: '',
        coverLetter: '',
        resume: null,
        workType: 'full-time'
      });
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        message: ''
      });
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen, jobType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (file: File) => {
    if (file.type === 'application/pdf' || file.type.includes('document')) {
      setSubmitStatus(prev => ({ ...prev, isError: false, message: '' })); // Clear previous error
      setFormData({
        ...formData,
        resume: file
      });
    } else {
      setSubmitStatus(prev => ({ ...prev, isError: true, message: 'Please upload a PDF, DOC, or DOCX file.' }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handlePositionSelect = (position: any) => {
    if (!position.available) return;

    setSelectedPosition(position.title);
    setFormData({
      ...formData,
      position: position.title
    });
    setCurrentView('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'resume' && value instanceof File) {
          formDataToSend.append(key, value);
        } else if (typeof value === 'string' && value !== null) {
          formDataToSend.append(key, value);
        }
      });

      // FIX: Ensure jobType is always explicitly appended to FormData
      formDataToSend.append('jobType', jobType); 

      // This fetch call uses relative path, relying on vercel.json rewrite
      const response = await fetch('/api/job-application', { 
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message
        });

        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        // FIX: Use result.message directly for a more specific error from backend
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Submission error:', error);

      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        // FIX: Display the specific error message from the backend (error.message will contain result.message)
        message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
      });
    }
  };

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (2-5 years)',
    'Senior Level (5-8 years)',
    'Lead Level (8+ years)',
    'Executive Level'
  ];

   const renderPositionsView = () => (
    <>
      {/* Header - Compact for mobile */}
      <div className="bg-gradient-to-r from-light-crystal-purple to-light-crystal-blue dark:from-inferno-orange dark:to-crimson-blaze text-white p-3 md:p-6 rounded-t-3xl flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Join Our Collaborative Team</h2>
            <p className="text-purple-100 dark:text-molten-gold text-sm md:text-base">
              Work together, share success, and build amazing projects as a team
            </p>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4 md:w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Positions Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-light-bg dark:bg-dark-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {teamPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20, rotate: Math.random() * 4 - 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotate: Math.random() * 3 - 1.5,
                transition: { duration: 0.3 }
              }}
              onClick={() => handlePositionSelect(position)}
              className={`relative p-4 md:p-6 rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                position.available
                  ? `bg-light-surface dark:bg-dark-card border-gray-200/50 dark:border-smoke-gray/50 hover:shadow-2xl hover:border-light-crystal-blue dark:hover:border-inferno-orange`
                  : 'bg-gray-50 dark:bg-smoke-gray border-gray-200 opacity-50 cursor-not-allowed'
              }`}
            >
              {/* Floating glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${position.color} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Urgent Badge */}
              {position.available && position.urgent && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="absolute -top-2 -right-2 px-2 py-1 md:px-3 md:py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg"
                >
                  URGENT
                </motion.div>
              )}

              {/* Unavailable Badge */}
              {!position.available && (
                <div className="absolute -top-2 -right-2 px-2 py-1 md:px-3 md:py-1 bg-gray-400 text-white text-xs font-bold rounded-full">
                  CLOSED
                </div>
              )}

              {/* Floating Position Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg ${
                  position.available 
                    ? `bg-gradient-to-br ${position.color} text-white dark:bg-gradient-inferno`
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                {position.icon}
              </motion.div>

              {/* Position Info */}
              <div className="mb-3 md:mb-4 relative z-10">
                <h3 className={`text-lg md:text-xl font-bold mb-1 md:mb-2 ${
                  position.available ? 'text-light-text dark:text-molten-gold' : 'text-gray-500 dark:text-smoke-gray'
                }`}>
                  {position.title}
                </h3>
                <div className="space-y-1 text-xs md:text-sm">
                  <p className={position.available ? 'text-light-crystal-purple dark:text-crimson-blaze font-medium' : 'text-gray-400 dark:text-smoke-gray'}>
                    {position.department} • {position.type}
                  </p>
                  <p className={position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-smoke-gray'}>
                    🌍 {position.location}
                  </p>
                  <p className={position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-smoke-gray'}>
                    📚 {position.experience}
                  </p>
                  <p className={`font-semibold ${position.available ? 'text-green-600 dark:text-molten-gold' : 'text-gray-400 dark:text-smoke-gray'}`}>
                    ⏰ {position.commitment}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`text-xs md:text-sm mb-3 md:mb-4 leading-relaxed ${
                position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-dark-text-muted'
              }`}>
                {position.description}
              </p>

              {/* Skills */}
              <div className="mb-3 md:mb-4">
                <p className={`text-xs font-semibold mb-2 ${
                  position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-dark-text-muted'
                }`}>
                  Skills & Technologies:
                </p>
                <div className="flex flex-wrap gap-1">
                  {position.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${
                        position.available
                          ? 'bg-white/80 dark:bg-ashen-charcoal text-gray-700 dark:text-dark-text-muted shadow-sm'
                          : 'bg-gray-200 dark:bg-smoke-gray text-gray-400 dark:text-dark-text-muted'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {position.skills.length > 3 && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      position.available
                        ? 'bg-white/80 dark:bg-ashen-charcoal text-gray-700 dark:text-dark-text-muted shadow-sm'
                        : 'bg-gray-200 dark:bg-smoke-gray text-gray-400 dark:text-dark-text-muted'
                    }`}>
                      +{position.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-3 md:mb-4">
                <p className={`text-xs font-semibold mb-2 ${
                  position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-dark-text-muted'
                }`}>
                  What You Get:
                </p>
                <div className="space-y-1">
                  {position.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        position.available ? 'bg-light-crystal-blue dark:bg-inferno-orange' : 'bg-gray-300 dark:bg-smoke-gray'
                      }`} />
                      <span className={`text-xs ${
                        position.available ? 'text-light-muted dark:text-dark-text-muted' : 'text-gray-400 dark:text-dark-text-muted'
                      }`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Button */}
              <div className="mt-auto">
                {position.available ? (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`w-full py-2 md:py-3 px-4 rounded-xl text-center text-xs md:text-sm font-semibold bg-gradient-to-r ${position.color} text-white shadow-lg dark:bg-gradient-inferno`}
                  >
                    Join Team
                  </motion.div>
                ) : (
                  <div className="w-full py-2 md:py-3 px-4 rounded-xl text-center text-xs md:text-sm font-semibold bg-gray-300 dark:bg-smoke-gray text-gray-500 dark:text-dark-text-muted">
                    Position Closed
                  </div>
                )}
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-light-crystal-blue dark:bg-inferno-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-light-crystal-purple dark:bg-crimson-blaze rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '100ms' }} />
              <div className="absolute top-1/2 right-4 w-1 h-1 bg-light-accent-gold dark:bg-molten-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '200ms' }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 rounded-3xl border border-light-crystal-blue/50 dark:border-smoke-gray text-center"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-light-crystal-blue/20 dark:bg-ember-red rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-light-crystal-purple dark:text-molten-gold" />
          </div>
          <h3 className="text-lg md:text-lg font-semibold text-light-text dark:text-molten-gold mb-2">
            Don't see your perfect collaboration?
          </h3>
          <p className="text-light-muted dark:text-dark-text-muted mb-4 text-sm md:text-base">
            We're always open to new ideas and collaborations. Send us your resume and tell us how you'd like to contribute to Binary Beats.
          </p>
          <motion.button
            onClick={() => setCurrentView('form')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 md:px-6 py-2 md:py-3 bg-light-crystal-purple dark:bg-gradient-inferno text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:hover:shadow-fire-glow text-sm md:text-base"
          >
            Propose Collaboration
          </motion.button>
        </motion.div>
      </div>
    </>
  );

  const renderFormView = () => (
    <>
      {/* Header - Compact for mobile */}
      <div className="bg-gradient-to-r from-light-crystal-purple to-light-crystal-blue dark:from-inferno-orange dark:to-crimson-blaze text-white p-3 md:p-6 rounded-t-3xl flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {jobType === 'position' && (
              <motion.button
                onClick={() => setCurrentView('positions')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors mr-3 md:mr-4"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 h-5" />
              </motion.button>
            )}
            <div>
              <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                {selectedPosition ? `Join as ${selectedPosition}` : 
                 jobType === 'position' ? 'Join Our Collaborative Team' : 'Submit Your Resume'}
              </h2>
              <p className="text-purple-100 dark:text-molten-gold text-sm md:text-base">
                {jobType === 'position' 
                  ? 'Start your collaboration journey with Binary Beats'
                  : 'Send us your resume for future collaboration opportunities'
                }
              </p>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
          >
            <X className="w-4 md:w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-light-bg dark:bg-dark-bg">
        {/* Status Messages */}
        {submitStatus.isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
          >
            <CheckCircle className="w-4 h-4 md:w-5 h-5 text-green-600" />
            <p className="text-green-700 text-sm">{submitStatus.message}</p>
          </motion.div>
        )}

        {submitStatus.isError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 md:mb-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
          >
            <AlertCircle className="w-4 h-4 md:w-5 h-5 text-red-600" />
            <p className="text-red-700 text-sm">{submitStatus.message}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Personal Information */}
          <div className="bg-light-surface dark:bg-dark-card rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-molten-gold mb-3 md:mb-4 flex items-center">
              <User className="w-4 h-4 md:w-5 h-5 mr-2 text-light-crystal-purple dark:text-molten-gold" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="Your last name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  <Mail className="w-3 h-3 md:w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  <Phone className="w-3 h-3 md:w-4 h-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  <MapPin className="w-3 h-3 md:w-4 h-4 inline mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="City, State/Country"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-light-surface dark:bg-dark-card rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-molten-gold mb-3 md:mb-4 flex items-center">
              <Briefcase className="w-4 h-4 md:w-5 h-5 mr-2 text-light-crystal-purple dark:text-molten-gold" />
              Collaboration Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Collaboration Interest *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="e.g., Frontend Collaborator"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Experience Level *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text"
                >
                  <option value="" className="text-gray-500 dark:text-dark-text-muted">Select experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level} className="text-light-text dark:text-dark-text">{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Collaboration Type
                </label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text"
                >
                  <option value="full-time" className="text-light-text dark:text-dark-text">Full-time Collaboration</option>
                  <option value="part-time" className="text-light-text dark:text-dark-text">Part-time Collaboration</option>
                  <option value="contract" className="text-light-text dark:text-dark-text">Project-based</option>
                  <option value="freelance" className="text-light-text dark:text-dark-text">Freelance Collaboration</option>
                  <option value="internship" className="text-light-text dark:text-dark-text">Learning Collaboration</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  <Calendar className="w-3 h-3 md:w-4 h-4 inline mr-1" />
                  Availability
                </label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="e.g., Immediately, 2 weeks notice"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="https://yourportfolio.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="bg-light-surface dark:bg-dark-card rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-molten-gold mb-3 md:mb-4 flex items-center">
              <FileText className="w-4 h-4 md:w-5 h-5 mr-2 text-light-crystal-purple dark:text-molten-gold" />
              Resume Upload *
            </h3>
            
            <div
              className={`border-2 border-dashed rounded-xl p-6 md:p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-light-crystal-blue dark:border-inferno-orange bg-light-crystal-blue/10 dark:bg-ember-red/20' 
                  : 'border-gray-300 dark:border-smoke-gray hover:border-light-crystal-blue dark:hover:border-inferno-orange'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {formData.resume ? (
                <div className="flex items-center justify-center space-x-3">
                  <FileText className="w-6 h-6 md:w-8 h-8 text-light-crystal-purple dark:text-molten-gold" />
                  <div>
                    <p className="text-light-text dark:text-dark-text font-medium text-sm md:text-base">{formData.resume.name}</p>
                    <p className="text-light-muted dark:text-dark-text-muted text-xs md:text-sm">
                      {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, resume: null })}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <X className="w-4 h-4 md:w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div>
                  <Upload className="w-8 h-8 md:w-12 h-12 text-gray-400 dark:text-smoke-gray mx-auto mb-3 md:mb-4" />
                  <p className="text-light-muted dark:text-dark-text-muted mb-2 text-sm md:text-base">
                    Drag and drop your resume here, or{' '}
                    <label className="text-light-crystal-purple hover:text-light-crystal-blue dark:text-inferno-orange dark:hover:text-molten-gold cursor-pointer">
                      browse files
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                      />
                    </label>
                  </p>
                  <p className="text-gray-400 dark:text-smoke-gray text-xs md:text-sm">PDF, DOC, or DOCX (max 10MB)</p>
                </div>
              )}
            </div>
          </div>

          {/* Cover Letter */}
          <div className="bg-light-surface dark:bg-dark-card rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-molten-gold mb-3 md:mb-4">
              Why Join Binary Beats? / Additional Information
            </h3>
            
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows={4}
              disabled={submitStatus.isSubmitting}
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 text-sm md:text-base bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
              placeholder="Tell us about yourself, your experience, and why you'd like to collaborate with Binary Beats. What unique value can you bring to our team?"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={submitStatus.isSubmitting || !formData.resume}
            whileHover={!submitStatus.isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!submitStatus.isSubmitting ? { scale: 0.98 } : {}}
            className="w-full flex items-center justify-center space-x-2 py-3 md:py-4 bg-gradient-to-r from-light-crystal-purple to-light-crystal-blue dark:from-inferno-orange dark:to-crimson-blaze text-white font-medium rounded-full transition-all duration-300 hover:from-light-crystal-blue hover:to-light-crystal-purple dark:hover:shadow-fire-glow disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {submitStatus.isSubmitting ? (
              <>
                <Loader className="w-4 h-4 md:w-5 h-5 animate-spin" />
                <span>SUBMITTING APPLICATION...</span>
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 md:w-5 h-5" />
                <span>JOIN OUR TEAM</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
          onClick={onClose}
          style={{ paddingTop: '100px', paddingBottom: '20px' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-light-surface dark:bg-dark-surface rounded-3xl shadow-2xl w-full max-w-6xl max-h-full overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {currentView === 'positions' ? renderPositionsView() : renderFormView()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobApplicationModal;
