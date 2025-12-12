This repository is the frontend for THCquila  an ecommerce site for the THCquila brand. The project uses Vite as the build tool and development server.

**What's New**
- **Updated (2025-12-09):** Added clearer `.env` usage instructions and a sample `env` template.
- **Deployment notes:** `npm run deploy` uses `gh-pages` and expects the production `build` folder to be present.

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
- `npm start`  Runs the Vite dev server (`vite`). Opens the app (configured to use port `3000`).
- `npm run build`  Builds the production bundle with Vite. Output directory is `build` (see `vite.config.js`).
- `npm run serve`  Preview the built production bundle using `vite preview`.
- `npm run deploy`  Deploy script (uses `gh-pages -d build` by default).

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

**Environment variables & `.env` files**
- **Prefix requirement:** Any variable you want to expose to the client must start with `VITE_`. Vite only exposes variables beginning with `VITE_` to `import.meta.env`.
- **Do not commit secrets:** Never commit private keys or secrets to Git. Use `.env.local` (ignored) or your CI secrets for production values.
- **Restart required:** Vite reads `.env` at startup  restart the dev server after changing `.env` files.
- **Recommended files:**
  - `.env`  shared defaults for all environments (optional)
  - `.env.local`  local overrides (gitignored)
  - `.env.development`, `.env.production`  environment-specific values
- **Sample `.env.example`** (create this file and commit it so contributors know what to set):

```
# .env.example - copy to .env.local and fill values
VITE_FORMSPREE_ID=your-formspree-id
VITE_API_BASE_URL=https://api.example.com
# Optional: set a base path if serving from a subfolder (mirrors vite.config base)
VITE_BASE_PATH=/THCquila/
```

**Example local setup (Windows PowerShell)**
- Create `.env.local` by copying `.env.example` and updating values, or create it manually. Example PowerShell command to copy:

```powershell
Copy-Item .env.example .env.local
# Then open .env.local in an editor and update values
```

**Vite and import.meta.env**
- Use `import.meta.env.VITE_FORMSPREE_ID` (or other `VITE_` variables) in the code.
- `import.meta.env.BASE_URL` is provided by Vite from `vite.config.js` and reflects the configured `base` path.

**Vite configuration**
- See `vite.config.js` for important settings: `base` (public base path), `server.port` (dev port), and `build.outDir` (output folder).

**Helpful tips**
- If you need environment variables in the browser, always prefix them with `VITE_` and place them in a `.env` file at the project root.
- For CI/CD, set corresponding CI environment variables (e.g., GitHub Actions secrets) and ensure the build step has access to them.
