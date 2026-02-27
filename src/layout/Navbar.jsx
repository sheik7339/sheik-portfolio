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
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-px w-full">
                <div className="navbar-inner flex justify-between items-center w-full">

                    {/* Logo */}
                    <a href="#hero" className="nav-logo flex items-center relative z-50" onClick={closeMobileMenu}>
                        <img
                            src={logoImg}
                            alt="Sheik Mohammed Logo"
                            style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
                        />
                    </a>

                    {/* Desktop Nav Links */}
                    <ul className="nav-links hidden md:flex gap-6 items-center">
                        <li><a href="#hero" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4 relative z-50">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <a href="#contact" className="nav-cta hidden sm:inline-flex">Hire Me</a>

                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 ml-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Mobile Menu"
                        >
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[var(--text-title)] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 bg-[var(--bg-base)]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                        <a href="#hero" className="text-3xl font-bold text-[var(--text-title)] transition-transform hover:scale-105" onClick={closeMobileMenu}>Home</a>
                        <a href="#about" className="text-3xl font-bold text-[var(--text-title)] transition-transform hover:scale-105" onClick={closeMobileMenu}>About</a>
                        <a href="#projects" className="text-3xl font-bold text-[var(--text-title)] transition-transform hover:scale-105" onClick={closeMobileMenu}>Projects</a>
                        <a href="#contact" className="text-3xl font-bold text-[var(--text-title)] transition-transform hover:scale-105" onClick={closeMobileMenu}>Contact</a>
                        <a href="#contact" className="btn-primary mt-4" onClick={closeMobileMenu}>Hire Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
