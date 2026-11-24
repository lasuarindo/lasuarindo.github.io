# Docs Rules

Documentation workflow for `docs/`. Load for any docs work. Replaces the old "Docs Adapter" section in `AGENTS.md`.

## Tooling

- Current: **Rspress v2** (`@rspress/core`), config `rspress.config.ts` at repo root.
- Scripts: `docs:dev`, `docs:build`, `docs:preview` → `rspress dev|build|preview docs`.
- Build check: `npm run docs:build` (must exit 0, no broken links, no dead pages).
- Import `defineConfig` from `@rspress/core` (v2); do not use `rspress/config` (v1) or VitePress config.

## Scope

Committed deliverables: `docs/**/*.md`, `rspress.config.ts`, README. Never commit `doc_build/` (build output). Internal notes must never be committed.

## Structure

Config lives at repo root; pages are flat under `docs/`:
```
rspress.config.ts
docs/index.md
docs/introduction.md
docs/getting-started.md
docs/project-structure.md
docs/architecture.md
docs/configuration.md
docs/styling.md
docs/deployment.md
docs/pages/{home,about-us,services,contact,privacy-policy}.md
```
New or renamed pages must be registered in `themeConfig.nav` / `themeConfig.sidebar` in `rspress.config.ts`.

## Language

Default for committed docs: **English**. Internal notes may use Indonesian. Do not auto-translate; any translated page must be a deliberate, separate pass. Do not invent company facts, names, or numbers — verify against project sources before writing them into docs.

## When to update

- User explicitly requests it, or public behavior/tooling changed and docs are stale (e.g. i18n library swap).
- Pure copy/styling/layout changes do not require doc updates.
- Do not update the changelog as part of a docs update. Inspect its structure first if asked separately; verify via `git status`; never fabricate entries.

## Format

Markdown, consistent headings, fenced code blocks with language tags, English prose. Examples must match current code (React 19, Vite 8, Tailwind v4, i18next, Rspress v2). Use `design-doc-mermaid` skill for diagrams when useful.

## Review

Run `npm run docs:build`, verify nav/sidebar registration of every page, no placeholder content, no stale tool references.

## Delegation

Mass doc updates may use a sub-agent; small single-file edits inline.
