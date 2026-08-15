# Gaps Agency

A responsive, one-page website for Gaps Agency, a full-service podcast strategy, production, branding, distribution, growth, and monetization partner.

## Highlights

- Responsive desktop, tablet, and mobile layout
- Animated microphone orbits and recording indicator
- Continuously animated signal waveform
- Seamless right-to-left capabilities ribbon
- Reduced-motion accessibility fallback
- Services, work, process, about, contact, and footer sections

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address printed by the development server.

## Production build

```bash
npm run build
```

The static production website is generated in the `out/` folder.

## Deploy on Netlify

- The included `netlify.toml` automatically sets the build command to `npm run build` and the publish directory to `out`
- Do not upload or commit `node_modules/`
- When using Netlify Drop, upload the generated `out/` folder only
- Remove any manually added `@netlify/plugin-nextjs` plugin from an older Netlify project before redeploying

## Main files

- `app/page.tsx` — page structure and content
- `app/globals.css` — responsive styling and animations
- `app/layout.tsx` — document metadata and global shell
- `public/` — public assets

## Brand palette

- Black: `#080808`
- Paper: `#f7f5f1`
- Red: `#d11b23`
- Dark red: `#8b0000`

© 2026 Gaps Agency.
