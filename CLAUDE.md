# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/career website (www.jongwony.com). Vue 3 + Bootstrap 5 SPA hosted on GitHub Pages.

## Commands

```bash
npm install                     # Install dependencies
npm run serve                   # Dev server (localhost:8080)
npm run build                   # Production build (dist/)
npm run lint                    # ESLint check
./deploy.sh                     # Deploy to gh-pages branch
```

## Architecture

### Data Flow (Important)

JSON data files are **fetched at runtime from GitHub raw URLs**:

```
src/data/*.json  →  push to main  →  GitHub raw URL  →  runtime fetch
```

- `bio.json`, `speaker.json`, `tags.json`, `scrap.json`
- JSON changes reflect immediately after main push (no build needed)
- Vue component changes require `./deploy.sh` execution

### Deployment Structure

```
main branch     →  Source code (src/, public/)
gh-pages branch →  Build output (dist/)
```

`deploy.sh`: `npm run build` → force push dist to gh-pages

### Key Files

| File | Purpose |
|------|---------|
| `src/components/HelloWorld.vue` | Main page component (company badge, section rendering) |
| `src/data/speaker.json` | Speaker history (href, event, name, value, date, description) |
| `src/data/bio.json` | Side projects (github-readme-stats card integration) |
| `src/data/tags.json` | Tech stack badges |
| `src/data/scrap.json` | External activities/media exposure |

### speaker.json Schema

```json
{
  "href": "Presentation link (Figma/YouTube/PDF) - button hidden if absent",
  "event": "Event page URL",
  "name": "Event/organization name",
  "value": "Presentation title",
  "date": "YYYY-MM-DD or YYYY-MM or YYYY-MM-DD ~ YYYY-MM-DD",
  "description": "Description (optional)"
}
```

Latest entries at array top (reverse chronological order).

### bio.json Schema

```json
{"name": "GitHub repo name", "href": "Project URL"}
```

- If `name` matches GitHub repo, github-readme-stats card displays
- If not matched, only link shows (card breaks)
