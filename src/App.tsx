import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ResumeSection from './components/ResumeSection';
import SocialLinksSection from './components/SocialLinksSection';
import ContactSection from './components/ContactSection';
import TechExpertiseSection from './components/TechExpertiseSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 0
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0.9 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-light-main dark:bg-gradient-dark-main overflow-x-hidden transition-colors duration-300">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <TechExpertiseSection/>
          <JourneySection />
          <ProjectsSection />
          <CertificationsSection />
          <ResumeSection />
          <SocialLinksSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
