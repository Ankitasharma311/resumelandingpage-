import React from 'react';
import { Code, Globe, Database, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-14 border-b border-slate-200" id="skills">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-px w-8 bg-blue-600"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
          03. Competencies
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Technical Skills Dashboard
      </h2>
      <p className="text-sm text-slate-600 mt-1">
        Honest representation of core competencies and actively evolving programming areas.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Group 1: Programming Languages */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider">
                Languages
              </span>
              <span className="p-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                <Code className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Programming</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">C Language</span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  Core Logic
                </span>
              </li>
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">C++</span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  OOP Basics
                </span>
              </li>
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">C#</span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  Application OOP
                </span>
              </li>
              <li className="flex flex-col gap-1 text-xs sm:text-sm bg-blue-50 p-2.5 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-blue-900">Python</span>
                  <span className="text-[10px] font-mono text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                    Primary Focus
                  </span>
                </div>
                <span className="text-[11px] text-blue-700 font-mono">
                  Currently Learning / Developing
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Group 2: Web Technologies */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-indigo-700 uppercase tracking-wider">
                Frontend
              </span>
              <span className="p-1.5 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
                <Globe className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Web Technologies</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">HTML</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Semantic Markup
                </span>
              </li>
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">CSS</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  Styling &amp; Layouts
                </span>
              </li>
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">XML</span>
                <span className="text-[10px] font-mono text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                  Data Representation
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Focusing on clean responsive design &amp; structured DOM hierarchy.
          </div>
        </div>

        {/* Group 3: Database */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-cyan-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-cyan-700 uppercase tracking-wider">
                Storage
              </span>
              <span className="p-1.5 rounded-md bg-cyan-50 text-cyan-600 border border-cyan-100">
                <Database className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Database</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center justify-between text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="font-medium text-slate-800">MySQL</span>
                <span className="text-[10px] font-mono text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded">
                  Relational DBMS
                </span>
              </li>
              <li className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="text-slate-800 font-medium">Core Concepts:</span>
                <p className="text-[11px] mt-1 text-slate-600 leading-relaxed">
                  SQL Queries, Table Schema, Constraints, Normalization &amp; Primary/Foreign Keys.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Relational modeling for persistent software data.
          </div>
        </div>

        {/* Group 4: Other Areas of Interest & AI */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-purple-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                Exploration
              </span>
              <span className="p-1.5 rounded-md bg-purple-50 text-purple-600 border border-purple-100">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Interest Areas</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium">
                Software Dev
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium">
                Web Dev
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-700 text-xs border border-purple-200 font-medium">
                AI &amp; GenAI
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium">
                Automation
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium">
                Prompt Engineering
              </span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
            Constantly integrating modern AI tooling with programming routines.
          </div>
        </div>
      </div>
    </section>
  );
};
