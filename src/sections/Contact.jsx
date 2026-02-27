import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/mohammedsheik285@gmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="section-dark">
            <div className="container-px">
                <div className="section-header">
                    <span className="section-kicker">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-desc">Open to internships, fresher roles, and freelance projects. Let's connect — I respond within 24 hours!</p>
                </div>

                <div className="contact-card">

                    {/* Left — Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--text-title)', fontWeight: 700, fontSize: '1.4rem', margin: '0 0 0.75rem' }}>
                                Let's build something real together.
                            </h3>
                            <p style={{ color: 'var(--text-desc)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                                I'm a <strong style={{ color: 'var(--text-muted)' }}>fresher full stack developer</strong> from
                                <strong style={{ color: 'var(--text-muted)' }}> Tiruppur, Tamil Nadu</strong>, actively looking for opportunities
                                where I can contribute, grow, and ship production-ready code from day one.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

                            <a href="mailto:mohammedsheik285@gmail.com" className="contact-link">
                                <div className="contact-link-icon">
                                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact-link-label">Email</span>
                                    <span className="contact-link-title">mohammedsheik285@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+917339273120" className="contact-link">
                                <div className="contact-link-icon">
                                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact-link-label">Phone / WhatsApp</span>
                                    <span className="contact-link-title">+91 7339 273 120</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/sheik-sheik/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="contact-link-icon">
                                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact-link-label">LinkedIn</span>
                                    <span className="contact-link-title">linkedin.com/in/sheik-sheik</span>
                                </div>
                            </a>

                            <a href="https://github.com/sheik7339" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <div className="contact-link-icon">
                                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact-link-label">GitHub</span>
                                    <span className="contact-link-title">github.com/sheik7339</span>
                                </div>
                            </a>

                            <a href="/resume.pdf" download className="contact-link">
                                <div className="contact-link-icon">
                                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact-link-label">CV</span>
                                    <span className="contact-link-title">Download PDF</span>
                                </div>
                            </a>

                        </div>

                        {/* Location Badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'var(--btn-secondary-bg)', border: '1px solid rgba(59,130,246,0.15)',
                            borderRadius: '9999px', padding: '0.4rem 1rem', width: 'fit-content',
                            color: '#60a5fa', fontSize: '0.8rem', fontWeight: 600
                        }}>
                            📍 Tiruppur, Tamil Nadu, India
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Honeypot & Config */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Portfolio Message from a Recruiter/Client!" />

                        <h4 style={{ color: 'var(--text-title)', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Send a Message</h4>
                        <div className="form-group">
                            <label className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-input" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input type="email" name="email" className="form-input" placeholder="john@company.com" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea name="message" className="form-textarea" placeholder="Tell me about the role or project..." required></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                            {status !== 'sending' && (
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            )}
                        </button>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(34,197,94,0.1)', color: '#4ade80', borderRadius: '0.5rem', fontSize: '0.85rem', textAlign: 'center', border: '1px solid rgba(34,197,94,0.2)' }}>
                                ✅ Message sent successfully! I will reply soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(239,68,68,0.1)', color: '#f87171', borderRadius: '0.5rem', fontSize: '0.85rem', textAlign: 'center', border: '1px solid rgba(239,68,68,0.2)' }}>
                                ❌ Oops! Something went wrong. Please email directly.
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
