# Stephen — Game Portfolio

Game portfolio built with Astro. Games live in `src/data/games.ts`, page text in `src/data/profile.ts`, and each
game's store page in `src/data/store.ts`. A store page can also have key facts, "Under the hood" engineering notes,
a soundtrack table and credits (see Medieval Conquest). Screenshots go in `public/shots/<slug>/` and soundtrack
previews in `public/audio/<slug>/`. A game's `cover` (a landscape screenshot, usually one from its shots folder) is
shown on its home-page poster and store capsule; `shot` is the same for a portrait phone screenshot.
My software engineering portfolio is separate: https://stephen-smh.github.io

```
nvm use 22
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```
