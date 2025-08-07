import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Github, Linkedin, Music, Trophy, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const [profileVisits, setProfileVisits] = useState<number>(0);

  useEffect(() => {
    const incrementVisit = async () => {
      try {
        const response = await fetch('/api/increment-visit', { 
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({})
        });
        const result = await response.json();
        if (response.ok && result.success) { 
          setProfileVisits(result.visits); 
        } 
        else {            
          const errorMessage = result.message || `HTTP error: ${response.status} ${response.statusText}`;
          console.error('Failed to increment profile visits on backend:', errorMessage);
        }
      } catch (error) {
        console.error('Error calling increment-visit API:', error instanceof Error ? error.message : String(error));
      }
    };

    incrementVisit();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'ashay051204@gmail.com',
      link: 'mailto:ashay051204@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91-8840356284',
      link: 'tel:+918840356284'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      link: 'https://maps.app.goo.gl/Gb6eq6uGsXa3riz17'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ashay-gupta-30068831b/',
      color: 'hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-600 dark:hover:text-blue-200'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/ashaygupta-cc',
      color: 'hover:bg-violet-100 dark:hover:bg-violet-800 hover:text-violet-500 dark:hover:text-violet-200'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/ashay.shiva?igsh=MWIxd3Zmd2U5anA0YQ==',
      color: 'hover:bg-pink-100 dark:hover:bg-pink-800 hover:text-pink-600 dark:hover:text-pink-200'
    },
    {
      name: 'X',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:bg-red-100 dark:hover:bg-red-800 hover:text-red-600 dark:hover:text-red-200'
    },
    {
      name: 'Spotify',
      icon: <Music className="w-5 h-5" />,
      url: 'https://open.spotify.com/user/vamhgzxkc5pexfrrllfv9kqvu?si=ojqSWQz7Qxa-nhI_87kMzQ',
      color: 'hover:bg-green-100 dark:hover:bg-green-800 hover:text-green-600 dark:hover:text-green-200'
    },
    {
      name: 'CodeChef',
      icon: <Trophy className="w-6 h-6" />,
      url: 'https://www.codechef.com/users/ashaygupta_cc',
      color: 'hover:bg-yellow-100 dark:hover:bg-yellow-800 hover:text-yellow-800 dark:hover:text-yellow-200'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'E-commerce Solution',
    'Custom Software',
    'UI/UX Design',
    'Consulting',
    'Other'
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-gradient-light-main dark:bg-gradient-dark-main overflow-hidden will-change-transform md:py-20 sm:py-16 xs:py-12">
      <div className="max-w-7xl mx-auto px-6">
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
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            LET'S<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:bg-gradient-inferno">
              COLLABORATE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-light-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light mt-6"
          >
            Ready to bring your ideas to life? Let's discuss your project and start
            your digital transformation journey together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-3xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-light-crystal-blue/20 dark:bg-ember-red rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-light-crystal-purple dark:text-gray-300" />
              </div>
              <h3 className="text-2xl font-medium text-light-text dark:text-gray-300">Start Your Journey</h3>
            </div>

            {submitStatus.isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700 text-sm">{submitStatus.message}</p>
              </motion.div>
            )}

            {submitStatus.isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-700 text-sm">{submitStatus.message}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 disabled:opacity-50 bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text"
                  >
                    <option value="" className="text-gray-500 dark:text-dark-text-muted">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="text-light-text dark:text-dark-text">{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-muted dark:text-dark-text-muted mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-smoke-gray rounded-xl focus:ring-2 focus:ring-light-crystal-purple dark:focus:ring-inferno-orange focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 bg-light-surface dark:bg-ashen-charcoal text-light-text dark:text-dark-text placeholder-gray-500 dark:placeholder-dark-text-muted"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus.isSubmitting}
                whileHover={!submitStatus.isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!submitStatus.isSubmitting ? { scale: 0.98 } : {}}
                className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-[#3a9fff] to-[#9a5fff] dark:bg-gradient-inferno text-white font-medium rounded-full transition-all duration-300 hover:bg-light-crystal-blue dark:hover:shadow-fire-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus.isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>START COLLABORATION</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-medium text-light-text dark:text-gray-300 mb-8">Get in Touch</h3>
              <p className="text-light-muted dark:text-dark-text-muted font-light mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities.
                Whether you have a specific idea in mind or just want to explore
                possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 bg-light-surface dark:bg-dark-card backdrop-blur-sm border border-gray-200/50 dark:border-smoke-gray/50 rounded-2xl hover:border-sky-300 dark:hover:border-gray-700 hover:shadow-[0_0_30px_rgba(135,206,235,0.6),_0_0_30px_rgba(221,160,221,0.6)] dark:hover:shadow-gray-600 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-light-crystal-blue/20 dark:bg-ember-red rounded-xl flex items-center justify-center text-light-crystal-purple dark:text-gray-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-light-text dark:text-gray-300">{info.title}</h4>
                    <p className="text-light-muted dark:text-dark-text-muted font-light">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-smoke-gray/50 dark:to-ashen-charcoal/50 rounded-2xl border border-light-crystal-blue/50 dark:border-smoke-gray"
            >
              <h4 className="font-medium text-light-text dark:text-gray-300 mb-2">Quick Response Guarantee</h4>
              <p className="text-light-muted dark:text-dark-text-muted text-sm font-light">
                I typically respond to all inquiries within 24 hours. For urgent projects,
                feel free to call directly for immediate assistance.
              </p>
            </motion.div>

            <div className="pt-8">
              <h4 className="text-lg font-medium text-light-text dark:text-gray-300 mb-4">Connect with me</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full h-12 bg-gray-100 dark:bg-smoke-gray rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} text-gray-700 dark:text-dark-text-muted`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-light-surface dark:bg-dark-card backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-smoke-gray/50">
                  <div className="text-2xl font-light text-light-crystal-purple dark:text-crimson-blaze mb-1">2K+</div>
                  <div className="text-xs text-light-muted dark:text-dark-text-muted font-light">Followers</div>
                </div>
                <div className="text-center p-4 bg-light-surface dark:bg-dark-card backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-smoke-gray/50">
                  <div className="text-2xl font-light text-light-crystal-blue dark:text-gray-300 mb-1">{profileVisits.toLocaleString()}</div>
                  <div className="text-xs text-light-muted dark:text-dark-text-muted font-light">Profile Visits</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
