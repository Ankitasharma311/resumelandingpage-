import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<string>(
    'python -c "candidate.build_skills([\'Python\', \'WebDev\', \'Algorithms\'])"'
  );
  const [output, setOutput] = useState<string>(
    '> Status: Compiling knowledge, preparing for junior dev roles...'
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const presets = [
    {
      label: 'Build Skills',
      cmd: 'python -c "candidate.build_skills([\'Python\', \'WebDev\', \'Algorithms\'])"',
      out: '> Status: Compiling knowledge, preparing for junior dev roles...',
    },
    {
      label: 'Check Profile',
      cmd: 'python -m candidate.profile',
      out: '> Name: Ankita Sharma | Degree: BCA (2027) | Status: Ready for Entry-Level & Internships',
    },
    {
      label: 'List Stack',
      cmd: 'pip list --featured',
      out: '> Python 3.12, MySQL, HTML5/CSS3, C/C++, Generative AI Prompting',
    },
  ];

  const handleRunCommand = (cmd: string, out: string) => {
    setIsTyping(true);
    setActiveCommand(cmd);
    setOutput('Executing command...');
    setTimeout(() => {
      setOutput(out);
      setIsTyping(false);
    }, 280);
  };

  return (
    <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-md">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          <span className="text-[11px] text-slate-400 ml-2">ankita@portfolio:~/dev</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <TerminalIcon className="w-3 h-3 text-blue-400" />
          <span>interactive dev terminal</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="flex items-center gap-1.5">
          <span className="text-blue-400 select-none">$</span>
          <span className="text-emerald-300 font-semibold break-all">{activeCommand}</span>
        </p>
        <p className={`text-slate-400 mt-1 font-mono transition-opacity ${isTyping ? 'opacity-50' : 'opacity-100'}`}>
          {output}
        </p>
      </div>

      {/* Interactive Command triggers */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-slate-400 flex items-center gap-1">
          <Play className="w-2.5 h-2.5 text-blue-400" /> Run:
        </span>
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handleRunCommand(preset.cmd, preset.out)}
            className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
              activeCommand === preset.cmd
                ? 'bg-blue-900/60 border-blue-500 text-blue-200'
                : 'bg-slate-800/90 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {preset.label}
          </button>
        ))}
        {activeCommand !== presets[0].cmd && (
          <button
            onClick={() => handleRunCommand(presets[0].cmd, presets[0].out)}
            title="Reset terminal"
            className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 ml-auto cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};
