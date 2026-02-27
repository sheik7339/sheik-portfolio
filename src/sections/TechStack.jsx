import React from 'react';

const TechStack = () => {
    const stack = [
        { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind', 'TypeScript'], icon: '⚡' },
        { title: 'Backend', skills: ['Node.js', 'Django', 'Go', 'PostgreSQL'], icon: '⚙️' },
        { title: 'Cloud', skills: ['AWS', 'Docker', 'Vercel', 'CI/CD'], icon: '☁️' },
        { title: 'Architecture', skills: ['REST APIs', 'JWT', 'OAuth', 'Microservices'], icon: '🏛️' },
    ];

    return (
        <section id="tech-stack" className="py-32 bg-grid">
            <div className="container-px">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">Core Expertise</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white">Advanced Stack.</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stack.map((group, idx) => (
                        <div key={idx} className="glass-card p-10 group relative border-white/5 hover:border-blue-500/30">
                            <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500">{group.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-4">{group.title}</h4>
                            <ul className="space-y-4">
                                {group.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 text-slate-400 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 transition-all group-hover/item:scale-150 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                                        <span className="font-semibold tracking-wide text-sm group-hover/item:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;