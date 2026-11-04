export interface Game {
  title: string;
  headline: string;
  genre: string;
  blurb: string;
  points: string[];
  tech: string[];
  repo: string;
  play?: string;
  /** Portrait phone screenshot in /public, shown in a tilted phone frame on the poster. */
  shot?: string;
  /** Landscape screenshot in /public, shown in a tilted window on the poster and full-bleed on the store capsule. */
  cover?: string;
  /** Poster gradient. */
  from: string;
  to: string;
}

export const games: Game[] = [
  {
    title: 'Medieval Conquest',
    headline: 'Medieval Conquest: Four Campaigns, One Crown',
    genre: 'Turn-based strategy',
    blurb: 'A turn-based medieval strategy game for the browser, desktop and Android. Lead England, France, the Crusaders or the Vikings across real maps, mission by mission.',
    points: [
      'Built the whole game in Godot 4: a map of regions, mixed armies of up to 20 soldiers, orders drawn as arrows and battles that play out on the map.',
      'Wrote an AI with three difficulty levels that gathers several armies against one target, forecasts each battle with simulated fights and follows up on what it wins.',
      'Turned open coastline data into seven historical maps with a Python pipeline, and generated four campaigns of 43 missions as data.',
      'Shipped Web, Windows, macOS, Linux and Android builds from one GitHub Actions pipeline, with 730 automated checks on every push.',
    ],
    tech: ['Godot 4', 'GDScript', 'Python', 'GitHub Actions'],
    repo: 'https://github.com/Stephen-SMH/medieval-conquest',
    play: 'https://stephen-smh.github.io/medieval-conquest/',
    cover: 'shots/medieval-conquest/01-orders.jpg',
    from: '#b4232a',
    to: '#5c3310',
  },
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
    genre: 'Narrative horror',
    blurb: 'A narrative horror game made solo for Digit7 Jam 2026. It has rained for forty days, and every night someone knocks. Work out who is really at the gate before you open it.',
    points: [
      'Designed a fair deduction puzzle: each night the TV bulletin teaches one place to look, most signs are shared between killers, and only the right combination gives one away.',
      'Built it in TypeScript and Phaser with a new household, new killers and new visitors every run, and 15 endings decided by who you let in, shot or turned away.',
      'Drew the pixel art and made the music, voices, rain and scares in code at runtime with Web Audio, plus a handful of CC0 sound files.',
      'Tested the hosted build in Chrome, Firefox and WebKit, including emulated iPhone and Android touch screens in landscape.',
    ],
    tech: ['TypeScript', 'Phaser', 'Web Audio', 'Vite'],
    repo: 'https://github.com/Stephen-SMH/the-knock',
    cover: 'shots/the-knock/01-gate.jpg',
    from: '#7f1d1d',
    to: '#0c0a09',
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
    cover: 'shots/uno-game/01-reveal.jpg',
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
    cover: 'shots/t-rex/01-jump.jpg',
    from: '#a16207',
    to: '#15803d',
  },
];
