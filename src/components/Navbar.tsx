import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Sun, Moon } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    if (initialTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['inicio', 'juegos', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('inicio');
    setIsMobileMenuOpen(false);
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = isScrolled ? 70 : 90;
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          {!logoFailed ? (
            <img 
              src="/logo.png" 
              alt="Sauroide Studio Logo" 
              className="navbar-logo-img"
              onError={() => setLogoFailed(true)} 
            />
          ) : (
            <div className="navbar-logo-fallback">
              <Gamepad2 size={24} />
            </div>
          )}
          <span>SAUROIDE STUDIO</span>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a 
            href="#inicio" 
            className={`navbar-link ${activeSection === 'inicio' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('inicio'); }}
          >
            <span className="navbar-link-text">Inicio</span>
          </a>
          {/* 
          <a 
            href="#juegos" 
            className={`navbar-link ${activeSection === 'juegos' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('juegos'); }}
          >
            <span className="navbar-link-text">Juegos</span>
          </a>
          */}
          <a 
            href="#nosotros" 
            className={`navbar-link ${activeSection === 'nosotros' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('nosotros'); }}
          >
            <span className="navbar-link-text">Nosotros</span>
          </a>
          <a 
            href="#contacto" 
            className={`navbar-link ${activeSection === 'contacto' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('contacto'); }}
          >
            <span className="navbar-link-text">Contacto</span>
          </a>
          
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
