import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Github, MessageSquare, Youtube, Gamepad, HelpCircle } from 'lucide-react';
import { STUDIO_INFO, SOCIAL_LINKS } from '../data/studioData';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return <Twitter size={22} />;
      case 'instagram':
        return <Instagram size={22} />;
      case 'youtube':
        return <Youtube size={22} />;
      case 'github':
        return <Github size={22} />;
      case 'discord':
        return <MessageSquare size={22} />;
      case 'youtube':
        return <Youtube size={22} />;
      case 'steam':
        return <Gamepad size={22} />;
      default:
        return <HelpCircle size={22} />;
    }
  };

  const getSocialActionText = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitter':
        return 'Seguir @SauroideStudio';
      case 'github':
        return 'Ver Repositorios';
      case 'discord':
        return 'Unirse al Servidor';
      case 'youtube':
        return 'Ver Canal Oficial';
      case 'steam':
        return 'Explorar Catálogo';
      default:
        return 'Visitar Perfil';
    }
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container">
        
        {/* Wildboy Numbered Divider */}
        <div className="numbered-divider">
          <div className="numbered-number">003</div>
          <div className="numbered-title-wrapper">
            <h2 className="numbered-title" style={{ color: 'var(--color-text-light)' }}>Contacto & Comunidad</h2>
            <div className="numbered-line"></div>
          </div>
        </div>

        <div className="contact-layout">
          
          {/* Left Column: Social Media Grid */}
          <div className="contact-card">
            <h3 className="contact-form-title">Únete a la Manada</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              ¡Forma parte de nuestra comunidad! Síguenos en nuestras plataformas para enterarte antes que nadie de lanzamientos, betas de juego, y colaborar en el desarrollo de código abierto.
            </p>
            
            <div className="social-grid">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-block-link"
                  aria-label={`Visitar nuestro ${link.platform}`}
                >
                  <div className="social-block-icon">
                    {getSocialIcon(link.platform)}
                  </div>
                  <div className="social-block-text">
                    <span className="social-block-name">{link.platform}</span>
                    <span className="social-block-action">{getSocialActionText(link.platform)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Contact Info */}
          <div className="contact-info-column">
            <div className="info-card">
              <h3 className="info-card-title">Contacto Directo</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                ¿Tienes alguna propuesta de negocio, prensa, o simplemente quieres enviarnos un saludo formal? Escríbenos directamente a nuestro correo.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a 
                  href={`mailto:${STUDIO_INFO.email}`} 
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Mail size={18} /> {STUDIO_INFO.email}
                </a>

                <div className="info-item">
                  <MapPin size={20} className="info-icon" />
                  <div className="info-text">
                    <h4>Ubicación</h4>
                    <p>{STUDIO_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
