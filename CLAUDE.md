# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/career website (www.jongwony.com). Astro static site hosted on GitHub Pages.

The site is mid-renewal. The Vue 3 + Bootstrap SPA has been replaced by an Astro scaffold
serving a minimal landing page; the full site is still being built.

## Commands

```bash
npm install                     # Install dependencies
npm run dev                     # Dev server
npm run build                   # Production build (dist/)
npm run preview                 # Serve the production build locally
```

## Deployment

Deployment runs entirely in GitHub Actions. There is no deploy script — do not add one.

```
push to main  →  .github/workflows/deploy.yml
              →  withastro/action     (build)
              →  actions/deploy-pages (publish)
```

- GitHub Pages **Source must be set to "GitHub Actions"**, not a branch. The `gh-pages`
  branch is no longer part of the deployment path.
- The custom domain is carried by `public/CNAME`. Astro copies `public/` verbatim into the
  build output, so `dist/CNAME` is what binds www.jongwony.com. **Deleting it drops the
  domain**, and GitHub then answers that host with 404.
- The `deploy` job declares `needs: build`, so a failed build cannot publish stale output.

Verifying a deploy takes two separate checks — either one alone gives a false pass:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://www.jongwony.com   # must be 200
curl -s -H 'Cache-Control: no-cache' https://www.jongwony.com | shasum   # must differ from before
```

A 200 alone can mean old output is still being served; a changed hash alone can mean the
domain came unbound and you are hashing GitHub's 404 page.

## Data Flow (Important)

Content renders at **build time**. Nothing is fetched at runtime.

```
source  →  build  →  static HTML  →  deploy
```

- **Pushing data alone does not change the site.** A build and deploy must run. This is a
  deliberate move to a slower pace layer, decided during the renewal — not a regression.
- `src/data/*.json` (`bio`, `speaker`, `tags`, `scrap`) still hold the pre-renewal content
  and are **not yet wired into any page**. Migrating them — prose to frontmatter markdown
  via the `glob()` loader, pure structured data to JSON via the `file()` loader — is the
  next work unit.

## Astro content collections — read the docs, not memory

The collections API was rewritten in v5, and backward compatibility was **fully removed** in
v6. Older training data confidently emits syntax that no longer exists. Check any generated
collections code against this table:

| Stale (pre-v5) | Current (v6+) |
|------|------|
| `src/content/config.ts` | `src/content.config.ts` |
| `type: 'content'` / `'data'` | `loader:` required |
| `entry.slug` | `entry.id` |
| `entry.render()` method | `import { render } from 'astro:content'` |
| `import { z } from 'astro:content'` / `'astro:schema'` | `import { z } from 'astro/zod'` |

`astro` is pinned exactly (`"astro": "7.1.1"`, no caret). Upgrade only deliberately.

Official docs MCP server:
`claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp`

## Key Files

| File | Purpose |
|------|---------|
| `src/pages/index.astro` | Landing page (interim — full site pending) |
| `astro.config.mjs` | `site` is the canonical URL; no `base` is set |
| `public/CNAME` | Custom domain binding — load-bearing |
| `.github/workflows/deploy.yml` | Build and publish |
| `src/data/*.json` | Pre-renewal content, awaiting migration |

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
