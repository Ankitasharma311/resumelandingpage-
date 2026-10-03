import React from 'react';
import { ProjectItem } from '../types';
import { Code, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const projects: ProjectItem[] = [
    {
      id: 'ai-mirror',
      title: 'AI Mirror',
      category: 'AI / Interactive Concept',
      categoryClass: 'bg-blue-50 text-blue-700 border-blue-200',
      statusBadge: 'Currently in Development',
      statusClass: 'text-amber-800 bg-amber-50 border-amber-200',
      description:
        'An AI-based concept focused on providing useful personalized interaction and reflection, combining contextual interfaces with assistive computing.',
      problemSolved:
        'Simplifying routine information retrieval and daily personal reflection through natural, seamless, and intelligent digital feedback.',
      keyFeatures: [
        'Personalized user interaction flows',
        'Intelligent visual / reflective interface layout',
        'Clean modular architecture for feature expansion',
      ],
      tags: ['Python', 'AI Concepts', 'Interactive UI'],
      githubStatus: 'GitHub: Coming Soon',
      demoStatus: 'Demo: Currently in Development',
    },
    {
      id: 'graph-prompt',
      title: 'GRAPH Prompt Framework',
      category: 'GenAI / Prompt Engineering',
      categoryClass: 'bg-purple-50 text-purple-700 border-purple-200',
      statusBadge: 'Documentation & Concept',
      statusClass: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      description:
        'A systematic prompt-generation framework designed to produce accurate, high-fidelity responses from Large Language Models with zero ambiguity.',
      problemSolved:
        'Eliminates hallucination and vague outputs from generative AI systems through deterministic structuring of system and user instructions.',
      graphSteps: [
        { letter: 'G', name: 'Goal', color: 'text-blue-600' },
        { letter: 'R', name: 'Role', color: 'text-indigo-600' },
        { letter: 'A', name: 'Audience', color: 'text-cyan-600' },
        { letter: 'P', name: 'Parameters', color: 'text-purple-600' },
        { letter: 'H', name: 'How', color: 'text-emerald-600' },
      ],
      tags: ['Prompt Engineering', 'Generative AI', 'Logical Structuring'],
      githubStatus: 'GitHub: Coming Soon',
      demoStatus: 'Framework Spec Available',
    },
  ];

  return (
    <section className="py-14 border-b border-slate-200" id="projects">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
              04. Portfolio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Featured Projects &amp; Concepts
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
          Actively Expanding Portfolio
        </span>
      </div>

      <p className="text-sm text-slate-600 max-w-2xl">
        Practical conceptual and development projects created to explore problem-solving, structured workflows, and user interaction.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1: AI Mirror */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                AI / Interactive Concept
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-amber-800 bg-amber-50 border border-amber-200">
                Currently in Development
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                AI Mirror
              </h3>
              <button
                onClick={() => onSelectProject(projects[0])}
                className="text-xs font-mono text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Interactive Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              An AI-based concept focused on providing useful personalized interaction and reflection, combining contextual interfaces with assistive computing.
            </p>

            <div className="space-y-3 mb-5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800 block mb-1">Problem Solved:</span>
                <p className="text-slate-600 leading-normal">
                  Simplifying routine information retrieval and daily personal reflection through natural, seamless, and intelligent digital feedback.
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800 block mb-1">Key Features:</span>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Personalized user interaction flows</li>
                  <li>Intelligent visual / reflective interface layout</li>
                  <li>Clean modular architecture for feature expansion</li>
                </ul>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-blue-700 border border-slate-200">
                Python
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200">
                AI Concepts
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200">
                Interactive UI
              </span>
            </div>
          </div>

          {/* Project Actions / Links */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-slate-400" />
              GitHub: Coming Soon
            </span>
            <button
              onClick={() => onSelectProject(projects[0])}
              className="text-amber-700 font-medium hover:text-amber-900 cursor-pointer"
            >
              Demo: Currently in Development
            </button>
          </div>
        </div>

        {/* Project 2: GRAPH Prompt Framework */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-purple-300 transition-all group">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
                GenAI / Prompt Engineering
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200">
                Documentation &amp; Concept
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                GRAPH Prompt Framework
              </h3>
              <button
                onClick={() => onSelectProject(projects[1])}
                className="text-xs font-mono text-purple-600 hover:text-purple-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Interactive Builder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              A systematic prompt-generation framework designed to produce accurate, high-fidelity responses from Large Language Models with zero ambiguity.
            </p>

            <div className="space-y-3 mb-5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800 block mb-1">
                  Architecture &amp; Methodology:
                </span>
                <div className="grid grid-cols-5 gap-1 text-center font-mono mt-2">
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="text-blue-600 font-bold">G</span>
                    <br />
                    <span className="text-[10px] text-slate-500">Goal</span>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="text-indigo-600 font-bold">R</span>
                    <br />
                    <span className="text-[10px] text-slate-500">Role</span>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="text-cyan-600 font-bold">A</span>
                    <br />
                    <span className="text-[10px] text-slate-500">Audience</span>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="text-purple-600 font-bold">P</span>
                    <br />
                    <span className="text-[10px] text-slate-500">Parameters</span>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <span className="text-emerald-600 font-bold">H</span>
                    <br />
                    <span className="text-[10px] text-slate-500">How</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800 block mb-1">Problem Solved:</span>
                <p className="text-slate-600 leading-normal">
                  Eliminates hallucination and vague outputs from generative AI systems through deterministic structuring of system and user instructions.
                </p>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-purple-700 border border-slate-200">
                Prompt Engineering
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200">
                Generative AI
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200">
                Logical Structuring
              </span>
            </div>
          </div>

          {/* Project Actions / Links */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-slate-400" />
              GitHub: Coming Soon
            </span>
            <button
              onClick={() => onSelectProject(projects[1])}
              className="text-blue-600 font-medium hover:text-blue-800 cursor-pointer"
            >
              Framework Spec Available
            </button>
          </div>
        </div>
      </div>

      {/* Next in Pipeline banner */}
      <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-lg">💡</span>
          <p className="text-xs text-slate-700">
            <strong>Next in Pipeline:</strong> Hands-on Python automation scripts, MySQL database schemas, and responsive web development apps.
          </p>
        </div>
        <span className="text-[11px] font-mono text-slate-500">Regularly updated</span>
      </div>
    </section>
  );
};
