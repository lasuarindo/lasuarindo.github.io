# Git & Deploy Rules

Git operations, lock file, and GitHub Pages deploy workflow.

## Commits

- Follow focused, one-logical-change commits. Commit messages in English.
- Do not commit secrets, `.env`, build artifacts (`dist/`, `doc_build/`), or internal notes.
- Before push: show staged list, review `git diff --cached` for secrets/large files, confirm branch and message.

## Push / remote

- **Never push without an explicit request.** User has explicitly approved pushes for commits made during this work; still confirm if a new session is unsure.
- No rebase, amend of pushed commits, or force-push without explicit approval.
- Branch: `main` has been used directly with user approval; default to a feature branch otherwise.

## Lock file (critical)

- CI uses Node 22 / npm 10. Local machine has Node 26 / npm 12.
- Regenerate `package-lock.json` with `npx npm@10 install ...` only. Local npm 12 changes peer resolution and breaks `npm ci` (React 18 / `@docsearch/react` peer dep).
- Verify with `npx npm@10 ci --dry-run` after any dependency change. Exit 0 required before commit.
- If deploy fails with `npm ci` EUSAGE, first suspect npm-version mismatch, not a missing package.

## Deploy workflow

`.github/workflows/deploy.yml`: push to `main` + `workflow_dispatch`, derive `BASE_PATH`, `npm ci`, `npm run build`, copy `dist/index.html` → `dist/404.html` (SPA fallback), upload artifact, deploy Pages. Node 22 via `setup-node@v4`.

## Verification before claiming deploy success

- `npx npm@10 ci --dry-run` exit 0.
- `npm run lint` 0 error; `npm run build` exit 0.
- Check GitHub Actions run status if available; do not claim success from local build only.
