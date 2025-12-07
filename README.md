This repository is the frontend for THCquila — an ecommerce site for the THCquila brand. The project uses Vite as the build tool and development server.

**Quick Overview**
- **Framework:** React (legacy 16.x codebase)
- **Bundler / Dev server:** Vite
- **Build output:** `build` (configured in `vite.config.js`)

**Prerequisites**
- Node.js (recommended v16 or newer)
- npm (or yarn)

**Install**
Install dependencies:

```
npm install
```

**Available scripts**
- `npm start` — Runs the Vite dev server (`vite`). Opens the app (configured to use port `3000`).
- `npm run build` — Builds the production bundle with Vite. Output directory is `build` (see `vite.config.js`).
- `npm run serve` — Preview the built production bundle using `vite preview`.
- `npm run deploy` — Deploy script (uses `gh-pages -d build` by default).

Example local development:

```
npm start
```

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run serve
```

Deploy (GitHub Pages configured in `package.json`):

```
npm run predeploy
npm run deploy
```

**Environment variables**
- `VITE_FORMSPREE_ID` — optional Formspree form ID used by the contact form. If not set, a default fallback ID is used in the code.
- `BASE_URL` / `import.meta.env.BASE_URL` — Vite exposes the `BASE_URL` configured in `vite.config.js` (set to `/THCquila/` in this repo). The app uses `import.meta.env.BASE_URL` to resolve static asset paths.

Note: some legacy Create React App environment variables like `PUBLIC_URL` or `process.env.NODE_ENV` are referenced in `src/serviceWorker.js`. Vite provides `import.meta.env.*` — keep this in mind if you modify service worker code.

**Vite configuration**
- See `vite.config.js` for important settings: `base` (public base path), `server.port` (dev port), and `build.outDir` (output folder).

**Helpful tips**
- If you need environment variables in Vite, prefix them with `VITE_` and place them in a `.env` file (for example, `.env.local`) at the project root:

```
VITE_FORMSPREE_ID=your_formspree_id_here
```

- Vite serves `import.meta.env` variables at build time — restart the dev server after changing `.env` files.

If you'd like, I can also:
- add a short `.env.example` file listing recommended variables,
- update `serviceWorker.js` to use `import.meta.env` instead of `process.env`, or
- add a GitHub Actions workflow for automatic deploys.

---