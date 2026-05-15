const experiences = [
  {
    role: 'LLM Post-Training Intern',
    company: 'Ethara AI (Green Rider Technology LLP)',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    gradient: 'from-brand-cyan to-brand-purple',
    glowColor: 'rgba(0,242,254,0.15)',
    dotGlow: 'shadow-brand-cyan/50',
    bullets: [
      <>Evaluated LLM responses on curated problem sets sourced from internal platforms, handling <strong className="text-brand-cyan font-semibold">10,000+</strong> daily interactions.</>,
      <>Designed structured prompt–response evaluation workflows, identifying incorrect outputs and documenting failure cases with detailed reasoning.</>,
      <>Performed error analysis and provided corrective feedback, highlighting model reasoning gaps and suggesting improved responses.</>,
    ],
    skills: ['Python', 'LLM Evaluation', 'RLHF', 'SFT', 'API Design', 'A/B Testing'],
  },
  {
    role: 'Open Source Contributor',
    badge: 'Rank #32 / 3414+ · Top 1%',
    company: 'GirlScript Summer of Code (GSSoC) – Remote',
    period: 'Aug 2025 – Nov 2025',
    type: 'Open Source',
    gradient: 'from-brand-purple to-brand-pink',
    glowColor: 'rgba(123,47,247,0.15)',
    dotGlow: 'shadow-brand-purple/50',
    bullets: [
      <>Merged <strong className="text-brand-purple font-semibold">48+</strong> PRs across <strong className="text-brand-purple font-semibold">10+</strong> repositories, contributing <strong className="text-brand-purple font-semibold">5,000+</strong> LOC; earned Top <strong className="text-brand-purple font-semibold">1%</strong> global ranking.</>,
      <>Architected JWT + RBAC authentication system handling <strong className="text-brand-purple font-semibold">100+</strong> concurrent users on a production platform.</>,
      <>Optimized REST API endpoints and MongoDB query plans, cutting average response time by <strong className="text-brand-purple font-semibold">40%</strong>.</>,
      <>Shipped <strong className="text-brand-purple font-semibold">3</strong> production-ready backend features end-to-end; conducted peer code reviews improving merge quality.</>,
    ],
    skills: ['Node.js', 'React', 'MongoDB', 'JWT', 'RBAC', 'Socket.io', 'Open Source'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-dark-800 relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-brand-purple/10 top-0 right-[-150px]" />
      <div className="orb w-[350px] h-[350px] bg-brand-cyan/8 bottom-0 left-[-100px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-14 reveal">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-brand-cyan inline-block" />
            02 / Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Work &amp;{' '}
            <span className="gradient-text">Open Source</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10">
          {/* Vertical line */}
          <div className="absolute left-[17px] top-6 bottom-6 w-px bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-30" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-8 group reveal">
              {/* Dot */}
              <div className="flex-shrink-0 mt-5 z-10">
                <div
                  className={`w-9 h-9 rounded-full border-2 border-transparent flex items-center justify-center shadow-lg ${exp.dotGlow} transition-all duration-500 group-hover:scale-110`}
                  style={{ background: 'linear-gradient(#0d0d14, #0d0d14) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box', '--tw-gradient-stops': 'initial' }}
                >
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 relative glass rounded-2xl p-7 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-transparent"
                style={{
                  transition: 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 0 1px ${exp.glowColor}, 0 20px 50px ${exp.glowColor}`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Subtle inner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(600px circle at 0% 0%, ${exp.glowColor}, transparent 40%)` }}
                />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5 relative">
                  <div>
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                      {exp.badge && (
                        <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white shadow-md`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{exp.company}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent border border-white/10 bg-dark-700/50`}>
                      {exp.period}
                    </div>
                    <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-medium">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 relative">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${exp.gradient}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative">
                  {exp.skills.map(s => (
                    <span
                      key={s}
                      className={`text-xs px-3 py-1 rounded-md font-mono font-medium bg-dark-700/60 border border-white/8 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
