export interface Game {
  title: string;
  genre: string;
  blurb: string;
  tech: string[];
  repo: string;
  play?: string;
  span: 4 | 6 | 8;
}

export const games: Game[] = [
  {
    title: 'Werewolf',
    genre: 'Social deduction',
    blurb:
      'Single-player Wolvesville-style game against bots. Full night and day phases, a dozen roles, shop, avatars and profile. Original name and art.',
    tech: ['Flutter', 'Flame', 'Dart'],
    repo: 'https://github.com/Stephen-SMH/Werewolf',
    play: 'https://werewolf-game-gules.vercel.app',
    span: 8,
  },
  {
    title: 'The Knock',
    genre: 'Narrative survival',
    blurb:
      'Five nights, one door. Decide who to let in. Built for Digit7 Jam 2026 in both 3D and 2D.',
    tech: ['TypeScript', 'Three.js', 'Phaser', 'Vite'],
    repo: 'https://github.com/Stephen-SMH/the-knock',
    span: 4,
  },
  {
    title: 'Uno',
    genre: 'Card game',
    blurb: 'First-year term project at KMITL: a small GUI Uno you can play against the computer.',
    tech: ['Python'],
    repo: 'https://github.com/Stephen-SMH/Uno_Game_Python',
    span: 6,
  },
  {
    title: 'T-rex',
    genre: 'Endless runner',
    blurb: 'A Chrome-dino-style runner written in assembly for a computer architecture course.',
    tech: ['Assembly', 'C'],
    repo: 'https://github.com/Stephen-SMH/T-rex',
    span: 6,
  },
];
