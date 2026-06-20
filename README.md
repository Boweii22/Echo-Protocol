# ECHO PROTOCOL

A single-file narrative browser game. Open `index.html` in any browser — no build step, no server.

## Live AI interrogator (optional)

The game works fully offline using scripted fallback responses. To enable the live Gemini-powered interrogator instead:

1. Get a free key at [aistudio.google.com](https://aistudio.google.com).
2. Open `index.html`, find this line near the `AI INTEGRATION` section:
   ```js
   const GEMINI_API_KEY = 'YOUR_GEMINI_KEY';
   ```
3. Replace `'YOUR_GEMINI_KEY'` with your key.

**Do not commit or share a file with your real key in it.** The key lives in client-side JavaScript — anyone who opens the file or views page source can read and use it. If you're distributing this game (e.g. submitting it to a jam), ship it with the placeholder in place; each person who wants the live AI fills in their own key locally.
