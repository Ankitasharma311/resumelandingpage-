/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CareerRoadmap } from './components/CareerRoadmap';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { ProjectItem } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Generate text/markdown formatted resume blob for direct download
    const resumeContent = `ANKITA SHARMA
BCA Final-Year Student | Aspiring Software Developer & Python Developer
Location: Himachal Pradesh, India
Email: ankita.khushi311@gmail.com
Status: Open for Entry-Level & Fresher Roles (2027 Batch)

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Final-year Bachelor of Computer Applications (BCA) student with a strong foundation
in core programming logic, software development, relational database modeling,
and web technologies. Enthusiastic and disciplined fast-learner with hands-on
interest in Python programming, script automation, and structured GenAI prompt engineering.

================================================================================
EDUCATION
================================================================================
Bachelor of Computer Applications (BCA)
Swami Vivekanand Government College (Ghumarwin), Himachal Pradesh
Expected Graduation: 2027 (Final Year)
Key Coursework:
- Programming Languages (C, C++, C#)
- Database Management Systems (DBMS / MySQL)
- Operating Systems & System Architecture
- Web Development (HTML5, CSS3, XML)
- Software & System Analysis
- Computer Applications & Statistics

================================================================================
TECHNICAL SKILLS
================================================================================
- Languages: Python (Primary Focus), C, C++, C#
- Web Frontend: HTML5, CSS3, XML, Responsive Design & Semantic DOM
- Database: MySQL (Queries, Schema Design, Constraints, Normalization, Keys)
- AI & Exploration: Structured Prompt Engineering (GRAPH Framework), Generative AI

================================================================================
PROJECTS & INITIATIVES
================================================================================
1. AI Mirror (Interactive Computing Concept)
   - Intelligent visual and reflective interface concept combining daily routine
     retrieval, personalized feedback, and Python backend scripts.

2. GRAPH Prompt Framework (GenAI / Prompt Engineering)
   - Formulated 5-pillar architectural framework (Goal, Role, Audience, Parameters, How)
     to generate high-fidelity, zero-hallucination outputs from Large Language Models.

================================================================================
CAREER TARGETS
================================================================================
- Entry-Level Software Developer
- Python Developer (Primary Pursuit)
- Junior Software Engineer / Fresher
- Junior Python Developer / Backend
- Web Developer (Frontend / Full-Stack)
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ankita_Sharma_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setToastMessage('Resume download initiated! Opening document preview...');
    setResumeModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <CareerRoadmap />
        <ResumeSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />
        <Contact onShowToast={(msg) => setToastMessage(msg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-40 p-2.5 rounded-xl bg-white border border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-400 shadow-md transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
