//Cuando los juegos estén listos, se puede reactivar la sección de juegos y el panel de detalles. Por ahora, se ha comentado para mantener la página limpia y enfocada en la filosofía y el equipo del estudio.
//useEffect
import { useState } from 'react';
import { Gamepad2, Play, Users, ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
//import { GameCard } from './components/GameCard';
//import { GameDetailsPanel } from './components/GameDetailsPanel';
import { TeamSection } from './components/TeamSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
//GAMES
import { STUDIO_INFO } from './data/studioData';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  //const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [heroLogoFailed, setHeroLogoFailed] = useState(false);

  {/* 
  // Hash-based deep routing (e.g., #game-saurian-protocol)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#game-')) {
        const gameId = hash.replace('#game-', '');
        const exists = GAMES.some(g => g.id === gameId);
        if (exists) {
          setActiveGameId(gameId);
        } else {
          setActiveGameId(null);
        }
      } else {
        setActiveGameId(null);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  
  const openGameDetails = (gameId: string) => {
    window.location.hash = `game-${gameId}`;
  };

  const closeGameDetails = () => {
    window.history.pushState('', document.title, window.location.pathname + window.location.search);
    setActiveGameId(null);
  };

  const activeGame = GAMES.find(g => g.id === activeGameId) || null;
  */}

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // offset scrolled navbar
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section (Drinkbox & Wildboy Style) */}
      <header id="inicio" className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow-effect"></div>
        
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <div className="hero-badge">
              <Gamepad2 size={16} /> Sauroide Indie Game Studio
            </div>
            <h1 className="hero-title">
              Diseño con <span className="text-gradient-orange" style={{ background: 'none', WebkitTextFillColor: 'unset', color: 'var(--color-secondary)' }}>Garras</span>,<br />
              Código con <span className="text-gradient-green" style={{ background: 'none', WebkitTextFillColor: 'unset', color: 'var(--color-hero-green)' }}>Estilo</span>.
            </h1>
            <p className="hero-tagline">
              {STUDIO_INFO.tagline}
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('juegos')}
              >
                <Play size={18} fill="#000" /> Ver Juegos
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => scrollToSection('contacto')}
              >
                Contacto <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-graphic fade-in">
            <div className="hero-logo-wrapper">
              <div className="hero-logo-ring"></div>
              {!heroLogoFailed ? (
                <img 
                  src="/logo_large.png" 
                  alt="Sauroide Mascot" 
                  className="hero-logo-img"
                  onError={() => setHeroLogoFailed(true)}
                />
              ) : (
                /* Fallback SVG representation of a neat retro dinosaur grid */
                <div className="hero-logo-img" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-surface)', border: '2px solid #000', borderRadius: '16px', width: '260px', height: '260px', boxShadow: 'var(--shadow-solid-sm)' }}>
                  <Gamepad2 size={82} style={{ color: 'var(--color-secondary)', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontFamily: 'var(--font-title)', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem', color: '#000' }}>SAUROIDE</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="sobre-nosotros" className="section-padding" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="fade-in">
              <span className="game-card-genre">Nuestra Filosofía</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>Rompiendo el Cascarón del Desarrollo Independiente</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {STUDIO_INFO.detailedDescription}
              </p>
              
              <div className="about-stats" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                  <span className="stat-number" style={{ textAlign: 'center' }}>1</span>
                  <span className="stat-label">Juego en Desarrollo</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" style={{ textAlign: 'center' }}>100%</span>
                  <span className="stat-label">Independiente</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number" style={{ textAlign: 'center' }}>{STUDIO_INFO.foundedYear}</span>
                  <span className="stat-label">Año de Fundación</span>
                </div>
              </div>
            </div>

            <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              {/* Fun Card spotlighting the Mascot */}
              <div style={{ backgroundColor: 'var(--color-surface)', border: 'var(--border-thick)', borderRadius: '16px', padding: '2rem', maxWidth: '380px', boxShadow: 'var(--shadow-solid)', textAlign: 'center', transform: 'rotate(-1.5deg)', color: 'var(--color-text-dark)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-brand-deep)', border: 'var(--border-thick)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '2px 2px 0px #000' }}>
                  <Users size={36} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#000000' }}>¿Por qué Sauroide?</h4>
                <p style={{ fontSize: '0.9rem', color: '#4a544e', lineHeight: '1.6' }}>
                  Nuestra mascota (el reptil con lentes y corbata) representa el balance perfecto: la tenacidad y fuerza del dinosaurio salvaje de la vieja escuela combinada con la sofisticación, estrategia e ingenio del desarrollo de código moderno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Games Section (Wildboy Sliding Layout)
      <section id="juegos" className="section-padding">
        <div className="container">

          <div className="numbered-divider">
            <div className="numbered-number">001</div>
            <div className="numbered-title-wrapper">
              <h2 className="numbered-title" style={{ color: 'var(--color-text-light)' }}>Nuestros Videojuegos</h2>
              <div className="numbered-line"></div>
            </div>
          </div>

          <div className={`games-grid-container ${activeGame ? 'panel-open' : ''}`}>
            <div className="games-list-subgrid">
              {GAMES.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onOpenDetails={openGameDetails} 
                  isSelected={activeGameId === game.id}
                />
              ))}
            </div>
            
            {activeGame && (
              <GameDetailsPanel 
                game={activeGame} 
                onClose={closeGameDetails} 
              />
            )}
          </div>
        </div>
      </section>
      */}

      {/* Team Section */}
      <TeamSection />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
