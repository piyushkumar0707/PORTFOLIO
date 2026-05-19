import { useState, useEffect, useRef } from 'react';

const RESUME_URL = 'https://raw.githubusercontent.com/piyushkumar0707/PORTFOLIO/main/Piyush_Kumar_Singh_Resume.pdf';

const SCRIPT = [
  { type: 'cmd',     text: 'whoami' },
  { type: 'out',     text: 'Piyush Kumar Singh — B.Tech @ MITS Gwalior (AI & Robotics)' },
  { type: 'blank' },
  { type: 'cmd',     text: 'cat role.txt' },
  { type: 'role',    text: 'Backend Engineer  ·  Full-Stack Developer  ·  AI/LLM Intern' },
  { type: 'blank' },
  { type: 'cmd',     text: 'git log --oneline --author=piyush' },
  { type: 'commit',  hash: 'a3f9c21', text: 'GSSoC Rank #32 / 3,414  ·  Top 1%  ·  48+ merged PRs' },
  { type: 'commit',  hash: 'b7d4e08', text: '500+ DSA solved  ·  LeetCode 100-Day Badge 2025' },
  { type: 'commit',  hash: 'c1a2b3d', text: 'LLM Post-Training Intern @ Ethara AI' },
  { type: 'blank' },
  { type: 'cmd',     text: 'echo $AVAILABILITY' },
  { type: 'success', text: '✓  Open to SDE Internships & Full-time Roles' },
];

export default function Hero() {
  const [revealed, setRevealed] = useState([]);
  const [typing, setTyping]     = useState(null);
  const idx             = useRef(0);
  const timer           = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    function processNext() {
      if (idx.current >= SCRIPT.length) return;
      const line = SCRIPT[idx.current];

      if (line.type === 'cmd') {
        let char = 0;
        function typeChar() {
          char++;
          setTyping({ partial: line.text.slice(0, char), type: 'cmd' });
          if (char < line.text.length) {
            timer.current = setTimeout(typeChar, 45);
          } else {
            timer.current = setTimeout(() => {
              setRevealed(prev => [...prev, line]);
              setTyping(null);
              idx.current++;
              timer.current = setTimeout(processNext, 130);
            }, 200);
          }
        }
        timer.current = setTimeout(typeChar, 40);
      } else if (line.type === 'blank') {
        setRevealed(prev => [...prev, line]);
        idx.current++;
        timer.current = setTimeout(processNext, 60);
      } else {
        let char = 0;
        const speed = line.type === 'commit' ? 28 : line.type === 'role' ? 32 : 22;
        function typeOut() {
          char++;
          setTyping({ partial: line.text.slice(0, char), type: line.type, hash: line.hash });
          if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
          }
          if (char < line.text.length) {
            timer.current = setTimeout(typeOut, speed);
          } else {
            timer.current = setTimeout(() => {
              setRevealed(prev => [...prev, line]);
              setTyping(null);
              idx.current++;
              timer.current = setTimeout(processNext, line.type === 'success' ? 120 : 80);
            }, 80);
          }
        }
        timer.current = setTimeout(typeOut, 40);
      }
    }

    timer.current = setTimeout(processNext, 700);
    return () => clearTimeout(timer.current);
  }, []);

  function renderLine(line, i) {
    switch (line.type) {
      case 'cmd':
        return (
          <div key={i} className="flex items-center gap-2">
            <span className="text-brand-purple font-bold select-none">$</span>
            <span className="text-brand-cyan">{line.text}</span>
          </div>
        );
      case 'out':
        return <div key={i} className="text-slate-300 pl-5">{line.text}</div>;
      case 'role':
        return <div key={i} className="pl-5 font-semibold gradient-text">{line.text}</div>;
      case 'commit':
        return (
          <div key={i} className="flex items-start gap-3 pl-5">
            <span className="text-yellow-400 text-xs mt-0.5 flex-shrink-0">{line.hash}</span>
            <span className="text-slate-300">{line.text}</span>
          </div>
        );
      case 'success':
        return <div key={i} className="pl-5 text-green-400 font-semibold">{line.text}</div>;
      case 'blank':
        return <div key={i} className="h-2" />;
      default:
        return null;
    }
  }

  const scriptDone = revealed.length === SCRIPT.length && !typing;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated orbs */}
      <div className="orb w-[500px] h-[500px] bg-brand-purple top-[-100px] left-[-200px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="orb w-[400px] h-[400px] bg-brand-cyan top-[20%] right-[-150px]" style={{ animation: 'float 6s ease-in-out infinite 2s' }} />
      <div className="orb w-[300px] h-[300px] bg-brand-pink bottom-[10%] left-[20%]" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 py-24 text-center">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
          <span className="text-white">Piyush Kumar</span>{' '}
          <span className="gradient-text">Singh</span>
        </h1>

        {/* Terminal window */}
        <div
          className="max-w-2xl mx-auto mb-10 text-left rounded-xl overflow-hidden shadow-2xl"
          style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 30px 60px rgba(0,0,0,0.6)' }}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 bg-[#1c1c2e] px-4 py-2.5 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto text-slate-500 text-xs font-mono tracking-wide">piyush@dev  ~  portfolio</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalBodyRef}
            className="bg-[#0d0d18] px-5 py-5 font-mono text-sm leading-relaxed min-h-[220px] max-h-[420px] overflow-y-auto"
          >
            <div className="space-y-0.5">
              {revealed.map((line, i) => renderLine(line, i))}

              {/* Typing line */}
              {typing && typing.type === 'cmd' && (
                <div className="flex items-center gap-2">
                  <span className="text-brand-purple font-bold select-none">$</span>
                  <span className="text-brand-cyan">{typing.partial}</span>
                  <span className="inline-block w-[7px] h-[14px] bg-brand-cyan ml-0.5 animate-pulse" />
                </div>
              )}
              {typing && typing.type === 'out' && (
                <div className="flex items-center gap-1 text-slate-300 pl-5">
                  {typing.partial}<span className="inline-block w-[6px] h-[13px] bg-slate-400 animate-pulse" />
                </div>
              )}
              {typing && typing.type === 'role' && (
                <div className="flex items-center gap-1 pl-5 font-semibold gradient-text">
                  {typing.partial}<span className="inline-block w-[6px] h-[13px] bg-brand-cyan animate-pulse" />
                </div>
              )}
              {typing && typing.type === 'commit' && (
                <div className="flex items-start gap-3 pl-5">
                  <span className="text-yellow-400 text-xs mt-0.5 flex-shrink-0">{typing.hash}</span>
                  <span className="text-slate-300 flex items-center gap-1">
                    {typing.partial}<span className="inline-block w-[6px] h-[13px] bg-slate-400 animate-pulse" />
                  </span>
                </div>
              )}
              {typing && typing.type === 'success' && (
                <div className="flex items-center gap-1 pl-5 text-green-400 font-semibold">
                  {typing.partial}<span className="inline-block w-[6px] h-[13px] bg-green-400 animate-pulse" />
                </div>
              )}

              {/* Idle cursor */}
              {scriptDone && (
                <div className="flex items-center gap-2">
                  <span className="text-brand-purple font-bold select-none">$</span>
                  <span className="inline-block w-[7px] h-[14px] bg-brand-cyan ml-0.5 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a href="https://github.com/piyushkumar0707" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Profile
          </a>
          <a href="#contact" className="btn-outline !border-brand-purple/50 !text-brand-purple hover:!bg-brand-purple/10 hover:!border-brand-purple">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !border-emerald-500/50 !text-emerald-400 hover:!bg-emerald-500/10 hover:!border-emerald-400 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

      </div>
    </section>
  );
}
