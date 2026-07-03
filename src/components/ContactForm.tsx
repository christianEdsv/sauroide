import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import './ContactForm.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Form submission statuses: 'idle' | 'submitting' | 'success' | 'error'
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('submitting');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 
        'form-name': 'contact', 
        ...formData 
      })
    })
      .then(response => {
        if (response.ok) {
          setContactStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setContactStatus('error');
        }
      })
      .catch(() => {
        setContactStatus('error');
      });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('submitting');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 
        'form-name': 'newsletter', 
        'email': newsletterEmail 
      })
    })
      .then(response => {
        if (response.ok) {
          setNewsletterStatus('success');
          setNewsletterEmail('');
        } else {
          setNewsletterStatus('error');
        }
      })
      .catch(() => {
        setNewsletterStatus('error');
      });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container">
        
        {/* Wildboy Numbered Divider */}
        <div className="numbered-divider">
          <div className="numbered-number">003</div>
          <div className="numbered-title-wrapper">
            <h2 className="numbered-title" style={{ color: 'var(--color-text-light)' }}>Contacto</h2>
            <div className="numbered-line"></div>
          </div>
        </div>

        <div className="contact-layout">
          
          {/* Main Contact Form Card */}
          <div className="contact-card">
            {contactStatus === 'success' ? (
              <div className="form-status">
                <CheckCircle2 size={56} className="form-status-icon" />
                <h3 className="form-status-title">¡Mensaje Enviado!</h3>
                <p className="form-status-desc">
                  Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y te responderemos en breve.
                </p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setContactStatus('idle')}
                  style={{ marginTop: '1rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : contactStatus === 'error' ? (
              <div className="form-status">
                <AlertCircle size={56} className="form-status-icon error" />
                <h3 className="form-status-title">Error al enviar</h3>
                <p className="form-status-desc">
                  Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo o contáctanos por email directo.
                </p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setContactStatus('idle')}
                  style={{ marginTop: '1rem' }}
                >
                  Intentar de nuevo
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleContactSubmit}
              >
                {/* Hidden input for Netlify forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                <h3 className="contact-form-title">
                  <Send size={22} style={{ color: 'var(--color-secondary)' }} />
                  Envíanos un mensaje
                </h3>

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Nombre</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    className="form-control" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={contactStatus === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    className="form-control" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={contactStatus === 'submitting'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Asunto</label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    name="subject" 
                    className="form-control" 
                    required 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={contactStatus === 'submitting'}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label htmlFor="contact-message" className="form-label">Mensaje</label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    className="form-control" 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={contactStatus === 'submitting'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={contactStatus === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {contactStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Right Info and Newsletter Column */}
          <div className="contact-info-column">
            
            {/* Direct Studio Contact Info */}
            <div className="info-card">
              <h3 className="info-card-title">Información del Estudio</h3>
              
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div className="info-text">
                  <h4>Email de contacto</h4>
                  <p><a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a></p>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div className="info-text">
                  <h4>Ubicación</h4>
                  <p>{STUDIO_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="info-card newsletter-card">
              <h3 className="info-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={20} style={{ color: 'var(--color-secondary)' }} />
                Únete a la manada
              </h3>
              <p>Suscríbete a nuestro boletín para recibir noticias exclusivas de nuestros juegos y fases de playtesting.</p>
              
              {newsletterStatus === 'success' ? (
                <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>
                  <CheckCircle2 size={18} /> ¡Suscripción completada con éxito!
                </div>
              ) : newsletterStatus === 'error' ? (
                <div style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <AlertCircle size={18} /> Hubo un error. Inténtalo de nuevo.
                </div>
              ) : (
                <form 
                  name="newsletter" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleNewsletterSubmit}
                  className="newsletter-form"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Tu correo electrónico" 
                    className="form-control" 
                    required 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    disabled={newsletterStatus === 'submitting'}
                    aria-label="Correo electrónico para boletín"
                  />
                  <button 
                    type="submit" 
                    className="btn btn-secondary"
                    disabled={newsletterStatus === 'submitting'}
                  >
                    {newsletterStatus === 'submitting' ? '...' : 'Unirme'}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
