# QUANT/DESK — Quant Placement Prep Tracker

Gamified 12-week prep sheet for quant Trader / Researcher / Developer roles.
Daily-sized tasks, points, streaks, an activity heatmap, and a shared leaderboard.

## Files
- index.html         — page structure
- styles.css         — all styling
- app.js             — curriculum data + app logic + Supabase client (plain fetch, no SDK)
- supabase-setup.sql — one-time database setup

## Run locally (local mode)
Serve the folder (don't open index.html via file://):

    python3 -m http.server 8000

then visit http://localhost:8000
Without Supabase configured it runs in LOCAL mode.

## Go cloud (all users, one global leaderboard)
1. Create a free project at supabase.com (region: Mumbai).
2. SQL Editor -> New query -> paste supabase-setup.sql -> Run.
3. Authentication -> Sign In / Providers -> Email -> turn OFF "Confirm email".
4. Get your Project URL (top-bar "Connect" button, or Settings -> Data API;
   it's https://<project-ref>.supabase.co) and your publishable key
   (Settings -> API Keys, sb_publishable_...).
   NEVER put the secret / service_role key in client code.
5. Paste both into the CONFIG block at the top of app.js.
6. Host the folder (GitHub Pages / Netlify / Vercel). The login gate
   will show a green CLOUD MODE badge.

## Deploy on GitHub Pages
- New public repo -> upload these files (index.html at repo root)
- Settings -> Pages -> Deploy from branch -> main, / (root)
- Live at https://<username>.github.io/<repo>/

Notes: free Supabase projects pause after ~7 days idle (open the dashboard
to resume). Desk names + points are public on the leaderboard by design.
