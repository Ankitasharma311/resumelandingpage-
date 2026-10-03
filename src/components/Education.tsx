import React from 'react';
import { BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const subjects = [
    'Programming (C, C++, C#)',
    'Database Management (DBMS / MySQL)',
    'Operating Systems',
    'Web Development',
    'Software & System Analysis',
    'Statistics',
    'E-Commerce',
    'Computer Applications',
  ];

  return (
    <section className="py-14 border-b border-slate-200" id="education">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-blue-600"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
          02. Academic Background
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Education Timeline
      </h2>
      <p className="text-sm text-slate-600 mt-1">
        Formal curriculum grounding theoretical and applied computational concepts.
      </p>

      <div className="mt-8 relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {/* Degree item */}
        <div className="relative">
          {/* Timeline pin */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md shadow-blue-500/30"></div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200 mb-1.5">
                  Undergraduate Degree
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  Swami Vivekanand Government College (Ghumarwin), Himachal Pradesh
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  Final Year · 2027
                </span>
                <p className="text-[11px] text-slate-500 mt-1">Expected Graduation: 2027</p>
              </div>
            </div>

            {/* Relevant Coursework / Academic Areas */}
            <div className="mt-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>Core Academic Subjects &amp; Practical Areas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
