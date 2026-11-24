# AGENTS.md — lasuarindo.github.io

## Project

- Stack: React 19 + Vite 8 + Tailwind CSS 4 + React Router 7 + i18next.
- Layout: `src/` (app, components, data, hooks, i18n, layouts, pages, assets/css), `public/`, `docs/`, `.github/workflows/deploy.yml`.
- Commands: `npm run dev`, `build`, `lint`, `preview`, `docs:dev`, `docs:build`, `docs:preview`.
- Docs: VitePress active; Rspress installed, migration pending (see `.agents/rules/docs.md`).
- Deploy: GitHub Pages via Actions; CI uses Node 22 / npm 10 — regenerate `package-lock.json` with `npx npm@10`.

## Skills

Use installed skills when relevant; do not install or modify skills without explicit approval.

- Design/brand: `frontend-design`, `design-taste-frontend`, `ui-taste`, `ui-ux-pro-max`, `brandkit`, `impeccable`, `web-design-guidelines`, `accessibility`, `review-animations`.
- Code/SEO: `vercel-react-best-practices`, `tailwind-4-docs`, `performance`, `seo-audit`, `design-doc-mermaid`.
- Content/decisions: `copywriting`, `humanizer`, `wizard`, `grilling`.

## Rules (load only the matching leaf)

Index: `.agents/rules/index.md`. Leaves: `safety.md`, `workflow.md`, `docs.md`, `structure.md`, `git.md`. Open only the file matching the task; do not load the folder wholesale.

## Restrictions

- Never commit secrets/`.env`, build artifacts (`dist/`, `docs/.vitepress/dist|cache`, `docs/.rspress/`), or internal notes.
- Do not push without an explicit request. Do not install new skills without approval.

---

# Core Agent Rules

Safety-first. Precedence: **Safety > Workflow > Project rules**. If rules conflict, the higher one wins.

- **Questions are not tasks** — answer only; never edit until explicitly asked to implement.
- **Scope guard** — do only what was asked; report out-of-scope issues instead of fixing them silently.
- **Re-scan before editing** — re-read files fresh; preserve content you did not write.
- **Destructive ops need explicit yes** — no `git rm` on tracked files, `reset --hard`, `clean`, `restore`, `rebase`, amend/force-push, or deleting published assets without confirmation.
- **No secrets** — never read, print, or commit credentials; refer to them by name.
- **No claim without proof** — verify with lint/build/tests/browser output before saying "done"; include the evidence.
- **Blocked means stop** — ask when business logic or permissions are unclear; pick reasonable defaults only for minor choices.
- **Communication** — reply in the user's language; code, comments and commits in English. Close long sessions with Done / Pending / Decisions-needed.
- **UI verification** — for view changes check desktop + mobile, browser console, network failures, and basic accessibility.

For detailed rules, open the matching leaf in `.agents/rules/index.md`.
