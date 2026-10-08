# Stephen — Portfolio

Personal portfolio built with Astro. Repositories, stars, activity and the contribution graph are pulled from the GitHub API at build time; games are curated in `src/data/games.ts`.

```
nvm use 22
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Set `GITHUB_TOKEN` in `.env` to avoid API rate limits during builds.
