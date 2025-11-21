NK TRADING CO. — Electron builder + GitHub Actions

What this package contains:

- /app : Express backend + SQLite + migrate script (seeds default user owner@nk.com / admin123)
- /renderer : static frontend (simple POS) served by server
- main.js : Electron main script (starts backend and opens window)
- package.json : root package.json with electron-builder config
- .github/workflows/build-windows.yml : GitHub Actions workflow that builds a Windows EXE

Goal:
You can get a downloadable Windows EXE WITHOUT running terminal commands locally by using GitHub Actions build artifact.

Steps to get your EXE (no coding required):
1) Create a free GitHub account (if you don't have one).
2) Create a new repository on GitHub (private or public). Name it e.g., nk-trading-electron.
3) Upload all files from this package into the repository root (you can drag-and-drop the ZIP contents in the GitHub web UI).
4) On GitHub, go to Actions tab for your repo. You should see the "Build Windows EXE" workflow.
5) Click "Run workflow" (choose main branch) — this will start the build on GitHub's Windows runner.
6) Wait for the workflow to finish (GitHub will show progress). When complete, open the workflow run and download the artifact named `nk-trading-windows-exe` — it contains the EXE installer/artifact.

Notes:
- Building produces a Windows EXE using electron-builder and NSIS. The build may take several minutes.
- If the workflow fails due to missing permissions for running electron-builder on GH runner, I can help adjust the workflow.
- After downloading the EXE, run it on your Windows PC. It will install and run NK TRADING CO. offline.

If you want, I can:
- Upload this prepared repo ZIP here for you to download and then you (or a helper) can upload to GitHub.
- Or I can walk you step-by-step to push this to GitHub and run the workflow while you click.

Which would you prefer? (I will attach the ZIP with all files so you can upload to GitHub.)
