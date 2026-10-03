import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResumeModal,
  onDownloadResume,
}) => {
  return (
    <section className="py-14 border-b border-slate-200" id="resume">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-blue-600"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
          06. Documents
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Curriculum Vitae / Resume
      </h2>
      <p className="text-sm text-slate-600 mt-1">
        Download or preview my verified academic and technical credentials.
      </p>

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 text-center relative overflow-hidden shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4 text-blue-600">
            <FileText className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-slate-900">Ankita Sharma — Official Resume</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
            Detailed breakdown of BCA academic curriculum, programming languages, database knowledge, and development goals.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-sm">
            <span>File: resume.pdf</span>
            <span className="text-slate-300">•</span>
            <span>Status: Verified Fresher Summary</span>
          </div>

          {/* Direct action buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onDownloadResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </button>
            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4 text-blue-600" />
              View Resume Online
            </button>
          </div>

          <p className="text-[11px] text-slate-500 mt-4 font-mono">
            Standard PDF format • Easily replaceable by updating <code className="bg-slate-200/80 px-1 py-0.5 rounded text-slate-700">resume.pdf</code> in the root directory.
          </p>
        </div>
      </div>
    </section>
  );
};
