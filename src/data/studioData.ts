export interface Game {
  id: string;
  title: string;
  genre: string;
  status: 'released' | 'in-development' | 'upcoming';
  statusText: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  platforms: ('Steam' | 'Nintendo Switch' | 'Epic Games' | 'itch.io' | 'PlayStation' | 'Xbox' | 'PC')[];
  coverImage: string;
  screenshots: string[];
  wishlistUrl?: string;
  playUrl?: string;
  trailerUrl?: string; // YouTube embed ID (opcional)
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  isMascot?: boolean;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  foundedYear: number;
  email: string;
  location: string;
}

export const STUDIO_INFO: StudioInfo = {
  name: 'Sauroide Studio',
  tagline: 'Videojuegos independientes con garras, gafas y corbata desde El Salvador',
  description: 'Somos un estudio independiente apasionado por crear mundos memorables, mecánicas divertidas y aventuras únicas.',
  detailedDescription: 'Fundado con la idea de romper los moldes del desarrollo tradicional (¡Como un dinosaurio saliendo del cascarón!), en Sauroide Studio nos enfocamos en el gameplay pulido, el arte con personalidad y la narrativa envolvente. Creemos en juegos hechos por desarrolladores apasionados para jugadores exigentes desde El Salvador.',
  foundedYear: 2026,
  email: 'contacto@sauroidestudio.com',
  location: 'El Salvador / Remoto'
};

export const SOCIAL_LINKS = [
  { platform: 'Twitter', url: 'https://twitter.com/SauroideStudio', icon: 'Twitter' },
  //{ platform: 'Discord', url: 'https://discord.gg/SauroideStudio', icon: 'MessageSquare' },
  //{ platform: 'YouTube', url: 'https://youtube.com/c/SauroideStudio', icon: 'Youtube' },
  //{ platform: 'Steam', url: 'https://store.steampowered.com/publisher/SauroideStudio', icon: 'Gamepad' },
  { platform: 'GitHub', url: 'https://github.com/SauroideStudio', icon: 'Github' }
];

export const GAMES: Game[] = [
  {
    id: 'saurian-protocol',
    title: 'Saurian Protocol',
    genre: 'Acción / RPG Táctico / Cyberpunk',
    status: 'in-development',
    statusText: 'En Desarrollo',
    shortDescription: 'Controla a un escuadrón de dinosaurios cibernéticos modificados en un mundo post-apocalíptico controlado por una IA rebelde.',
    fullDescription: 'En Saurian Protocol, combinas tácticas de sigilo con combate explosivo de acción en tiempo real. Hackea sistemas enemigos, personaliza las garras cibernéticas, blindajes y lentes tácticos de tus velociraptores y lidera la rebelión reptiliana. Cada decisión en el campo de batalla tiene consecuencias permanentes para tu manada.',
    features: [
      'Combate táctico híbrido en tiempo real con pausa activa.',
      'Árbol de habilidades cibernéticas con más de 50 mejoras de combate.',
      'Narrativa ramificada con finales múltiples según tu estilo de liderazgo.',
      'Estética cyberpunk fusionada con paisajes prehistóricos cubiertos de luces de neón.'
    ],
    platforms: ['Steam', 'PC'],
    coverImage: '/images/games/saurian-protocol-cover.jpg',
    screenshots: [
      '/images/games/saurian-protocol-ss1.jpg',
      '/images/games/saurian-protocol-ss2.jpg',
      '/images/games/saurian-protocol-ss3.jpg'
    ],
    wishlistUrl: 'https://store.steampowered.com/app/saurian-protocol',
    trailerUrl: 'dQw4w9WgXcQ' // Ejemplo de embed
  },
  {
    id: 'amber-escape',
    title: 'Amber Escape',
    genre: 'Aventura / Puzles Atmosférico',
    status: 'released',
    statusText: 'Ya Disponible',
    shortDescription: 'Guía a una pequeña criatura luminiscente atrapada en los laberintos de resina fosilizada de una cueva ancestral.',
    fullDescription: 'Amber Escape es una experiencia audiovisual minimalista y contemplativa. Utiliza mecánicas basadas en la física de fluidos, la luz y la gravedad para escapar de la resina viscosa y evitar los peligros de las profundidades geológicas. Desbloquea secretos antiguos grabados en fósiles mientras buscas el camino hacia la superficie.',
    features: [
      'Mecánicas innovadoras basadas en la refracción y absorción de la luz.',
      'Banda sonora ambiental adaptativa e inmersiva.',
      'Más de 60 niveles con puzles de dificultad progresiva.',
      'Arte minimalista en 2D que destaca la belleza y el aislamiento de las profundidades.'
    ],
    platforms: ['Steam', 'Nintendo Switch', 'itch.io'],
    coverImage: '/images/games/amber-escape-cover.jpg',
    screenshots: [
      '/images/games/amber-escape-ss1.jpg',
      '/images/games/amber-escape-ss2.jpg',
      '/images/games/amber-escape-ss3.jpg'
    ],
    playUrl: 'https://sauroidestudio.itch.io/amber-escape',
    wishlistUrl: 'https://store.steampowered.com/app/amber-escape'
  },
  {
    id: 'retro-raptor-turbo',
    title: 'Retro-Raptor Turbo',
    genre: 'Arcade / Shoot \'em up / Pixel-Art',
    status: 'upcoming',
    statusText: 'Próximamente',
    shortDescription: 'Vuela a través de hordas alienígenas espaciales a bordo de una nave raptor a reacción en este vertiginoso shooter pixel-art.',
    fullDescription: 'Vuelve la acción de la vieja escuela. Retro-Raptor Turbo combina la adrenalina de las salas de arcade de los 90 con controles modernos súper responsivos. Destruye oleadas de naves insectoides espaciales, devora power-ups prehistóricos como el "Meteor Shower" y enfréntate a jefes de pantalla gigantescos al ritmo de la música chiptune y synthwave.',
    features: [
      'Acción bullet-hell frenética a 60 FPS constantes.',
      'Modo cooperativo local para 2 jugadores en pantalla compartida.',
      'Estilo visual retro pixel-art con paletas de colores vibrantes de 16-bits.',
      'Marcadores globales integrados para competir por la puntuación más alta.'
    ],
    platforms: ['Steam', 'Nintendo Switch', 'PC'],
    coverImage: '/images/games/retro-raptor-cover.jpg',
    screenshots: [
      '/images/games/retro-raptor-ss1.jpg',
      '/images/games/retro-raptor-ss2.jpg',
      '/images/games/retro-raptor-ss3.jpg'
    ],
    wishlistUrl: 'https://store.steampowered.com/app/retro-raptor-turbo'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'sauroide-mascot',
    name: 'Sauroide',
    role: 'Chief Executive Reptile (CER)',
    avatar: '/images/team/sauroide-mascot.png',
    bio: 'El cerebro estratégico del estudio. Encontrado en un fósil tecnológico, viste corbata de diseñador y anteojos intelectuales. Su rol principal es asegurarse de que el café esté caliente, programar bugs aleatorios y posar con actitud en el branding corporativo.',
    isMascot: true
  },
  {
    id: 'christian-hernandez',
    name: 'Christian Hernandez',
    role: 'Fundador y Programador Principal',
    avatar: '/images/team/sofia.jpg',
    bio: 'Apasionado de la programación y el desarrollo de motores de física. Se asegura de que cada frame sea óptimo y de que los dinosaurios cibernéticos salten con la fluidez que los jugadores merecen.',
    socials: {
      twitter: 'https://x.com/christianEdSV',
      github: 'https://github.com/christianEdsv',
      linkedin: 'https://www.linkedin.com/in/christian-hernandez-531bb494/'
    }
  }
];
