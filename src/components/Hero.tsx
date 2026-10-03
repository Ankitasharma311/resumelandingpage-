import React, { useState } from 'react';
import { Terminal } from './Terminal';
import { Code, Download, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [imageError, setImageError] = useState(false);

  // Exact image URL from user prompt
  const candidateImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAg8z7lHELFadWTSV2TeCPeP1s5sotPCI96gq65qmLj6wfnkHMM085w7q3Gvk9LlWdao6EWZyrxFGLnSTyIKERbxQZu7CJg7YcvisYS0aedqD7vuodiq3a_Cn6FAoIElo4trQdxeNmqhrxUObPeAvYrB79pXJAm6-zmteNIMZq5AbXiXxdnUwfr_g86p9Idwog2mEJ2OPbe5ZL11keI6NKapjcL8jhu-75fP5W9QAYPeM4ijo6Mp48Bd0y4_e4iaaQekHY';

  return (
    <section className="pt-8 pb-14 md:py-20 border-b border-slate-200" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Intro & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open for Entry-Level &amp; Fresher Roles (2027 Batch)
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ANKITA SHARMA
            </h1>
            <p className="mt-2 text-base sm:text-lg font-semibold text-blue-600 flex items-center flex-wrap gap-x-2">
              <span>BCA Final-Year Student</span>
              <span className="text-slate-300">•</span>
              <span>Aspiring Software Developer</span>
              <span className="text-slate-300">•</span>
              <span>Python Developer</span>
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            &ldquo;Passionate about programming, software development, web technologies, Python, and emerging technologies. Currently building practical projects and developing the skills required to start a career in the IT industry.&rdquo;
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap gap-3 items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Code className="w-4 h-4" />
              View My Projects
            </a>
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-sm font-semibold transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-600" />
              Download Resume
            </button>
          </div>

          {/* Social Buttons */}
          <div className="pt-1 flex items-center gap-4 text-xs font-medium text-slate-500">
            <span>Connect with me:</span>
            <a
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://github.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-slate-700" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Interactive Developer Terminal */}
          <Terminal />
        </div>

        {/* Right: Candidate Photo + Visual Badging (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-64 sm:w-72 md:w-80 group">
            {/* Glow background */}
            <div className="absolute -inset-1 rounded-3xl bg-blue-100 opacity-60 blur-xl group-hover:opacity-80 transition duration-500"></div>

            {/* Candidate Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-xl">
              {!imageError ? (
                <img
                  src={candidateImageUrl}
                  alt="Ankita Sharma - Candidate Portrait"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/5] filter contrast-[1.02] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-gradient-to-tr from-slate-100 to-blue-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md mb-3">
                    AS
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">Ankita Sharma</h3>
                  <p className="text-xs text-blue-600 font-mono mt-1">BCA Final Year Student</p>
                  <p className="text-[11px] text-slate-500 mt-2">SVGC Ghumarwin, HP</p>
                </div>
              )}

              {/* Subtle badge on photo */}
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-slate-200 text-center shadow-sm">
                <p className="text-xs font-bold text-slate-900 tracking-wide">Ankita Sharma</p>
                <p className="text-[11px] text-blue-600 font-mono">
                  BCA Final Year · SVGC Ghumarwin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
