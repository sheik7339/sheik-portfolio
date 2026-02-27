import React from 'react';

const About = () => {
    const stats = [
        { label: 'Lines of Code', value: '250k+' },
        { label: 'GitHub Commits', value: '1,200+' },
        { label: 'Active Projects', value: '15+' },
        { label: 'Uptime Focus', value: '99.9%' },
    ];

    return (
        <section id="about" className="py-32 bg-[var(--bg-base)] relative overflow-hidden">
            <div className="container-px relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="relative">
                        <div className="glass-card p-12 bg-[var(--bg-card)] border-[length:var(--border-card)] relative z-10">
                            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-6">Technical Profile</h2>
                            <h3 className="text-4xl font-extrabold mb-8 text-[var(--text-title)] leading-tight">
                                Architecting <span className="text-gradient">Scalable Solutions</span> for the Modern Web.
                            </h3>
                            <p className="text-[var(--text-desc)] mb-8 leading-relaxed text-lg">
                                Based in India, I am a Full Stack Developer with a deep obsession for clean code and performant architectures. I specialize in building robust SaaS platforms that don't just work—they excel under pressure.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, idx) => (
                                    <div key={idx}>
                                        <span className="block text-3xl font-black text-[var(--text-title)] mb-1">{stat.value}</span>
                                        <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background Glows */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-[var(--text-title)] mb-10 border-l-4 border-blue-600 pl-6">Core Methodology</h4>
                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-600 group-hover:text-[var(--text-title)] transition-all">01</div>
                                    <h5 className="text-xl font-bold text-[var(--text-title)]">Modular Architecture</h5>
                                </div>
                                <p className="text-[var(--text-desc)] pl-14 text-sm leading-relaxed">
                                    I design systems using decoupled components to ensure maximum reusability and painless scalability as your user base grows.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-600 group-hover:text-[var(--text-title)] transition-all">02</div>
                                    <h5 className="text-xl font-bold text-[var(--text-title)]">Full-Stack Security</h5>
                                </div>
                                <p className="text-[var(--text-desc)] pl-14 text-sm leading-relaxed">
                                    Security isn't an afterthought. From JWT lifecycle management to sanitized database queries, protection is baked into the core.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-600 group-hover:text-[var(--text-title)] transition-all">03</div>
                                    <h5 className="text-xl font-bold text-[var(--text-title)]">Performance Tuning</h5>
                                </div>
                                <p className="text-[var(--text-desc)] pl-14 text-sm leading-relaxed">
                                    Optimization at every layer. Minimizing latency through efficient API design, state management, and asset delivery.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
