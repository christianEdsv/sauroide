import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Game } from '../data/studioData';
import './GameCard.css';

interface GameCardProps {
  game: Game;
  onOpenDetails: (gameId: string) => void;
  isSelected?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onOpenDetails, isSelected = false }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenDetails(game.id);
    }
  };

  return (
    <div 
      className={`game-card status-${game.status} ${isSelected ? 'selected' : ''}`} 
      onClick={() => onOpenDetails(game.id)}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      role="button"
      aria-label={`Ver detalles del juego ${game.title}`}
    >
      <div className="game-card-image-wrapper">
        <div className={`game-card-status-badge ${game.status}`}>
          {game.statusText}
        </div>
        {!imageFailed ? (
          <img 
            src={game.coverImage} 
            alt={`Portada de ${game.title}`} 
            className="game-card-img"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-700" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <ImageIcon size={48} className="mb-2 text-muted" style={{ color: 'var(--color-primary)', opacity: 0.5 }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Imagen no disponible</span>
          </div>
        )}
      </div>

      <div className="game-card-content">
        <span className="game-card-genre">{game.genre}</span>
        <h3 className="game-card-title">{game.title}</h3>
        <p className="game-card-desc">{game.shortDescription}</p>
        
        <div className="game-card-footer">
          <div className="game-card-platforms">
            {game.platforms.map((platform) => (
              <span key={platform} className="game-card-platform-icon">
                {platform}
              </span>
            ))}
          </div>
          <button 
            className="game-card-more-btn"
            aria-hidden="true"
            tabIndex={-1}
          >
            Saber más <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
