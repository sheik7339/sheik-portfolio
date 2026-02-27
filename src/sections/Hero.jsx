import profileImg from '../assets/profile.jpg';
import logoImg from '../assets/logo.png';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-grid"></div>
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>

            <div className="container-px hero-inner">

                {/* LEFT: Text */}
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Open to Full-time Opportunities</span>
                    </div>

                    {/* Logo + Name Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                        <img
                            src={logoImg}
                            alt="Sheik Mohammed Logo"
                            style={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover', flexShrink: 0, boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}
                        />
                        <h1 className="hero-name" style={{ margin: 0 }}>
                            Hi, I'm <span className="text-gradient">Sheik Mohammed</span>
                        </h1>
                    </div>

                    <h2 className="hero-title">
                        Full Stack Developer
                    </h2>

                    <p className="hero-desc">
                        I build real-world web applications using <strong>React, Django, Node.js</strong> and modern cloud deployment. Focused on clean code, scalable architecture, and production-ready solutions.
                    </p>

                    <div className="hero-tags">
                        {['React', 'Django', 'Node.js', 'PostgreSQL', 'Vercel'].map(tag => (
                            <span key={tag} className="skill-tag">{tag}</span>
                        ))}
                    </div>

                    <div className="hero-ctas">
                        <a href="#projects" className="btn-primary">
                            View My Projects
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="/resume.pdf" download className="btn-secondary">
                            Download CV
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* RIGHT: Photo */}
                <div className="hero-photo-wrap">
                    <div className="hero-photo-glow"></div>
                    <div className="hero-photo-border">
                        <div className="hero-photo-frame">
                            <img
                                src={profileImg}
                                alt="Sheik Mohammed - Fresher Full Stack Developer"
                                className="hero-photo"
                                onError={e => { e.target.style.display = 'none'; }}
                            />
                            <div className="hero-photo-overlay"></div>
                        </div>
                    </div>
                    {/* Floating badge */}
                    <div className="hero-badge-float animate-float">
                        <span className="badge-float-num">3+</span>
                        <span className="badge-float-label">Live Projects</span>
                    </div>
                    {/* Tech badge */}
                    <div className="hero-badge-float-2 animate-float" style={{ animationDelay: '1s' }}>
                        <span className="badge-float-num">Full</span>
                        <span className="badge-float-label">Stack Dev</span>
                    </div>
                </div>

            </div>

            {/* Scroll hint */}
            <div className="scroll-hint">
                <div className="scroll-dot"></div>
            </div>
        </section>
    );
};

export default Hero;
