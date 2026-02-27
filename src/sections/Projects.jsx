const projects = [
    {
        id: 1,
        name: 'Bismi Arabic Institute',
        description: 'A premium SaaS-level educational platform for Arabic, Quran & Tajweed. Real-time profile management, Dark/Light themes, and a student consultation inquiry system.',
        tech: ['React', 'Django', 'PostgreSQL', 'Vercel', 'Render'],
        github: 'https://github.com/sheik7339/Bismi-arabic-institute',
        live: 'https://bismi-arabic-institute.vercel.app',
        highlights: ['Full-stack REST API with Django', 'Dynamic theme switching', 'Production deployment on Vercel + Render'],
        lang: 'JavaScript',
        langColor: '#f7df1e',
    },
    {
        id: 2,
        name: 'PrimeTrade Auth Dashboard',
        description: 'Secure JWT authentication dashboard with full token lifecycle management — access tokens, refresh tokens, and protected route architecture.',
        tech: ['React', 'Node.js', 'Express', 'JWT'],
        github: 'https://github.com/sheik7339/primetrade-auth-dashboard',
        live: 'https://primetrade-auth-dashboard-tau.vercel.app',
        highlights: ['Access + refresh token flow', 'Middleware-based route protection', 'Server-side validation & error handling'],
        lang: 'JavaScript',
        langColor: '#f7df1e',
    },
    {
        id: 3,
        name: 'Urban Fashion',
        description: 'Modern e-commerce platform with REST API product catalogue, cart management, and responsive mobile-first design. Deployed on Vercel.',
        tech: ['React', 'Django', 'PostgreSQL', 'Vercel'],
        github: 'https://github.com/sheik7339/urbanfashion-frontend',
        live: 'https://urbanfashion-frontend.vercel.app',
        highlights: ['E-commerce architecture with cart state', 'Django REST API backend', 'Fully responsive mobile-first UI'],
        lang: 'JavaScript',
        langColor: '#f7df1e',
    },
];

const GitHubIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const ExternalIcon = () => (
    <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const Projects = () => {
    return (
        <section id="projects" className="section-dark">
            <div className="container-px">

                {/* Section Header */}
                <div className="section-header">
                    <span className="section-kicker">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc">
                        Three real production applications I built from scratch — architecture, backend, and deployment included.
                    </p>
                </div>

                {/* 3 Project Cards */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">

                            {/* Top: GitHub icon + lang */}
                            <div className="pc-top">
                                <div className="pc-icon">
                                    <GitHubIcon />
                                </div>
                                <div className="pc-lang">
                                    <span className="lang-dot" style={{ background: project.langColor }}></span>
                                    <span className="lang-name">{project.lang}</span>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="pc-name">{project.name}</h3>

                            {/* Description */}
                            <p className="pc-desc">{project.description}</p>

                            {/* Tech Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        padding: '0.2rem 0.6rem',
                                        background: 'rgba(59,130,246,0.08)',
                                        border: '1px solid rgba(59,130,246,0.15)',
                                        borderRadius: '9999px',
                                        fontSize: '0.68rem',
                                        fontWeight: 700,
                                        color: '#60a5fa',
                                        letterSpacing: '0.04em'
                                    }}>{t}</span>
                                ))}
                            </div>

                            {/* Engineering Highlights */}
                            <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                {project.highlights.map((h, i) => (
                                    <li key={i} style={{ color: 'var(--text-desc)', fontSize: '0.8rem', lineHeight: 1.5 }}>{h}</li>
                                ))}
                            </ul>

                            {/* Action Buttons */}
                            <div className="pc-actions">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="pc-btn-source">
                                    <GitHubIcon />
                                    Source Code
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="pc-btn-live">
                                    <ExternalIcon />
                                    Live Demo
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

                {/* See All Repos CTA */}
                <div className="projects-cta">
                    <a href="https://github.com/sheik7339" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <GitHubIcon />
                        See All Repos on GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;
