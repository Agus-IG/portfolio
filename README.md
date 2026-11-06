# Agustin González — Portfolio

Personal portfolio of Agustin González, full stack developer (.NET, Oracle, Angular, React) based in Neuquén, Argentina.

**Live site:** https://agus-ig.github.io/portfolio/

## Tech

- React 18 + Vite
- Plain CSS with design tokens (CSS custom properties)
- Deployed to GitHub Pages with GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

## Project structure

```
src/
  data.js          # all content: profile, projects, experience
  components/      # one component per section
  index.css        # design tokens and styles
.github/workflows/
  deploy.yml       # build and deploy to GitHub Pages on push to main
```

To update the content, edit `src/data.js`.
