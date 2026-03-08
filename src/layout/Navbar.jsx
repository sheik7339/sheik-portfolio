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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    // Close menu first, then scroll to section after animation finishes
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        // Wait for menu close animation (300ms) before scrolling
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 350);
    };

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav
            className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}
            style={{ position: 'relative', zIndex: 50 }}
        >
            <div className="container-px w-full">
                <div
                    className="navbar-inner flex justify-between items-center w-full"
                    style={{ position: 'relative', zIndex: 60 }}
                >
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="nav-logo flex items-center"
                        style={{ position: 'relative', zIndex: 60 }}
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
                                <a
                                    href={`#${id}`}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, id)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4" style={{ position: 'relative', zIndex: 60 }}>
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

                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 ml-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            aria-label="Toggle Mobile Menu"
                            style={{ position: 'relative', zIndex: 60 }}
                        >
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay — full screen, outside navbar-inner */}
            <div
                className="md:hidden"
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'var(--bg-base)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    zIndex: 55,
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
                        className="text-3xl font-bold text-[var(--text-title)] transition-transform hover:scale-105"
                        onClick={(e) => handleNavClick(e, id)}
                    >
                        {label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn-primary mt-2"
                    onClick={(e) => handleNavClick(e, 'contact')}
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
