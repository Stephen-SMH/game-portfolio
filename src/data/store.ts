// Store-page details per game. Facts come from each repo (README, pubspec/package.json, git history).
// Screenshots: drop PNG/JPG/WebP files into public/shots/<slug>/ and they appear in the gallery automatically.
export interface PatchNote { version: string; date: string; title: string; body: string }
/** A soundtrack piece; `preview` is a short MP3 in public/audio/<slug>/. */
export interface Track { moment: string; title: string; artist: string; url: string; mood: string; length: string; preview?: string }
export interface Sound { name: string; when: string; source: string }
/** An engineering note for reviewers: what was built and how. */
export interface Highlight { title: string; body: string; proof?: string }
export interface Credit { what: string; who: string; licence: string; url?: string }
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
  /** Optional sections, shown only when present. */
  inspiredBy?: string;
  facts?: [string, string][];
  highlights?: Highlight[];
  soundtrack?: { note: string; licence: string; tracks: Track[]; sounds?: Sound[]; soundsNote?: string };
  credits?: Credit[];
  /** First row of the credits table: what Stephen did. Defaults to "Design and code". */
  creditsLead?: string;
  /** What's planned next; shown on in-development games. */
  roadmap?: string[];
}

export const store: Store[] = [
  {
    slug: 'medieval-conquest',
    title: 'Medieval Conquest',
    short: 'Turn-based medieval strategy for the browser, desktop and Android. Four historical campaigns, 43 missions, six civilizations and an AI that fights back.',
    status: 'Playable online',
    version: '2.4.0',
    released: 'Nov 2, 2026',
    updated: 'Nov 5, 2026',
    genres: ['Turn-based strategy', 'Historical', 'Campaign', 'Wargame', 'Singleplayer', 'Hotseat'],
    platforms: ['Web', 'Windows', 'macOS', 'Linux', 'Android'],
    players: 'Single player vs AI · hotseat for 2 to 4 on one device',
    languages: 'English',
    context: 'Solo project',
    inspiredBy: 'Inspired by the turn-based mobile wargame Strategy & Tactics: Medieval Wars. All art, music and code in this game are original or openly licensed (credits below).',
    facts: [
      ['43', 'missions in 4 campaigns'],
      ['14', 'maps, 7 from real coastlines'],
      ['21', 'unit types, 6 civilizations'],
      ['3', 'AI difficulty levels'],
      ['738', 'automated checks'],
      ['5', 'platforms, one pipeline'],
    ],
    requirements: {
      label: 'Browser',
      min: ['A modern browser with WebGL 2 (Chrome, Edge, Firefox, Safari)', 'About 30 MB to download', 'Mouse, trackpad or touch'],
      rec: ['Desktop builds for Windows, macOS and Linux on the Releases page', 'Speakers or headphones: the battle music swells when armies clash'],
    },
    highlights: [
      {
        title: 'Turn resolution you can replay',
        body: 'Orders resolve in a fixed order (volleys, then attacks strongest first, then marches, then captures) with seeded dice. A region holds at most 20 soldiers, armies split into detachments, and the "!" carries out orders mid-turn while the soldiers who acted stay spent.',
        proof: 'Tests save a game, load it and play on: both copies end identically, AI and battles included.',
      },
      {
        title: 'An AI that plans like a player',
        body: 'For every enemy army in reach the AI finds the smallest group of its own armies whose battle forecast (6 to 12 simulated fights, by difficulty) wins, attacks with one and supports with the rest. It carries out its attacks first, plans again with the armies still fresh, then marches, guards its capital and splits armies to take empty land. Easy, Normal and Hard change how it plans, how bold it is and its income.',
        proof: 'Measured in AI-only duels: the new Normal AI beat the previous one 31–17 in mirror matches and beat Easy 41–7.',
      },
      {
        title: 'Real maps from open data',
        body: 'A Python pipeline cuts Natural Earth coastlines for each theatre, places towns by latitude and longitude, and builds the region graph: borders, sea routes between ports and terrain. A second generator writes the 43 campaign missions (objectives, events, armies, crown times) as data the game loads.',
        proof: 'Every mission is checked for a valid start and reachable objectives on every test run.',
      },
      {
        title: 'Tested and shipped like a product',
        body: '738 headless checks cover rules, battles, the AI, saves and every mission. Tagging a version builds Web, Windows, macOS, Linux and Android in GitHub Actions, publishes a release with all five downloads and deploys the web build to GitHub Pages.',
        proof: 'Six releases in four days, each built and deployed by the pipeline.',
      },
      {
        title: 'Debugging the browser build',
        body: 'The web build was silent while the desktop build played fine. I loaded it in headless Chrome, metered what reached the speakers through the Chrome DevTools Protocol and read every gain stage. Audio buses added at runtime were landing at the wrong index in Godot\'s Web Audio backend and feeding into each other, so the browser muted the loop. Defining the buses in a bus layout fixed it.',
        proof: 'Output measured 0.00 before the fix and about 0.8 peak after.',
      },
      {
        title: 'Music that follows the fight',
        body: 'A two-layer music system crossfades the menu and map playlists, swells into battle music when a battle plays on screen, holds it 25 seconds after the last one, then resumes the map track where it paused. Every track is levelled to an EBU R128 loudness target so nothing jumps out.',
        proof: 'Ten pieces, 27 minutes of music at about 128 kbps.',
      },
    ],
    soundtrack: {
      note: 'Ten pieces chosen for where they play: an epic menu theme, a playlist of four map tracks, battle music that swells over the map when armies clash, and themes for victory and defeat. Each preview is 30 seconds from the body of the track.',
      licence: 'Licensed under Creative Commons Attribution 4.0 (CC BY 4.0).',
      tracks: [
        { moment: 'Title and menu', title: 'Rise of Kingdoms', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/rise-of-kingdoms/', mood: 'Powerful, epic', length: '3:24', preview: 'menu_rise_of_kingdoms' },
        { moment: 'Map 1 of 4', title: 'Medieval Chateau', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/medieval-chateau/', mood: 'Medieval', length: '2:54', preview: 'map_medieval_chateau' },
        { moment: 'Map 2 of 4', title: 'Towards the Horizon', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/towards-the-horizon/', mood: 'Celtic', length: '3:46', preview: 'map_towards_the_horizon' },
        { moment: 'Map 3 of 4', title: 'Gates of Glory', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/gates-of-glory/', mood: 'Dramatic, Celtic', length: '2:38', preview: 'map_gates_of_glory' },
        { moment: 'Map 4 of 4', title: 'Tavern Tales', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/tavern-tales/', mood: 'Lively, Celtic', length: '3:18', preview: 'map_tavern_tales' },
        { moment: 'Map, Viking campaign', title: 'The Vikings', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/the-vikings/', mood: 'Dramatic, orchestral', length: '2:40', preview: 'map_the_vikings' },
        { moment: 'Battle', title: 'Battle Loop', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/battle-loop/', mood: 'Tense, cinematic', length: '0:58', preview: 'battle_loop' },
        { moment: 'Battle', title: 'The Great Battle', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/the-great-battle/', mood: 'Dramatic, cinematic', length: '3:18', preview: 'battle_the_great_battle' },
        { moment: 'Victory', title: 'Superepic', artist: 'Alexander Nakarada', url: 'https://creatorchords.com/music/superepic/', mood: 'Triumphant, orchestral', length: '0:44', preview: 'victory_superepic' },
        { moment: 'Defeat', title: 'For the Fallen (first 48 s)', artist: 'Kevin MacLeod', url: 'https://incompetech.com/music/royalty-free/music.html', mood: 'Somber, epic', length: '0:48', preview: 'defeat_for_the_fallen' },
      ],
      soundsNote: 'Sound effects: CC0 (public domain), except the battle clash and the victory cheer (CC BY 4.0).',
      sounds: [
        { name: 'Click', when: 'Every button press', source: 'Kenney, Interface Sounds' },
        { name: 'Select', when: 'Selecting one of your armies', source: 'Kenney, RPG Audio' },
        { name: 'Order', when: 'Giving an order, pressing the !', source: 'Kenney, Impact Sounds' },
        { name: 'Hourglass', when: 'Ending your turn', source: 'el_boss (freesound.org)' },
        { name: 'March', when: 'Foot soldiers marching', source: 'Kenney, Impact Sounds' },
        { name: 'Hooves', when: 'Cavalry riding', source: 'HebronTheatre (freesound.org)' },
        { name: 'Sword clash', when: 'Melee battles; buying a Forge card', source: 'Kenney, Impact Sounds' },
        { name: 'Arrow volley', when: 'Archers shooting', source: 'mcaseydesign (freesound.org)' },
        { name: 'Catapult', when: 'Siege engines firing', source: 'craigsmith (freesound.org)' },
        { name: 'Impact', when: 'Stones landing', source: 'Kenney, Impact Sounds' },
        { name: 'Capture horn', when: 'A region changes hands', source: 'freefire66 (freesound.org)' },
        { name: 'Coins', when: 'Buying reinforcements', source: 'Kenney, RPG Audio' },
        { name: 'Army destroyed', when: 'An army is wiped out', source: 'Kenney, Impact Sounds and RPG Audio' },
        { name: 'Battle clash', when: 'An army attacks: a roar and clashing steel', source: 'Yap_Audio_Production (freesound.org), CC BY 4.0' },
        { name: 'Victory cheer', when: 'Your army wins a battle', source: 'chripei (freesound.org), CC BY 4.0' },
        { name: 'Defeat drums', when: 'Your army loses a battle', source: 'Infinita08 (freesound.org)' },
      ],
    },
    creditsLead: 'Design, code, AI, tools and maps',
    credits: [
      { what: 'Unit figures (rendered from 3D models)', who: 'Quaternius', licence: 'CC0', url: 'https://quaternius.com' },
      { what: 'Icons and Forge card shapes', who: 'Lorc, Delapouite, Guard13007, Cathelineau, Skoll, HeavenlyDog (game-icons.net)', licence: 'CC BY 3.0', url: 'https://game-icons.net' },
      { what: 'Coastlines for the real maps', who: 'Natural Earth', licence: 'Public domain', url: 'https://www.naturalearthdata.com' },
      { what: 'Fonts: Cinzel, IM FELL English, Grenze Gotisch, Noto', who: 'Natanael Gama, Igino Marini, Omnibus-Type, the Noto Project', licence: 'SIL OFL 1.1' },
    ],
    patchNotes: [
      { version: '2.4.0', date: 'Nov 5, 2026', title: 'Battle sounds and clearer armies', body: 'Clicking any army you can see lists its soldiers on the banner, Forge upgrades starred. Attacks open with a roar and clashing steel; your men cheer a win and drums toll a loss. Exit asks whether to save first.' },
      { version: '2.3.0', date: 'Nov 4, 2026', title: 'New soundtrack', body: 'Ten cinematic medieval pieces replace three short loops, at about 128 kbps instead of 72. Battle music now swells when armies clash.' },
      { version: '2.2.1', date: 'Nov 4, 2026', title: 'Sound in the browser', body: 'Fixed silent audio in the web build: the audio buses are now defined up front, so Web Audio no longer mutes a feedback loop.' },
      { version: '2.2.0', date: 'Nov 4, 2026', title: 'Smarter AI and difficulty', body: 'The AI gathers armies against one target and attacks in waves. Easy, Normal and Hard in Settings. One corner button runs the turn: the ! carries out orders, the hourglass ends the turn.' },
      { version: '2.1.0', date: 'Nov 3, 2026', title: 'Historical campaigns and the Forge', body: 'England, France, the Crusades and the Vikings as real history on real maps. Upgrade cards bought with mission score, briefing and victory scrolls, a guided tutorial.' },
      { version: '2.0.0', date: 'Nov 2, 2026', title: 'First release', body: 'Mixed armies, sea routes, sieges, reinforcements, missions with crowns, and builds for Web, Windows, macOS, Linux and Android from CI.' },
      { version: '0.1', date: 'Nov 1, 2026', title: 'Prototype', body: 'Province map, armies and movement, auto-resolved battles with counters and terrain, AI turns and an economy.' },
    ],
  },
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
    short: 'A narrative horror game made solo for Digit7 Jam 2026. It has rained for forty days, and every night someone knocks. Look them over, phone who they claim to be, then open the gate, or don\'t.',
    status: 'Game jam build',
    version: '1.0.0',
    released: 'Oct 30, 2026',
    updated: 'Oct 30, 2026',
    genres: ['Narrative horror', 'Deduction', 'Choices matter', 'Game jam'],
    platforms: ['Web (desktop)', 'Web (phones and tablets, landscape)'],
    players: 'Single player · 20 to 30 minutes a run',
    languages: 'English',
    context: 'Digit7 Jam 2026 · solo',
    requirements: {
      label: 'Browser',
      min: ['A current browser with JavaScript, WebGL and Web Audio', 'Keyboard and mouse, or touch in landscape', 'Content warning: flashing lights, sudden loud sounds, violence and death'],
      rec: ['Latest Chrome, Firefox or Safari', 'Headphones, in the dark'],
    },
    facts: [['5', 'Nights'], ['15', 'Endings'], ['1', 'Developer'], ['5', 'Browser setups tested']],
    patchNotes: [
      { version: '1.0.0', date: 'Oct 30, 2026', title: 'Jam submission', body: 'The killer mystery (signs, the TV bulletin, the pirate radio and the hotline), 15 endings, energy, cutscenes, and music and voices made in code. Tested in Chrome, Firefox and WebKit on desktop and emulated phones.' },
      { version: '0.3', date: 'Oct 17, 2026', title: 'Killer mystery', body: 'Signs to look for, suspects at the gate and the first nights of deduction.' },
      { version: '0.2', date: 'Oct 14, 2026', title: 'House and encounters', body: 'Reworked house scenes and door encounters.' },
      { version: '0.1.0', date: 'Sep 24, 2026', title: 'Prototype', body: 'House scenes, door encounters, code-drawn art and an early Three.js prototype.' },
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

  // ---------- In development ----------
  {
    slug: 'mafia-don',
    title: 'Mafia Don',
    short: "Turn-based strategy from the Don's chair. Pick one of five crime families in 1946 New York, send your capos across the city, take the rackets, survive the police and win the year's title.",
    status: 'In development',
    version: 'v1 build',
    released: 'Not yet released',
    updated: 'Nov 3, 2026',
    genres: ['Strategy', 'Turn-based', 'Management', 'Crime'],
    platforms: ['macOS, Windows, Linux', 'Web and mobile planned'],
    players: 'Single player · five families to choose from',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Desktop',
      min: ['Mouse and keyboard, or a trackpad (pinch to zoom)', "A GPU that runs Godot 4's Compatibility renderer"],
    },
    facts: [['42', 'Districts'], ['5', 'Families'], ['16', 'Crossings in 1946'], ['25', 'Years simulated in tests']],
    roadmap: [
      'Sound and music: a noir jazz loop, typewriter and paper sounds.',
      'Turn playback on the map: crews marching and fights flashing before the newspaper.',
      'Events of the era, fictionalised, and deeper diplomacy: Commission votes, sit-downs and alliances.',
      'Sons and nephews as heirs, so succession becomes a choice.',
      'Fog of war over rivals, with informants to lift it.',
      'Web and mobile builds, like Medieval Conquest.',
    ],
    patchNotes: [
      { version: 'v1', date: 'Nov 3, 2026', title: 'Version 1 playable', body: 'The map of 42 districts, five families with histories, monthly turns, the newspaper and family report, the Commission, hits, peace offers and yearly titles.' },
    ],
    credits: [
      { what: 'Limelight, Playfair Display and Oswald fonts', who: 'Sorkin Type Co and the Playfair Display and Oswald authors', licence: 'SIL Open Font License 1.1' },
      { what: 'Special Elite font', who: 'Astigmatic', licence: 'Apache License 2.0' },
    ],
  },
  {
    slug: 'mafia',
    title: 'Mafia',
    short: 'A 1940s crime story in 3D. Rise from nobody to a made man on one street in Little Italy: lean on shopkeepers, build a crew and fight off a rival family.',
    status: 'In development',
    version: '0.2',
    released: 'Not yet released',
    updated: 'Nov 1, 2026',
    genres: ['Story', 'Action', 'Crime', '1940s'],
    platforms: ['macOS, Windows, Linux'],
    players: 'Single player',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Desktop',
      min: ['Mouse and keyboard', "A GPU that runs Godot 4's Mobile renderer"],
      rec: ['Runs at 60 fps on an M2 Mac'],
    },
    facts: [['6', 'Story steps in Chapter One'], ['3', 'Shops to lean on'], ['6', 'Ranks, Outsider to Don'], ['3', 'Men to hire']],
    roadmap: [
      'Chapter Two: rising to Capo.',
      'More streets and interiors.',
      '1940s cars and police heat.',
      'Sound and music.',
    ],
    patchNotes: [
      { version: '0.2', date: 'Nov 1, 2026', title: 'Story mode, Chapter One', body: 'Real models, cutscenes, a crew and ranks: six story steps from your first collection to the ceremony in the back room.' },
      { version: '0.1', date: 'Oct 31, 2026', title: 'First playable', body: 'One city block and three shops to lean on.' },
    ],
    credits: [
      { what: 'Street, buildings, people and props', who: 'Quaternius', licence: 'CC0', url: 'https://quaternius.com' },
    ],
  },
  {
    slug: 'tactics-rpg',
    title: 'Tactics RPG',
    short: 'A grid-based tactical RPG on 3D block maps with height. Two squads of four, speed-based turns, and a forecast for every attack before you commit.',
    status: 'In development',
    version: 'M4',
    released: 'Not yet released',
    updated: 'Nov 1, 2026',
    genres: ['Tactical RPG', 'Turn-based', 'Strategy', 'Pixel art'],
    platforms: ['macOS, Windows, Linux', 'Web (HTML5) planned'],
    players: 'Single player · squads of four',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Desktop',
      min: ['Mouse and keyboard', "A GPU that runs Godot 4's Compatibility renderer"],
    },
    inspiredBy: 'Inspired by the PS1-era tactics games: height, facing and jobs decide the fight. The units and maps are drawn in code.',
    facts: [['4', 'Jobs'], ['4 v 4', 'Battles'], ['3', 'AI difficulty levels'], ['5', 'Test suites']],
    roadmap: [
      'A campaign shell: a world map, a town with a shop, three story battles, and saving.',
      'All eight jobs and status effects.',
      'Ten battles and a web build.',
    ],
    patchNotes: [
      { version: 'M4', date: 'Nov 1, 2026', title: 'Enemy AI', body: 'Enemies score every move and action and pick the best, with a difficulty setting.' },
      { version: 'M3', date: 'Nov 1, 2026', title: 'Jobs and inventory', body: 'Four jobs, job points and abilities, equipment, shared items and the party menu.' },
      { version: 'M2', date: 'Nov 1, 2026', title: 'Combat', body: 'Turn order, move, act and wait, facing, the attack forecast, KO and results.' },
      { version: 'M1', date: 'Nov 1, 2026', title: 'Grid prototype', body: 'A height map, the rotating camera and unit movement.' },
    ],
  },
  {
    slug: 'farm-life',
    title: 'Farm Life',
    short: 'A top-down pixel-art farming and life sim. Grow crops, ship your harvest and make friends in a small town across four seasons.',
    status: 'In development',
    version: 'M4',
    released: 'Not yet released',
    updated: 'Nov 1, 2026',
    genres: ['Farming', 'Life sim', 'Pixel art', 'Relaxing'],
    platforms: ['macOS, Windows, Linux', 'Web (HTML5) planned'],
    players: 'Single player · three save slots',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Desktop',
      min: ['Keyboard and mouse', "A GPU that runs Godot 4's Compatibility renderer"],
    },
    inspiredBy: 'Inspired by Stardew Valley. Every tile, crop and character is drawn in code.',
    facts: [['4', 'Seasons'], ['28', 'Days a season'], ['8', 'Crops'], ['4', 'Townspeople']],
    roadmap: [
      'Animals and cooking: a coop and chickens, a kitchen with five recipes, foraging and fishing.',
      'A first full year: eight townspeople, tool upgrades, crafting and a web build.',
    ],
    patchNotes: [
      { version: 'M4', date: 'Nov 1, 2026', title: 'Town and townspeople', body: 'The town map, townspeople with daily schedules, dialogue, gifts and friendship.' },
      { version: 'M3', date: 'Nov 1, 2026', title: 'Inventory and the store', body: 'The inventory screen, chests, the general store, seasons, weather and crop quality.' },
      { version: 'M2', date: 'Nov 1, 2026', title: 'Crops and time', body: 'The clock, sleeping, crops, the shipping bin and save slots.' },
      { version: 'M1', date: 'Nov 1, 2026', title: 'Walk and till', body: 'Walking, the hotbar, the hoe, the watering can and energy.' },
    ],
  },
  {
    slug: 'lantern',
    title: 'Lantern',
    short: 'A turn-based roguelike for the desktop. Eight floors down, the Sunstone waits. Your lantern is your light and your life, and it burns lower with every step.',
    status: 'In development',
    version: '0.1.0',
    released: 'Not yet released',
    updated: 'Oct 11, 2026',
    genres: ['Roguelike', 'Turn-based', 'Dungeon crawler', 'Permadeath'],
    platforms: ['macOS, Windows, Linux (desktop app, about 4 MB)'],
    players: 'Single player · daily seeded runs',
    languages: 'English',
    context: 'Solo project',
    requirements: {
      label: 'Desktop',
      min: ['Keyboard', 'For now, build from source: Node 20+, stable Rust and the Tauri prerequisites'],
    },
    facts: [['8', 'Floors'], ['13', 'Core unit tests'], ['200', 'Seeds balance-tested'], ['4 MB', 'App bundle']],
    roadmap: [
      'Ranged enemies, and an oil flask you can throw to set an area alight.',
      'Generated vaults and secret doors.',
      'A lantern hiss that changes with your oil level.',
      'Signed builds for macOS, Windows and Linux from CI.',
    ],
    patchNotes: [
      { version: '0.1.0', date: 'Oct 11, 2026', title: 'First build', body: 'Eight floors, the lantern and oil, five monster types and the Warden, loot, permadeath with autosave, a daily run and a local top-10 board.' },
    ],
  },
];
