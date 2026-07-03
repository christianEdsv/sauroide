import React, { useState } from 'react';
import { Twitter, Github, Linkedin, Globe, Crown, User } from 'lucide-react';
import { TEAM, TeamMember } from '../data/studioData';
import './TeamSection.css';

interface RPGStat {
  label: string;
  value: number;
}

export const TeamSection: React.FC = () => {
  const [selectedMemberId, setSelectedMemberId] = useState<string>(TEAM[0].id);
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  const handleImageError = (memberId: string) => {
    setFailedAvatars(prev => ({
      ...prev,
      [memberId]: true
    }));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const selectedMember = TEAM.find(m => m.id === selectedMemberId) || TEAM[0];

  // Custom RPG stats configuration for each member
  const getMemberStats = (memberId: string): { stats: RPGStat[]; funStat: { label: string; value: string } } => {
    switch (memberId) {
      case 'sauroide-mascot':
        return {
          stats: [
            { label: 'Café', value: 90 },
            { label: 'Código', value: 15 },
            { label: 'Carisma', value: 100 },
            { label: 'Bugs Creados', value: 80 }
          ],
          funStat: {
            label: 'Cafés Enfriados',
            value: '1,240 Tazas'
          }
        };
      case 'sofia-ramos':
        return {
          stats: [
            { label: 'Café', value: 85 },
            { label: 'Código', value: 98 },
            { label: 'Carisma', value: 75 },
            { label: 'Bugs Creados', value: 20 }
          ],
          funStat: {
            label: 'Líneas Borradas',
            value: '12,500+'
          }
        };
      case 'alejandro-vega':
        return {
          stats: [
            { label: 'Café', value: 60 },
            { label: 'Código', value: 40 },
            { label: 'Carisma', value: 85 },
            { label: 'Bugs Creados', value: 45 }
          ],
          funStat: {
            label: 'Sprites Animados',
            value: '4,500+'
          }
        };
      default:
        return {
          stats: [
            { label: 'Café', value: 50 },
            { label: 'Código', value: 50 },
            { label: 'Carisma', value: 50 },
            { label: 'Bugs Creados', value: 50 }
          ],
          funStat: {
            label: 'Horas Trabajadas',
            value: '999+'
          }
        };
    }
  };

  const { stats, funStat } = getMemberStats(selectedMember.id);
  const isMascot = selectedMember.isMascot;
  const hasFailed = failedAvatars[selectedMember.id];

  return (
    <section id="nosotros" className="section-padding" style={{ borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)', backgroundColor: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        
        {/* Wildboy Numbered Divider */}
        <div className="numbered-divider">
          <div className="numbered-number">002</div>
          <div className="numbered-title-wrapper">
            <h2 className="numbered-title" style={{ color: 'var(--color-text-light)' }}>Sobre el Equipo</h2>
            <div className="numbered-line"></div>
          </div>
        </div>

        <div className="team-layout">
          
          {/* Left Column: Member Select Index */}
          <div className="team-selector">
            {TEAM.map((member: TeamMember) => (
              <button
                key={member.id}
                className={`team-selector-btn ${selectedMemberId === member.id ? 'active' : ''}`}
                onClick={() => setSelectedMemberId(member.id)}
              >
                <span>{member.name}</span>
                <span className="team-selector-role">
                  {member.isMascot ? 'CEO / Mascota' : member.role.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic RPG Stats Card */}
          <div className={`team-rpg-card ${isMascot ? 'mascot' : ''}`}>
            
            {/* Avatar block */}
            <div className="team-rpg-avatar-col">
              <div className="team-rpg-avatar-wrapper">
                {!hasFailed ? (
                  <img 
                    src={selectedMember.avatar} 
                    alt={`Avatar de ${selectedMember.name}`} 
                    className="team-rpg-avatar"
                    onError={() => handleImageError(selectedMember.id)}
                  />
                ) : (
                  <div className="team-rpg-avatar-fallback">
                    {isMascot ? <Crown size={36} /> : <User size={36} />}
                    {!isMascot && <span style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '6px' }}>{getInitials(selectedMember.name)}</span>}
                  </div>
                )}
              </div>
              {isMascot && (
                <div className="team-rpg-mascot-badge">CEO Honorario</div>
              )}
            </div>

            {/* Detailed Stats and Info */}
            <div className="team-rpg-info-col">
              <div className="team-rpg-header">
                <h3 className="team-rpg-name">{selectedMember.name}</h3>
                <span className="team-rpg-role">{selectedMember.role}</span>
              </div>

              <p className="team-rpg-bio">{selectedMember.bio}</p>

              {/* RPG Stats Grid */}
              <div className="team-rpg-stats">
                {stats.map((stat, idx) => (
                  <div key={idx} className="team-stat-row">
                    <span className="team-stat-label">{stat.label}</span>
                    <div className="team-stat-bar-container">
                      <div className="team-stat-bar" style={{ width: `${stat.value}%` }}></div>
                    </div>
                    <span className="team-stat-value">{stat.value}%</span>
                  </div>
                ))}
              </div>

              {/* Wildboy Custom Counter */}
              <div className="team-rpg-fun-stat">
                <span className="team-fun-label">{funStat.label}:</span>
                <span className="team-fun-value">{funStat.value}</span>
              </div>

              {/* Social Media Links */}
              {selectedMember.socials && (
                <div className="team-rpg-socials">
                  {selectedMember.socials.twitter && (
                    <a 
                      href={selectedMember.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-btn"
                      aria-label={`Twitter de ${selectedMember.name}`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {selectedMember.socials.github && (
                    <a 
                      href={selectedMember.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-btn"
                      aria-label={`GitHub de ${selectedMember.name}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {selectedMember.socials.linkedin && (
                    <a 
                      href={selectedMember.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-btn"
                      aria-label={`LinkedIn de ${selectedMember.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {selectedMember.socials.portfolio && (
                    <a 
                      href={selectedMember.socials.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-social-btn"
                      aria-label={`Portafolio de ${selectedMember.name}`}
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
