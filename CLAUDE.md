# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jongwon Choi, deployed at www.jongwony.com. Built with Vue 2 and Vue CLI, hosted on GitHub Pages.

## Commands

- `npm run serve` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `./deploy.sh` - Build and deploy to GitHub Pages (gh-pages branch)

## Architecture

**Single-page Vue 2 application** with a minimalist structure:

- `src/App.vue` - Root component, renders HelloWorld with author name
- `src/components/HelloWorld.vue` - Main content component displaying:
  - Profile badges and tags
  - Scrap (press/media coverage)
  - Speaker history (talks/presentations)
  - Side projects (bio)
  - GitHub stats
  - Contact info

**Data Loading Pattern**: The HelloWorld component fetches all content data at runtime from GitHub raw URLs (not bundled):
```
https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/*.json
```

**Data Files** (`src/data/`):
- `bio.json` - Side project links
- `speaker.json` - Speaking engagements with dates, descriptions, and presentation links
- `scrap.json` - Press/media coverage entries
- `tags.json` - Profile badges/links

**Deployment**: The `deploy.sh` script builds the project, creates a fresh git repo in `dist/`, and force pushes to the `gh-pages` branch.
