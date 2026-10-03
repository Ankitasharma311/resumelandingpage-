import React from 'react';
import { Zap, Target, TrendingUp, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-14 border-b border-slate-200" id="about">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-blue-600"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
          01. Overview
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">About Me</h2>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Professional Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
          <p>
            Hello! I am a final-year{' '}
            <strong className="text-slate-900 font-semibold">
              Bachelor of Computer Applications (BCA)
            </strong>{' '}
            student with a profound curiosity for programming, core software development, and modern
            web technologies. As an aspiring software and Python developer, I focus on understanding
            foundational computing concepts and translating them into working code.
          </p>
          <p>
            Currently, I am actively broadening my technical spectrum—learning{' '}
            <strong className="text-blue-700 font-medium">Python</strong> for script automation and
            logic building, refining my grasp of web development fundamentals, and exploring practical
            paradigms in <strong className="text-blue-700 font-medium">AI and Generative AI</strong>{' '}
            such as structured prompt engineering.
          </p>
          <p>
            I consider myself a <span className="text-slate-900 font-medium">dedicated, fast learner</span>{' '}
            who approaches challenges with consistency, discipline, and attention to detail. My immediate
            goal is to secure an entry-level software development or Python role where I can contribute
            actively to real-world engineering teams while continuously sharpening my craft.
          </p>

          <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 shadow-sm">
              <span className="text-blue-600">
                <Zap className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Quick Learner</p>
                <p className="text-[11px] text-slate-500">Adaptable to stacks</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 shadow-sm">
              <span className="text-indigo-600">
                <Target className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Dedicated</p>
                <p className="text-[11px] text-slate-500">Consistent effort</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 shadow-sm">
              <span className="text-cyan-600">
                <TrendingUp className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">Growth Mindset</p>
                <p className="text-[11px] text-slate-500">Continuous study</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Profile Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Quick Profile
                </h3>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono border border-blue-200">
                Fresher
              </span>
            </div>

            <dl className="mt-4 space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Education:</dt>
                <dd className="text-slate-900 font-semibold text-right">BCA (Computer Applications)</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Academic Status:</dt>
                <dd className="text-emerald-600 font-medium text-right">Final Year Student</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Expected Graduation:</dt>
                <dd className="text-slate-900 font-mono text-right">2027</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Career Level:</dt>
                <dd className="text-slate-900 text-right">Fresher / Entry-Level</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Primary Interests:</dt>
                <dd className="text-blue-600 font-medium text-right">Software Dev &amp; Python</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 font-medium">Location:</dt>
                <dd className="text-slate-900 text-right flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500 inline shrink-0" />
                  <span>Himachal Pradesh, India</span>
                </dd>
              </div>
            </dl>

            <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Recruiter Status:</span>
              <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Hire
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
