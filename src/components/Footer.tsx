import React, { useState } from 'react';
import { Twitter, Github, Linkedin, Youtube, Instagram, MessageSquare, Heart, Gamepad2 } from 'lucide-react';
import { STUDIO_INFO, SOCIAL_LINKS } from '../data/studioData';
import './Footer.css';

export const Footer: React.FC = () => {
  const [logoFailed, setLogoFailed] = useState(false);

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <Twitter size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'discord':
        return <MessageSquare size={20} />;
      case 'steam':
        return <Gamepad2 size={20} />;
      default:
        return <Instagram size={20} />;
    }
  };

  const handleNavLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // scrolled navbar height
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Logo & Description */}
          <div className="footer-logo-section">
            <div className="footer-logo-title">
              {!logoFailed ? (
                <img 
                  src="/logo.png" 
                  alt="Sauroide Studio" 
                  style={{ height: '32px', width: 'auto', borderRadius: '4px' }} 
                  onError={() => setLogoFailed(true)}
                />
              ) : (
                <Gamepad2 size={24} style={{ color: 'var(--color-secondary)' }} />
              )}
              <span>SAUROIDE STUDIO</span>
            </div>
            <p className="footer-logo-desc">
              {STUDIO_INFO.description}
            </p>
          </div>

          {/* Links */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">Navegación</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavLinkClick('inicio'); }}>
                  Inicio
                </a>
              </li>
              {/*
              <li>
                <a href="#juegos" onClick={(e) => { e.preventDefault(); handleNavLinkClick('juegos'); }}>
                  Juegos
                </a>
              </li>
              */}
              <li>
                <a href="#nosotros" onClick={(e) => { e.preventDefault(); handleNavLinkClick('nosotros'); }}>
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavLinkClick('contacto'); }}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-socials-section">
            <h4 className="footer-links-title">Comunidad</h4>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={`Unirse a nuestro ${link.platform}`}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright info */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {STUDIO_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="footer-credit">
            Hecho con <Heart size={14} className="heart-icon" /> desde El Salvador.
          </p>
        </div>

      </div>
    </footer>
  );
};
