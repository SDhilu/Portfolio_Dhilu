import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import WorkExperience from './components/WorkExperience';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('cv_theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cv_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Sticky Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Portfolio Container */}
      <main className="main-content">
        {/* Candidate Profile / Header */}
        <HeaderSection personal={cvData.personal} stats={cvData.stats} />

        {/* Work Experience Section */}
        <WorkExperience experiences={cvData.workExperiences} />

        {/* Technical Skills Section */}
        <SkillsSection skills={cvData.skills} />

        {/* Portfolio Projects Section */}
        <ProjectsSection projects={cvData.projects} />

        {/* Education & Certifications Section */}
        <EducationSection
          education={cvData.education}
          certifications={cvData.certifications}
        />

        {/* Contact & Download CV Section */}
        <ContactSection personal={cvData.personal} />
      </main>

      {/* Footer */}
      <Footer name={cvData.personal.name} title={cvData.personal.title} />
    </div>
  );
}
