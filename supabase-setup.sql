-- ═══════════════════════════════════════════════════════════════
-- QUANT/DESK — Supabase setup
-- Run this once in your project: SQL Editor → New query → Run.
-- Then: Authentication → Providers → Email → turn OFF "Confirm email".
-- Finally paste your Project URL + anon key into the CONFIG block
-- at the top of quant-prep-tracker.html and host the file.
-- ═══════════════════════════════════════════════════════════════

create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null
    check (char_length(username) between 2 and 16),
  points int not null default 0,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Everyone (even logged out) can read the leaderboard columns.
create policy "leaderboard is public"
  on public.profiles for select
  using (true);

-- A user can create only their own profile row.
create policy "insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- A user can update only their own row (progress + points).
create policy "update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- No delete policy on purpose: nobody can wipe rows from the client.
