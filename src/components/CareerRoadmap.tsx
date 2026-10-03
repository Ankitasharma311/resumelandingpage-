import React from 'react';
import { Briefcase, BarChart2 } from 'lucide-react';

export const CareerRoadmap: React.FC = () => {
  const targetRoles = [
    { title: 'Software Developer', sub: 'Entry-Level', style: 'bg-slate-50 border-slate-200 text-slate-900' },
    { title: 'Python Developer', sub: 'Primary Pursuit', style: 'bg-blue-50 border-blue-200 text-blue-900 font-semibold' },
    { title: 'Junior Software Engineer', sub: 'Fresher', style: 'bg-slate-50 border-slate-200 text-slate-900' },
    { title: 'Junior Python Dev', sub: 'Backend / Scripting', style: 'bg-slate-50 border-slate-200 text-slate-900' },
    { title: 'Web Developer', sub: 'Frontend / Full-Stack', style: 'bg-slate-50 border-slate-200 text-slate-900' },
    { title: 'AI / GenAI Roles', sub: 'Prompting / Integration', style: 'bg-purple-50 border-purple-200 text-purple-900 font-semibold' },
    { title: 'Automation Roles', sub: 'Workflows & Tooling', style: 'bg-slate-50 border-slate-200 text-slate-900 col-span-2 sm:col-span-1' },
  ];

  const steps = [
    {
      step: 'STEP 01',
      title: 'BCA Final Year',
      desc: 'Acquiring strong academic foundation in databases, OS, and software principles.',
      status: 'Active Status',
      active: true,
      badgeColor: 'text-blue-700 bg-blue-100',
    },
    {
      step: 'STEP 02',
      title: 'Skill Development',
      desc: 'Deepening Python proficiency, algorithmic problem solving, and modern web tooling.',
      status: 'In Progress',
      active: false,
      badgeColor: 'text-emerald-700 bg-emerald-100',
    },
    {
      step: 'STEP 03',
      title: 'Projects',
      desc: 'Building modular GitHub repositories with clear documentation and tests.',
      status: 'Iterative',
      active: false,
      badgeColor: 'text-slate-700 bg-slate-200',
    },
    {
      step: 'STEP 04',
      title: 'Internship / Entry-Level',
      desc: 'Securing an apprenticeship or fresher role at a collaborative software firm.',
      status: 'Target 2026-27',
      active: false,
      badgeColor: 'text-blue-700 bg-blue-100',
    },
    {
      step: 'STEP 05',
      title: 'Software Dev Career',
      desc: 'Growing into a dependable, well-rounded software engineer and Python specialist.',
      status: 'Long-Term Goal',
      active: false,
      badgeColor: 'text-purple-700 bg-purple-100',
    },
  ];

  return (
    <section className="py-14 border-b border-slate-200" id="career-goals">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-blue-600"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
          05. Aspirations
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Career Goals &amp; Growth Roadmap
      </h2>
      <p className="text-sm text-slate-600 mt-1 max-w-2xl">
        A grounded, realistic roadmap focused on continuous learning, practical software creation, and qualifying for entry-level engineering roles.
      </p>

      <div className="mt-8 space-y-8">
        {/* Target Job Roles */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>Target Entry-Level Roles &amp; Opportunities</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Actively preparing and seeking roles where foundational programming knowledge and eagerness to absorb engineering standards bring immediate value:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {targetRoles.map((role, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition-transform hover:-translate-y-0.5 ${role.style}`}
              >
                <span className="block text-xs font-semibold">{role.title}</span>
                <span className="text-[10px] opacity-80">{role.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Career Roadmap */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-emerald-600" />
            <span>5-Stage Visual Progression Plan</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {steps.map((st, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border transition-all ${
                  st.active
                    ? 'bg-blue-50/80 border-blue-200 ring-2 ring-blue-500/20'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold ${
                    st.active ? 'text-blue-700' : 'text-slate-500'
                  }`}
                >
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">{st.title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{st.desc}</p>
                <span
                  className={`mt-3 inline-block text-[10px] font-mono px-2 py-0.5 rounded ${st.badgeColor}`}
                >
                  {st.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
