export interface Game {
  title: string;
  headline: string;
  genre: string;
  blurb: string;
  points: string[];
  tech: string[];
  /** Public repository. Leave out while the repo is private, so visitors never hit a 404. */
  repo?: string;
  play?: string;
  /** Set while the game is in development: how far along it is. These games get their own home-page section. */
  dev?: string;
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

  // ---------- In development ----------
  {
    title: 'Mafia Don',
    headline: 'Mafia Don: Run the Family from the Chair',
    genre: 'Turn-based strategy',
    blurb: "A turn-based strategy game played from the Don's chair on a map of New York in 1946. Five invented crime families compete like football clubs, each with colours, a crest, past Dons and titles.",
    points: [
      'Generated a paper map of 42 New York districts as Voronoi cells clipped to the coast, with bridges and tunnels that open in their real years.',
      'Simulated the city a month at a time: moves, hits, fights for districts, police raids, money and loyalty, explained afterwards by a newspaper and a private family report.',
      'Gave capos skills, ages and loyalty. Dons age and die, successors take over, and every family keeps a history of its titles and Dons.',
      'Tested it with 25-year simulations where the computer plays every family, plus 40 months clicked through the real screens.',
    ],
    tech: ['Godot 4', 'GDScript', 'Shaders'],
    dev: 'Version 1 is playable',
    cover: 'shots/mafia-don/01-map.jpg',
    from: '#166534',
    to: '#0a0f0d',
  },
  {
    title: 'Mafia',
    headline: 'Mafia: Chapter One, Made',
    genre: '3D story action',
    blurb: 'A 1940s crime story in 3D. You are Nico Vitale, back from the war with nothing, on one street in Little Italy. Chapter One takes you from nobody to a made man of the Benedetto family.',
    points: [
      'Built a walkable 1946 Mulberry Street in Godot 4 from CC0 low-poly models, dressing every character by recolouring the models in code.',
      'Wrote a cutscene player that runs camera shots, walking, dialogue, fades and title cards from a simple list of steps.',
      'Designed extortion as a hidden-information puzzle: each shopkeeper has a secret paying point, breaking point and weak spot, given away by their mood and first words.',
      'Added ranks and a crew that follows and fights with you, with a save at every story step and a test that plays Chapter One start to finish.',
    ],
    tech: ['Godot 4', 'GDScript', '3D'],
    dev: 'Chapter One is playable',
    cover: 'shots/mafia/01-lean.jpg',
    from: '#57534e',
    to: '#0c0a09',
  },
  {
    title: 'Tactics RPG',
    headline: 'Tactics RPG: Height, Facing and Jobs',
    genre: 'Tactical RPG',
    blurb: 'A grid-based tactical RPG on 3D block maps with height, a rotating isometric camera and pixel-sprite units. Where you stand, and which way you face, changes every fight.',
    points: [
      'Built 3D block maps with height in Godot 4, with a camera that rotates in 90° steps and 2D pixel-sprite units.',
      'Wrote speed-based turn order with facing, height and back-attack bonuses, all shown in a forecast before you confirm.',
      'Added four jobs with job points, learnable abilities, secondary commands, equipment and a shared party inventory.',
      'Wrote an enemy AI that scores every reachable tile combined with every action, with Easy, Normal and Hard settings.',
    ],
    tech: ['Godot 4', 'GDScript', '3D'],
    dev: 'Combat, jobs and enemy AI are playable',
    cover: 'shots/tactics-rpg/01-forecast.jpg',
    from: '#2563eb',
    to: '#1e1b4b',
  },
  {
    title: 'Farm Life',
    headline: 'Farm Life: Four Seasons, One Small Town',
    genre: 'Farming and life sim',
    blurb: 'A top-down pixel-art farming and life sim. Grow crops, ship your harvest and make friends with the people of a small town across four seasons.',
    points: [
      'Built the daily loop in Godot 4: till, plant and water; crops grow only on watered days, and the shipping bin pays out overnight.',
      'Added seasons, weather (rain waters your crops, storms can strike them), crop quality from fertilizer, and crops that die when their season ends.',
      'Gave four townspeople daily schedules that change with rain, weekdays and seasons, plus friendship, birthdays and gifts.',
      'Drew every tile, crop and character in code, with save slots that only write when you go to bed.',
    ],
    tech: ['Godot 4', 'GDScript', 'Pixel art'],
    dev: 'The farm, the town and its people are playable',
    cover: 'shots/farm-life/01-farm.jpg',
    from: '#65a30d',
    to: '#14532d',
  },
  {
    title: 'Lantern',
    headline: 'Lantern: Eight Floors, One Flame',
    genre: 'Roguelike',
    blurb: 'A turn-based roguelike for the desktop. Eight floors down, the Sunstone waits, and your lantern burns a little lower with every step.',
    points: [
      'Wrote all the rules in Rust behind Tauri commands. The React UI only ever receives the cells you can see or remember, so the map cannot leak.',
      'Generated every floor from a saved SplitMix64 seed, so a loaded run continues exactly as it would have, and a daily seed gives everyone the same dungeon.',
      'Made light the core mechanic: your light radius shrinks as the oil runs out, and wraiths only close in when it weakens.',
      'Covered the core with 13 unit tests, including floor connectivity across 200 seeds, and a bot that plays 200 seeds to check the balance.',
    ],
    tech: ['Rust', 'Tauri 2', 'React', 'TypeScript'],
    repo: 'https://github.com/Stephen-SMH/lantern',
    dev: 'Early build (0.1.0), source on GitHub',
    cover: 'shots/lantern/02-title.jpg',
    from: '#d97706',
    to: '#0b0b10',
  },
];

/** Shipped games, shown as full showcases on the home page. */
export const released = games.filter((g) => !g.dev);
/** Games in development, shown in their own section. */
export const inDev = games.filter((g) => g.dev);
