import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-px w-full">
                <div className="navbar-inner flex justify-between items-center w-full">

                    {/* Logo */}
                    <a href="#hero" className="nav-logo flex items-center">
                        <img
                            src={logoImg}
                            alt="Sheik Mohammed Logo"
                            style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
                        />
                    </a>

                    {/* Nav Links */}
                    <ul className="nav-links hidden md:flex gap-6 items-center">
                        <li><a href="#hero" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                        <a href="#contact" className="nav-cta hidden sm:inline-flex">Hire Me</a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
