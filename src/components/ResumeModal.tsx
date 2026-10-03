import React, { useRef } from 'react';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Code2, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Modal Toolbar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
              Ankita Sharma — Official Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white font-sans text-slate-800" ref={resumeRef}>
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  ANKITA SHARMA
                </h1>
                <p className="text-sm font-semibold text-blue-700 mt-1">
                  BCA Final-Year Student | Aspiring Software &amp; Python Developer
                </p>
              </div>
              <div className="text-xs text-slate-600 sm:text-right space-y-1 font-mono">
                <p className="flex items-center sm:justify-end gap-1">
                  <MapPin className="w-3 h-3 text-red-500" /> Himachal Pradesh, India
                </p>
                <p className="flex items-center sm:justify-end gap-1">
                  <Mail className="w-3 h-3 text-blue-600" /> ankita.khushi311@gmail.com
                </p>
                <p>Status: Available for Entry-Level Roles</p>
              </div>
            </div>
          </div>

          {/* Professional Statement */}
          <div className="mt-5">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 pb-1 border-b border-slate-200 mb-2">
              Career Objective
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Enthusiastic and disciplined Bachelor of Computer Applications (BCA) final-year student
              with a deep foundation in core computer science, algorithm design, and software fundamentals.
              Passionate about programming in Python, application development, and web technologies.
              Seeking an entry-level Software Developer or Python Developer opportunity to contribute to
              innovative engineering teams while continuously sharpening technical capabilities.
            </p>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 pb-1 border-b border-slate-200 mb-2.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs text-slate-600">
                  Swami Vivekanand Government College (Ghumarwin), Himachal Pradesh
                </p>
              </div>
              <div className="text-right text-xs font-mono">
                <span className="font-semibold text-slate-800">Final Year</span>
                <p className="text-slate-500">Graduation: 2027</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Relevant Coursework:</span>{' '}
              Data Structures, Object-Oriented Programming (C++, C#), Database Management Systems (DBMS / MySQL),
              Operating Systems, Web Development (HTML/CSS), Computer Systems Architecture.
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 pb-1 border-b border-slate-200 mb-2.5">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block">Programming Languages:</span>
                <span className="text-slate-700">Python (Primary Focus), C, C++, C#</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block">Web Technologies:</span>
                <span className="text-slate-700">HTML5, CSS3, XML, Responsive Design</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block">Database &amp; Storage:</span>
                <span className="text-slate-700">MySQL, Relational Schema Design, SQL Queries, Normalization</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block">AI &amp; Emerging Tech:</span>
                <span className="text-slate-700">Structured Prompt Engineering, Generative AI Integration</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-5">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 pb-1 border-b border-slate-200 mb-2.5">
              Projects &amp; Systems
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span>AI Mirror (Assistive Computing Interface)</span>
                  <span className="font-mono text-[11px] text-amber-700">In Development</span>
                </div>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Engineered concept combining personalized feedback, calendar scheduling, and daily reflective
                  computing widgets using Python and modular interface frameworks.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-baseline font-semibold text-slate-900">
                  <span>GRAPH Prompt Framework</span>
                  <span className="font-mono text-[11px] text-emerald-700">Framework Specification</span>
                </div>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Formulated structured 5-pillar prompting system (Goal, Role, Audience, Parameters, How)
                  to eliminate hallucination and ambiguous model outputs for developer workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Soft Skills & Recruiter Info */}
          <div className="mt-5 pt-3 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-slate-600 gap-2">
            <div>
              <span className="font-semibold text-slate-800">Key Strengths:</span> Adaptable Fast Learner,
              Systematic Problem Solving, Clean Code Discipline.
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Verified Student Credentials • Swami Vivekanand Govt College
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
