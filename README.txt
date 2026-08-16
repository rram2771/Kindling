KINDLING — A Journal That Follows You
=========================================

WHAT'S IN THIS FOLDER
----------------------
index.html          The whole app — one file.
manifest.json        Lets Android/Chrome treat it like an installable app.
service-worker.js    Caches the app shell for offline use (never caches
                      Google's own requests, so sign-in always works fresh).
icon-192.png / icon-512.png   App icons.

WHAT THIS APP DOES
----------------------
Kindling pulls a daily line of inspiration from a Google Doc you choose,
prompts you to write about it, and syncs everything — your entries, and
any new lines you add — to your own Google Drive. Open it on your phone,
your laptop, anywhere: same journal, same entries, because it all lives
in your Drive instead of trapped on one device.

Writing works fully offline — Kindling saves locally right away and
syncs automatically the next time you're online.

ONE-TIME SETUP (about 10 minutes, and it's free)
-----------------------------------------------------
This app needs its own connection to Google, separate from any account
sign-in — this is standard for any app that wants to read/write your
Google Drive on your behalf.

1. Go to https://console.cloud.google.com/
2. Create a new project (top-left project switcher → New Project). Any
   name is fine — e.g. "Kindling Journal."
3. In the left sidebar, go to "APIs & Services" → "Library." Search for
   and enable:
     - Google Drive API
     - Google Docs API
     - Google Picker API
4. Go to "APIs & Services" → "OAuth consent screen."
     - Choose "External" (unless you have a Google Workspace account).
     - Fill in an app name (e.g. "Kindling"), your email for support and
       developer contact.
     - Under "Test users," add your own Google account's email. This
       keeps the app private to just you, with no need for Google to
       review or approve it.
5. Go to "APIs & Services" → "Credentials."
     - Click "Create Credentials" → "OAuth client ID."
       - Application type: Web application.
       - Under "Authorized JavaScript origins," add the exact web
         address you're hosting Kindling at (e.g.
         https://yourusername.github.io — no trailing slash, no path).
       - Save. Copy the Client ID it gives you (ends in
         .apps.googleusercontent.com).
     - Click "Create Credentials" → "API key."
       - Copy this key too.
6. Open Kindling, go to Settings, paste in both values, and tap
   "Connect Google Drive."
7. Sign in with the same Google account you added as a test user, and
   pick the Google Doc you want Kindling to pull inspiration from.

That's it — from then on, Kindling remembers your setup on that device.
Repeat step 6-7 (just entering the same values) on any other device you
want to use Kindling on.

A NOTE ON THE ONE LIVE STEP
--------------------------------
Everything in this app is built and tested against Google's real,
documented APIs — but the actual sign-in handshake can only be
completed with a real Google account approving a real, live-hosted
page. If anything about the connect flow doesn't work exactly as
described, tell Claude what you see on screen (a screenshot helps a
lot) and it can debug the exact step with you.

HOW TO INSTALL IT AS A REAL APP ICON ON YOUR PHONE
-------------------------------------------------------
1. Host this folder somewhere public — GitHub Pages works well and is
   free (create a repo, upload these files, turn on Pages in Settings).
   This is also the address you'll use as your "Authorized JavaScript
   origin" in step 5 above.
2. Open the live link in Chrome on Android → menu → "Add to Home
   Screen" / "Install app."

TURNING IT INTO A REAL .APK
------------------------------
1. Go to pwabuilder.com, paste your live GitHub Pages URL, click Start.
2. Click "Package For Stores" → Android → Download Package.
3. Unzip it — the .apk is inside.
4. Get the .apk onto your phone, tap it, allow "install from unknown
   sources" if asked, then Install → Open.

A NOTE ON YOUR DATA
-----------------------
Kindling only ever touches the one Google Doc you explicitly pick, plus
a small private data file it creates in your Drive's hidden app-data
space to store your entries. It never sees your Google password, and
never touches any other file in your Drive. Entries are also cached
locally on each device for offline writing.
