// Store-page details per game. Facts come from each repo (README, pubspec/package.json, git history).
// Screenshots: drop PNG/JPG/WebP files into public/shots/<slug>/ and they appear in the gallery automatically.
export interface PatchNote { version: string; date: string; title: string; body: string }
export interface Store {
  slug: string;
  title: string; // must match games.ts title
  short: string;
  status: string;
  version?: string;
  released: string;
  updated: string;
  genres: string[];
  platforms: string[];
  players: string;
  languages: string;
  context: string;
  requirements: { label: string; min: string[]; rec?: string[] };
  patchNotes: PatchNote[];
}

export const store: Store[] = [
  {
    slug: 'werewolf',
    title: 'Werewolf',
    short: 'Single-player Wolvesville-style social deduction. Every other seat is a bot with its own suspicions. Or play online with friends in a room.',
    status: 'Playable online',
    version: '1.0.0',
    released: 'Oct 8, 2026',
    updated: 'Oct 8, 2026',
    genres: ['Social deduction', 'Strategy', 'Multiplayer', 'Bots'],
    platforms: ['Web (phone-width)', 'Android (build)', 'iOS (build)'],
    players: '4 to 16 players · solo vs bots or online rooms',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Browser',
      min: ['Any modern browser (Chrome, Safari, Edge, Firefox)', 'Phone-width layout; works on desktop in a framed view', 'Internet only for online rooms'],
      rec: ['Latest Chrome or Safari', 'A phone or a narrow window for the intended layout'],
    },
    patchNotes: [
      { version: '1.0.0', date: 'Oct 8, 2026', title: 'Online multiplayer', body: 'Rooms, an authoritative WebSocket server, and shared engine and protocol packages. Bots can fill empty seats.' },
      { version: '1.0.0-rc', date: 'Oct 8, 2026', title: 'Vector avatars', body: 'Avatars are drawn as vectors so they render correctly on web with no emoji glyphs.' },
      { version: '0.9', date: 'Oct 8, 2026', title: 'Web build and CI/CD', body: 'Phone-width frame and web metadata. Tests run on every push; master deploys to Vercel.' },
      { version: '0.8', date: 'Oct 8, 2026', title: 'Full game flow', body: 'Wolvesville-style UI with menus, avatars, a shop and a profile.' },
      { version: '0.1', date: 'Oct 7, 2026', title: 'Prototype', body: 'Flutter + Flame scaffold with the rules engine and a village scene.' },
    ],
  },
  {
    slug: 'the-knock',
    title: 'The Knock',
    short: 'A door-answering survival game made for Digit7 Jam 2026. Five nights of dinner, dusk and a knock. Decide who to let in, and live with it.',
    status: 'Game jam build',
    version: '0.1.0',
    released: 'Sep 24, 2026',
    updated: 'Sep 24, 2026',
    genres: ['Narrative', 'Survival', 'Choices matter', 'Game jam'],
    platforms: ['Web (2D Phaser)', 'Web (3D Three.js)'],
    players: 'Single player',
    languages: 'English',
    context: 'Digit7 Jam 2026',
    requirements: {
      label: 'Browser',
      min: ['Any modern browser', 'WebGL for the 3D version', 'Keyboard (WASD or arrows) or mouse'],
      rec: ['A dedicated or integrated GPU for the 3D version', 'Headphones: the music reacts to danger'],
    },
    patchNotes: [
      { version: '0.1.0', date: 'Sep 24, 2026', title: 'Jam submission', body: 'Five nights, shared game core, a 3D Three.js version and a 2D Phaser version, and a store-style start page.' },
    ],
  },
  {
    slug: 'uno-game',
    title: 'Uno Game',
    short: 'A first-year term project at KMITL: a small Python GUI game where you pick the card the program secretly chose.',
    status: 'Course project',
    released: 'Nov 12, 2022',
    updated: 'Nov 23, 2023',
    genres: ['Card', 'Puzzle', 'Course project'],
    platforms: ['Desktop (Python)'],
    players: '1 player vs AI · or turns with friends',
    languages: 'English',
    context: 'KMITL · Computer Programming',
    requirements: {
      label: 'Python',
      min: ['Python 3', 'A desktop with a display', 'Source on GitHub; run it from the project folder'],
    },
    patchNotes: [
      { version: 'docs', date: 'Nov 23, 2023', title: 'Repository tidy-up', body: 'Added a gitignore, removed unnecessary files and updated the README.' },
      { version: '1.0', date: 'Dec 17, 2022', title: 'Project report', body: 'Submitted with a design write-up for the Computer Programming course.' },
      { version: '0.1', date: 'Nov 12, 2022', title: 'First commit', body: 'Start menu, 10-card and 20-card games, background color picker.' },
    ],
  },
  {
    slug: 't-rex',
    title: 'T-rex',
    short: 'A T-rex runner written entirely in assembly for the Computer Organization and Architecture course at KMITL.',
    status: 'Course project',
    released: 'Nov 23, 2023',
    updated: 'Nov 23, 2023',
    genres: ['Arcade', 'Runner', 'Assembly'],
    platforms: ['Desktop (assembly)'],
    players: 'Single player',
    languages: 'English',
    context: 'KMITL · Computer Organization and Architecture',
    requirements: {
      label: 'Toolchain',
      min: ['An assembler toolchain (see the README)', 'A recorded demo is included in the repo'],
    },
    patchNotes: [
      { version: '1.0', date: 'Nov 23, 2023', title: 'Published', body: 'Collision checks and game loop in assembly, with a demo recording.' },
    ],
  },
];
