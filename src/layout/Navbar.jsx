import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    // Close menu → wait for animation → smooth scroll to section
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 320);
    };

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        /* CSS gives .navbar { position: fixed; z-index: 100 } */
        <nav className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-px w-full">
                {/* navbar-inner sits at z-index: 101 so it's always above the overlay */}
                <div
                    className="navbar-inner flex justify-between items-center w-full"
                    style={{ position: 'relative', zIndex: 101 }}
                >
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="nav-logo flex items-center"
                        onClick={(e) => handleNavClick(e, 'hero')}
                    >
                        <img
                            src={logoImg}
                            alt="Sheik Mohammed Logo"
                            style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <ul className="nav-links hidden md:flex gap-6 items-center">
                        {navLinks.map(({ label, id }) => (
                            <li key={id}>
                                <a href={`#${id}`} className="nav-link" onClick={(e) => handleNavClick(e, id)}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Actions: theme toggle + Hire Me + hamburger */}
                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>

                        <a
                            href="#contact"
                            className="nav-cta hidden sm:inline-flex"
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Hire Me
                        </a>

                        {/* Hamburger — always visible on mobile, above overlay */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 ml-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            aria-label="Toggle Mobile Menu"
                        >
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/*
              Mobile Menu Full-Screen Overlay
              z-index: 100  = same as .navbar CSS → sits below navbar-inner (101)
              so the logo + hamburger (X) are ALWAYS visible at top-right
            */}
            <div
                className="md:hidden"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'var(--bg-base)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    opacity: mobileMenuOpen ? 1 : 0,
                    visibility: mobileMenuOpen ? 'visible' : 'hidden',
                    pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                }}
            >
                {navLinks.map(({ label, id }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)', textDecoration: 'none', transition: 'transform 0.2s, color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        onClick={(e) => handleNavClick(e, id)}
                    >
                        {label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn-primary"
                    style={{ marginTop: '0.5rem' }}
                    onClick={(e) => handleNavClick(e, 'contact')}
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
