# PokéCatch website

Static Astro promotional site. The existing pixel-art design and gameplay content
are preserved; the CLI game is not implemented in the browser.

## Requirements

- Node.js 22.12+ (Node 22 LTS recommended)
- pnpm 11.23.0 (pinned in `package.json`)

If pnpm is not installed, enable it with `corepack enable pnpm`. On systems where
Corepack cannot write shims, prefix commands with `corepack`, e.g. `corepack pnpm dev`.

## Commands

Run from `website/`:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm test
pnpm preview
```

`pnpm dev` starts Astro's local development server. `pnpm build` exports the site
to `dist/`. Tests exercise the built HTML, bundled interactions, and asset paths,
so build before running tests. There is no separate linter configured.

## Structure

```text
public/                 Static assets copied unchanged to dist/
  assets/               Pokémon sprites, balls, badges, type markers
  .nojekyll             GitHub Pages marker
src/
  components/           Shared brand, navigation, footer, ball card
    sections/           Landing-page sections
  data/                 Build-time ball and rarity content (not a database)
  layouts/              Document metadata and global style import
  pages/index.astro     Landing-page composition and route
  scripts/              Navigation and ball-filter browser behavior
  styles/global.css     Compiled Tailwind/daisyUI and preserved custom CSS
  utils/assets.ts       Base-aware public asset paths
tests/                  Static-output and DOM interaction regression checks
astro.config.mjs        Static output, Tailwind Vite plugin, deployment paths
```

Astro renders the components to static HTML. Only the small navigation/filter
scripts run in the browser; no React, server adapter, accounts, or backend are used.
Tailwind 4 and daisyUI 5 compile locally rather than loading browser-build CDNs.
The existing Google Fonts stylesheet remains external.

## GitHub Pages

For a user/domain site, deploy `dist/` after `pnpm build`. For a repository site:

```sh
SITE_URL=https://YOUR-USER.github.io BASE_PATH=/YOUR-REPOSITORY pnpm build
BASE_PATH=/YOUR-REPOSITORY pnpm test
BASE_PATH=/YOUR-REPOSITORY pnpm preview
```

Use the same base when building and previewing. The asset helper and Astro's
generated CSS/JS URLs include this repository prefix. Publish **the contents of
`dist/`**, not `src/` or the whole project; no deployment is performed automatically.
