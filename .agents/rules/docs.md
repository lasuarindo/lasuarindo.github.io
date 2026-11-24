# Docs Rules

Documentation workflow for `docs/`. Load for any docs work. Replaces the old "Docs Adapter" section in `AGENTS.md`.

## Tooling

- Current: **VitePress 1.6** — config `docs/.vitepress/config.js`, scripts `docs:dev`, `docs:build`, `docs:preview`.
- Rspress is installed but migration is pending. Until migration completes, keep updating VitePress config and its sidebar.
- Build check: `npm run docs:build` (must exit 0, no broken links, no dead pages).

## Scope

Committed deliverables: `docs/**/*.md`, `docs/.vitepress/config.js`, README. Never commit `docs/.vitepress/dist`, `docs/.vitepress/cache`, or future `docs/.rspress/` output. Internal notes must never be committed.

## Structure

Flat layout:
```
docs/index.md
docs/introduction.md
docs/getting-started.md
docs/project-structure.md
docs/architecture.md
docs/configuration.md
docs/styling.md
docs/deployment.md
docs/pages/{home,about-us,services,contact,privacy-policy}.md
docs/.vitepress/config.js
```
New or renamed pages must be registered in the nav/sidebar.

## Language

Default for committed docs: **English**. Internal notes may use Indonesian. Do not auto-translate; any translated page must be a deliberate, separate pass. Do not invent company facts, names, or numbers — verify against project sources before writing them into docs.

## When to update

- User explicitly requests it, or public behavior/tooling changed and docs are stale (e.g. VitePress → Rspress, i18n library swap).
- Pure copy/styling/layout changes do not require doc updates.
- Do not update the changelog as part of a docs update. Inspect its structure first if asked separately; verify via `git status`; never fabricate entries.

## Format

Markdown, consistent headings, fenced code blocks with language tags, English prose. Examples must match current code (React 19, Vite 8, Tailwind v4, i18next, VitePress/Rspress). Use `design-doc-mermaid` skill for diagrams when useful.

## Review

Run `npm run docs:build`, verify nav/sidebar registration of every page, no placeholder content, no stale tool references.

## Delegation

Mass doc updates or the Rspress migration may use a sub-agent; small single-file edits inline.
