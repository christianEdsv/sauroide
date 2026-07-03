import React, { useEffect, useState, useRef } from 'react';
import { X, ExternalLink, Gamepad2, ShoppingCart } from 'lucide-react';
import { Game } from '../data/studioData';
import './GameDetailsPanel.css';

interface GameDetailsPanelProps {
  game: Game;
  onClose: () => void;
}

export const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({ game, onClose }) => {
  const [activeMedia, setActiveMedia] = useState<'trailer' | number>('trailer');
  const panelRef = useRef<HTMLDivElement>(null);

  // Set default media: show trailer if available, otherwise first screenshot
  useEffect(() => {
    if (game.trailerUrl) {
      setActiveMedia('trailer');
    } else {
      setActiveMedia(0);
    }

    // Scroll details panel into view on mobile
    if (panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [game]);

  return (
    <div className="game-details-panel" ref={panelRef}>
      <button 
        className="game-details-close-btn" 
        onClick={onClose}
        aria-label="Cerrar panel de detalles"
      >
        <X size={18} />
      </button>

      {/* Media Box */}
      <div className="game-details-media">
        {activeMedia === 'trailer' && game.trailerUrl ? (
          <div className="game-details-video-container">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${game.trailerUrl}?autoplay=1&mute=1&rel=0`}
              title={`${game.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={game.screenshots[typeof activeMedia === 'number' ? activeMedia : 0]}
            alt={`${game.title} screenshot`}
            className="game-details-hero-image"
          />
        )}
      </div>

      {/* Thumbnail Gallery */}
      <div className="game-details-thumbs">
        {game.trailerUrl && (
          <button
            className={`game-details-thumb ${activeMedia === 'trailer' ? 'active' : ''}`}
            onClick={() => setActiveMedia('trailer')}
            aria-label="Ver trailer"
          >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 'bold' }}>
              ▶ VIDEO
            </div>
          </button>
        )}
        {game.screenshots.map((ss, idx) => (
          <button
            key={idx}
            className={`game-details-thumb ${activeMedia === idx ? 'active' : ''}`}
            onClick={() => setActiveMedia(idx)}
            aria-label={`Ver captura de pantalla ${idx + 1}`}
          >
            <img src={ss} alt={`Miniatura captura ${idx + 1}`} />
          </button>
        ))}
      </div>

      {/* Main Info */}
      <div className="game-details-title-wrapper">
        <h2 className="game-details-title">{game.title}</h2>
        <span className="game-details-genre">{game.genre}</span>
      </div>

      <p className="game-details-desc">{game.fullDescription}</p>

      <h3 className="game-details-section-title">Características</h3>
      <ul className="game-details-features">
        {game.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {/* Sidebar Metadata */}
      <div className="game-details-meta">
        <div className="game-details-meta-row">
          <span className="game-details-meta-label">Estado</span>
          <span className="game-details-meta-val">{game.statusText}</span>
        </div>
        <div className="game-details-meta-row">
          <span className="game-details-meta-label">Plataformas</span>
          <span className="game-details-meta-val">{game.platforms.join(', ')}</span>
        </div>
        <div className="game-details-meta-row">
          <span className="game-details-meta-label">Estudio</span>
          <span className="game-details-meta-val">Sauroide Studio</span>
        </div>
      </div>

      {/* Purchase Action Buttons */}
      <div className="game-details-actions">
        {game.wishlistUrl && (
          <a
            href={game.wishlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ShoppingCart size={16} /> Wishlist en Steam
          </a>
        )}
        {game.playUrl && (
          <a
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Gamepad2 size={16} /> Jugar en itch.io <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
};
