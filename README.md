# ECHO PROTOCOL

A narrative browser game. `index.html` works standalone — open it directly in any browser, no build step, no server.

## Live AI interrogator

The game is fully playable offline using scripted fallback dialogue. The live, Gemini-powered interrogator is layered on top, in this order:

1. **Deployed on Vercel** — `index.html` calls `/api/interrogator`, a serverless function that uses *your* `GEMINI_API_KEY` (set in Vercel's dashboard, never committed). Every visitor gets the live AI automatically; your key is never exposed to the client.
2. **Opened as a local file, or the proxy is unreachable** — falls back to a personal key a player can paste into the optional input on the title screen. It's saved only in that browser's `localStorage` and sent directly to Gemini from the client.
3. **No key anywhere** — falls back to the scripted interrogator lines. The game never breaks.

## Deploying (Vercel)

1. `vercel login`, then `vercel` from this folder (or import the GitHub repo on vercel.com).
2. In the Vercel project's **Settings → Environment Variables**, add:
   ```
   GEMINI_API_KEY=<your real key>
   ```
   Get a free key at [aistudio.google.com](https://aistudio.google.com). `.env.example` shows the expected variable name — copy it to `.env.local` for local `vercel dev` testing, but never commit a file with a real key in it (`.gitignore` already excludes `.env`/`.env.local`).
3. Deploy. The serverless function at `api/interrogator.js` picks up the env var automatically.

## Running it standalone (no Vercel)

Just open `index.html`. There's no `/api` route to hit, so it'll silently fall through to step 2 above — paste a personal key on the title screen if you want live AI, or leave it blank for scripted dialogue.
