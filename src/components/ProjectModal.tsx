import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, Terminal, Play } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  // States for GRAPH interactive generator
  const [graphGoal, setGraphGoal] = useState('Create a RESTful CRUD API script');
  const [graphRole, setGraphRole] = useState('Senior Python Backend Developer');
  const [graphAudience, setGraphAudience] = useState('Junior Engineers & Code Reviewers');
  const [graphParams, setGraphParams] = useState('Type hints, Pydantic validation, SQLite db');
  const [graphHow, setGraphHow] = useState('Step-by-step modular files with docstrings');

  // States for AI Mirror simulator
  const [mirrorTime, setMirrorTime] = useState('08:30 AM');
  const [mirrorGreeting, setMirrorGreeting] = useState('Good Morning, Ankita');
  const [mirrorMood, setMirrorMood] = useState<'focused' | 'energetic' | 'calm'>('focused');

  if (!project) return null;

  const generatedPrompt = `### [SYSTEM INSTRUCTION: GRAPH FRAMEWORK]
- [G] GOAL: ${graphGoal}
- [R] ROLE: ${graphRole}
- [A] AUDIENCE: ${graphAudience}
- [P] PARAMETERS: ${graphParams}
- [H] HOW / EXECUTION: ${graphHow}

Ensure deterministic, zero-hallucination code adhering strictly to specified constraints.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${project.categoryClass}`}>
                {project.category}
              </span>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${project.statusClass}`}>
                {project.statusBadge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-500 font-semibold mb-1">Concept Synopsis</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Interactive Feature depending on project */}
          {project.id === 'graph-prompt' ? (
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <h4 className="text-xs font-bold font-mono text-slate-900 uppercase">
                    Interactive GRAPH Prompt Builder
                  </h4>
                </div>
                <span className="text-[10px] text-purple-700 bg-purple-100 font-mono px-2 py-0.5 rounded">
                  Live Generator
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    [G] Goal:
                  </label>
                  <input
                    type="text"
                    value={graphGoal}
                    onChange={(e) => setGraphGoal(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    [R] Role:
                  </label>
                  <input
                    type="text"
                    value={graphRole}
                    onChange={(e) => setGraphRole(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    [A] Audience:
                  </label>
                  <input
                    type="text"
                    value={graphAudience}
                    onChange={(e) => setGraphAudience(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    [P] Parameters:
                  </label>
                  <input
                    type="text"
                    value={graphParams}
                    onChange={(e) => setGraphParams(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    [H] How (Execution Guidance):
                  </label>
                  <input
                    type="text"
                    value={graphHow}
                    onChange={(e) => setGraphHow(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Generated Prompt Output */}
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-slate-600 font-semibold">
                    Structured Prompt Preview:
                  </span>
                  <button
                    onClick={handleCopyPrompt}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-md border border-purple-200 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied!' : 'Copy Prompt'}
                  </button>
                </div>
                <pre className="p-3 bg-slate-900 text-purple-200 font-mono text-xs rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {generatedPrompt}
                </pre>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-300">
                    AI Mirror Simulated Display
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span>Mood:</span>
                  {(['focused', 'energetic', 'calm'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMirrorMood(m)}
                      className={`px-2 py-0.5 rounded capitalize cursor-pointer ${
                        mirrorMood === m ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Mirror HUD */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <p className="text-3xl font-mono font-light text-slate-100">{mirrorTime}</p>
                  <p className="text-xs font-medium text-cyan-400 mt-1">{mirrorGreeting}</p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Schedule: BCA Practical Session &amp; Python Script Optimization
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono max-w-xs">
                  <span className="text-[10px] text-slate-400 block mb-1">AI Daily Reflection:</span>
                  <p className="text-slate-300 italic text-[11px]">
                    {mirrorMood === 'focused'
                      ? '“Focus on mastering data structures today; each solved problem compounds your capability.”'
                      : mirrorMood === 'energetic'
                      ? '“Great momentum this week! Finish the Python automation module and commit the code.”'
                      : '“Steady pace, clear mind. Reviewing database normalization and schema design today.”'}
                  </p>
                </div>
              </div>

              {/* Technical Stack callout */}
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-1">
                <span>Architecture: Python Controller + Modular Screen Widget</span>
                <span className="text-cyan-400">Status: In Prototyping</span>
              </div>
            </div>
          )}

          {/* Problem & Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold text-slate-900 mb-1">Core Problem Solved</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{project.problemSolved}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold text-slate-900 mb-1">Technologies &amp; Paradigms</h5>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono">Ankita Sharma Portfolio Projects</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
