const projects = [
  {
    id: 'mediqueue',
    title: 'MediQueue',
    subtitle: 'CareQueue + Health-Vault',
    desc: 'HIPAA-compliant healthcare operations platform with real-time patient queue management and an encrypted medical records vault.',
    icon: '🏥',
    color: 'from-emerald-400 to-cyan-500',
    borderColor: 'hover:border-emerald-500/40',
    glowColor: 'hover:shadow-emerald-500/10',
    glowRaw: 'rgba(52,211,153,0.15)',
    metrics: [
      { val: '100+', label: 'REST APIs' },
      { val: '<200ms', label: 'Queue Latency' },
      { val: 'AES-256', label: 'Encryption' },
      { val: 'Docker', label: 'Deployed' },
    ],
    features: [
      '13 route modules & 9 MongoDB models with compound indexing',
      'Real-time queue via Socket.io WebSocket with sub-200ms position sync',
      'JWT + OTP auth with refresh-token rotation and rate limiting (100 req/min)',
      'Consent-based encrypted medical records with full audit logging',
    ],
    tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Docker', 'AES-256'],
    github: 'https://github.com/piyushkumar0707/MediQueue',
    live: 'https://medi-queue-ten.vercel.app/login',
  },
  {
    id: 'travira',
    title: 'Travira',
    subtitle: 'AI-Powered Tourism Safety Platform',
    desc: 'Full-stack tourism safety platform with AI-driven safety scoring, GPS tracking, automated E-FIR, and blockchain-secured incident records.',
    icon: '🌍',
    color: 'from-blue-400 to-indigo-500',
    borderColor: 'hover:border-blue-500/40',
    glowColor: 'hover:shadow-blue-500/10',
    glowRaw: 'rgba(59,130,246,0.15)',
    metrics: [
      { val: '25+', label: 'REST APIs' },
      { val: '5', label: 'Microservices' },
      { val: '<300ms', label: 'AI Scoring' },
      { val: 'PWA', label: 'Mobile Support' },
    ],
    features: [
      '5 decoupled microservices with shared auth middleware (60% less auth code)',
      'Python FastAPI AI scoring service with real-time WebSocket streaming',
      'Blockchain immutable logging with Hardhat smart contract integration',
      'Multi-role system (Admin, Officer, Tourist) with geo-fencing & emergency alerts',
    ],
    tech: ['React', 'Node.js', 'Express', 'Python FastAPI', 'MongoDB', 'WebSocket', 'Blockchain', 'Android (Kotlin)'],
    github: 'https://github.com/piyushkumar0707/sih-dashboard-test-1',
    live: 'https://sih-dashboard-test-1.vercel.app/system-health',
  },
  {
    id: 'tutorai',
    title: 'Tutor-AI',
    subtitle: 'AI Learning & Tutoring Platform',
    desc: 'AI-powered tutoring platform with real-time streaming chat, RAG-based retrieval, adaptive quizzes, and PDF assignment generation.',
    icon: '🤖',
    color: 'from-purple-400 to-pink-500',
    borderColor: 'hover:border-purple-500/40',
    glowColor: 'hover:shadow-purple-500/10',
    glowRaw: 'rgba(168,85,247,0.15)',
    metrics: [
      { val: 'SSE', label: 'Streaming AI' },
      { val: 'RAG', label: 'Retrieval' },
      { val: 'Adaptive', label: 'Quizzes' },
      { val: 'PDF', label: 'Generation' },
    ],
    features: [
      'SSE streaming responses for real-time AI chat with Groq API',
      'RAG-powered document retrieval for context-aware tutoring sessions',
      'Adaptive difficulty quiz engine with session persistence',
      'PDF assignment generator, metrics middleware, and JWT auth + rate limiting',
    ],
    tech: ['React.js', 'Express.js', 'MongoDB', 'Groq API', 'SSE', 'JWT', 'RAG'],
    github: 'https://github.com/piyushkumar0707/TUTOR-AI',
    live: 'https://tutor-ai-nu.vercel.app/',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Project & Task Management Platform',
    desc: 'Full-stack project and task management system with RBAC, team dashboards, auth workflows, and a modular backend architecture.',
    icon: '📋',
    color: 'from-orange-400 to-rose-500',
    borderColor: 'hover:border-orange-500/40',
    glowColor: 'hover:shadow-orange-500/10',
    glowRaw: 'rgba(251,146,60,0.15)',
    metrics: [
      { val: 'RBAC', label: 'Auth System' },
      { val: 'Multi', label: 'Team Roles' },
      { val: 'JWT', label: 'Secured' },
      { val: 'REST', label: 'API Driven' },
    ],
    features: [
      'Role-based access control (RBAC) across admin, manager, and member roles',
      'Modular backend architecture with clean route/controller/service separation',
      'Task CRUD with status tracking, assignments, and deadline management',
      'Persistent auth with JWT sessions, protected routes, and dashboard analytics',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/piyushkumar0707/TaskFlow',
    live: 'https://task-flow-two-liard.vercel.app/login',
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-brand-cyan/10 -top-[100px] -right-[100px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">What I've Built</p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Production-ready applications built with real metrics, real users, and real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="glass rounded-2xl p-6 border border-white/5 cursor-default group relative overflow-hidden reveal group-hover:border-transparent"
              style={{ transition: 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1px ${p.glowRaw}, 0 20px 50px ${p.glowRaw}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(600px circle at 0% 0%, ${p.glowRaw}, transparent 40%)` }}
              />
              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative">
                <div>
                  <div className={`text-xs font-mono uppercase tracking-widest bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-1`}>
                    {p.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span>{p.icon}</span>
                    {p.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all border border-white/10"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all border border-white/10"
                      aria-label="Live Demo"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-2 mb-5 relative">
                {p.metrics.map(m => (
                  <div
                    key={m.label}
                    className="bg-dark-700/50 rounded-xl p-2 text-center border border-white/5 cursor-default"
                    style={{ transition: 'box-shadow 0.4s ease, transform 0.3s ease' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${p.glowRaw}, 0 10px 30px ${p.glowRaw}`;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className={`text-sm font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{m.val}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-2 items-start text-slate-400 text-xs">
                    <span className="text-brand-cyan mt-0.5 flex-shrink-0">▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 relative">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-md font-mono font-medium bg-dark-700/60 border border-white/8 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All repos link */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/piyushkumar0707?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
