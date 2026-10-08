export interface Game {
  title: string;
  headline: string;
  genre: string;
  blurb: string;
  points: string[];
  tech: string[];
  repo: string;
  play?: string;
  /** Screenshot in /public, shown in a tilted phone frame on the poster. */
  shot?: string;
  /** Poster gradient. */
  from: string;
  to: string;
}

export const games: Game[] = [
  {
    title: 'Werewolf',
    headline: 'Werewolf: Social Deduction vs. Bots',
    genre: 'Social deduction',
    blurb: 'A single-player, Wolvesville-style game where every other seat is a bot with its own suspicions.',
    points: [
      'Built a rules engine in pure Dart: night actions resolve in order (jail, executions, investigations, attacks) with protection layers like bodyguard, doctor and tough-guy armor.',
      'Bots chat, accuse and vote based on a running suspicion model, so each round plays differently.',
      'Shipped menus, shop, avatars and profile in a Flame-powered village scene, playable in the browser at phone width.',
      'Set up CI to test every push and deploy master to Vercel.',
    ],
    tech: ['Flutter', 'Flame', 'Dart', 'Vercel'],
    repo: 'https://github.com/Stephen-SMH/Werewolf',
    play: 'https://werewolf-game-gules.vercel.app',
    shot: 'werewolf.png',
    from: '#4f46e5',
    to: '#7c3aed',
  },
  {
    title: 'The Knock',
    headline: 'The Knock: Five Nights, One Door',
    genre: 'Narrative survival',
    blurb: 'A door-answering survival game made for Digit7 Jam 2026. Decide who to let in, and live with it.',
    points: [
      'Designed five nights of dinner, dusk and a knock. Each visitor brings one real decision with lasting consequences.',
      'Built a 3D version (Three.js) and a 2D version (Phaser) that share one game core: the same nights, visitors and choices.',
      'Made the music react to danger, crossfading to a tenser bed as the knock approaches.',
      'Rendered the 3D scene at a deliberately low resolution for a chunky pixel look.',
    ],
    tech: ['TypeScript', 'Three.js', 'Phaser', 'Vite'],
    repo: 'https://github.com/Stephen-SMH/the-knock',
    from: '#0f766e',
    to: '#1d4ed8',
  },
  {
    title: 'Uno Game',
    headline: 'Find the Card the Program Chose',
    genre: 'Card game',
    blurb: 'A first-year term project at KMITL: a small GUI game where you pick the card the program secretly chose.',
    points: [
      'Built the GUI in Python with a start menu, 10-card or 20-card games and a background color picker.',
      'Added a single-player mode against an AI and a multiplayer mode for taking turns with friends.',
      'Wrote up the design in a project report for the Computer Programming course.',
    ],
    tech: ['Python'],
    repo: 'https://github.com/Stephen-SMH/Uno_Game_Python',
    from: '#be123c',
    to: '#c2410c',
  },
  {
    title: 'T-rex',
    headline: 'T-rex: A Game in Assembly',
    genre: 'Arcade',
    blurb: 'A T-rex game written in assembly for the Computer Organization and Architecture course at KMITL.',
    points: [
      'Wrote the whole game at the assembly level for a Year 2 course project.',
      'Recorded a demo of the finished game in the repo.',
    ],
    tech: ['Assembly', 'C'],
    repo: 'https://github.com/Stephen-SMH/T-rex',
    from: '#a16207',
    to: '#15803d',
  },
];
