const stats = [
  { val: '#32', sub: '/ 3,414', label: 'GSSoC Global Rank', badge: 'Top 1%', color: 'from-yellow-400 to-amber-500', glowRaw: 'rgba(250,204,21,0.18)' },
  { val: '48+', sub: 'merged', label: 'Pull Requests', badge: '10+ repos', color: 'from-brand-purple to-brand-pink', glowRaw: 'rgba(123,47,247,0.18)' },
  { val: '500+', sub: 'problems', label: 'DSA Solved', badge: 'LeetCode + GfG', color: 'from-brand-cyan to-blue-500', glowRaw: 'rgba(0,242,254,0.18)' },
  { val: '8.14', sub: '/ 10', label: 'CGPA', badge: 'MITS Gwalior', color: 'from-emerald-400 to-cyan-500', glowRaw: 'rgba(52,211,153,0.18)' },
  { val: '5K+', sub: 'lines', label: 'Code Contributed', badge: 'Open Source', color: 'from-violet-400 to-purple-600', glowRaw: 'rgba(139,92,246,0.18)' },
  { val: '98.55', sub: '%ile', label: 'Naukri Young Turks', badge: '500K+ participants', color: 'from-pink-400 to-rose-500', glowRaw: 'rgba(244,114,182,0.18)' },
  { val: '100+', sub: 'built', label: 'REST APIs', badge: 'Production', color: 'from-orange-400 to-red-500', glowRaw: 'rgba(251,146,60,0.18)' },
  { val: '800+', sub: 'in 2025', label: 'GitHub Contributions', badge: 'Consistent streak', color: 'from-green-400 to-emerald-500', glowRaw: 'rgba(74,222,128,0.18)' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-brand-purple/15 bottom-0 right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-brand-cyan/8 top-0 left-[-80px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 reveal">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-brand-cyan inline-block" />
            01 / About
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Who I{' '}
            <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + info cards */}
          <div className="reveal">
            <h3 className="text-xl font-bold text-white mb-5 leading-snug">
              Building scalable systems,{' '}
              <span className="gradient-text">one commit at a time.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              I'm a 3rd-year B.Tech student in{' '}
              <span className="text-white font-semibold">Information Technology (AI & Robotics)</span>{' '}
              at Madhav Institute of Technology and Science, Gwalior, with a CGPA of{' '}
              <span className="text-brand-cyan font-semibold">8.14/10</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              I specialize in building production-ready, full-stack applications with a strong backend
              focus — architecting RESTful APIs, real-time WebSocket systems, secure JWT + RBAC
              authentication, and microservices architectures deployed on the cloud.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm">
              As an{' '}
              <span className="text-white font-semibold">LLM Post-Training Intern at Ethara AI</span>
              , I work on model evaluation, RLHF pipelines, and responsible AI practices. I'm also a{' '}
              <span className="text-white font-semibold">Top 1% GSSoC contributor</span> (Rank
              #32/3414) with 48+ merged PRs across 10+ production repositories.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'Education', value: 'MITS Gwalior (2023–2027)', color: 'from-brand-cyan to-blue-500', glowRaw: 'rgba(0,242,254,0.15)' },
                { icon: '📍', label: 'Location', value: 'Gwalior, India', color: 'from-emerald-400 to-cyan-500', glowRaw: 'rgba(52,211,153,0.15)' },
                { icon: '💼', label: 'Experience', value: 'LLM Intern @ Ethara AI', color: 'from-brand-purple to-brand-pink', glowRaw: 'rgba(123,47,247,0.15)' },
                { icon: '🌟', label: 'Open Source', value: 'GSSoC Rank #32', color: 'from-yellow-400 to-amber-500', glowRaw: 'rgba(250,204,21,0.15)' },
              ].map(item => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 cursor-default group relative overflow-hidden border border-white/5"
                  style={{ transition: 'box-shadow 0.5s ease, transform 0.3s ease' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${item.glowRaw}, 0 16px 40px ${item.glowRaw}`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ background: `radial-gradient(400px circle at 0% 0%, ${item.glowRaw}, transparent 60%)` }}
                  />
                  <div className="flex gap-3 items-center relative">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-semibold">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="reveal">
            <p className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-5">By the numbers</p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(s => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-5 border border-white/5 cursor-default group relative overflow-hidden"
                  style={{ transition: 'box-shadow 0.5s ease, transform 0.3s ease' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${s.glowRaw}, 0 20px 40px ${s.glowRaw}`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top gradient strip */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {/* Inner radial glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(300px circle at 0% 0%, ${s.glowRaw}, transparent 60%)` }}
                  />
                  <div className="relative">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className={`text-3xl font-extrabold bg-gradient-to-r ${s.color} bg-clip-text text-transparent leading-none`}>
                        {s.val}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{s.sub}</span>
                    </div>
                    <div className="text-white text-sm font-semibold mb-1">{s.label}</div>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${s.color} bg-clip-text text-transparent border border-white/10`}>
                      {s.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
