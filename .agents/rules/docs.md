# Docs Rules

Documentation workflow for `docs/`. Load for any docs work. Replaces the old "Docs Adapter" section in `AGENTS.md`.

## Tooling

- Current: **Rspress v2** (`@rspress/core`), config `rspress.config.ts` at repo root.
- Scripts: `docs:dev`, `docs:build`, `docs:preview` → `rspress dev|build|preview docs`.
- Build check: `npm run docs:build` (must exit 0, no broken links, no dead pages).
- Import `defineConfig` from `@rspress/core` (v2). The v1 `rspress/config` entry point and legacy static-site docs configs do not apply.
- `rspress.config.ts` holds site-level settings only (`root`, `title`, `lang`, `logo`, `head`, `globalStyles`, `plugins`, `themeConfig.socialLinks`). Do not add `themeConfig.nav` or `themeConfig.sidebar`; navigation is file-based.

## Scope

Committed deliverables: `docs/**/*.md`, `docs/_nav.json`, `docs/**/_meta.json`, `docs/theme.css`, `docs/public/*`, `rspress.config.ts`, `theme/index.tsx`, README. Never commit `doc_build/` (build output). Internal notes (for example `.ignore/`) must never be committed.

## Structure

Config lives at repo root; pages are grouped in sections under `docs/`:

```
rspress.config.ts
theme/index.tsx                  # ESM overrides for the docs home
docs/index.md                    # home, pageType: home
docs/_nav.json                   # navbar
docs/theme.css
docs/public/logo.png
docs/docs/_meta.json             # sidebar for Docs
docs/docs/*.md                   # app docs + guide-* pages
docs/for-everyone/_meta.json + *.md
docs/pages/_meta.json + *.md
docs/changelog/_meta.json + index.md
```

The navbar comes from `docs/_nav.json`; each section's sidebar comes from its own `_meta.json` using `section-header`, `file`, `divider` and `custom-link` entries. A new or renamed page must be added to its folder's `_meta.json`; a new section also needs an entry in `docs/_nav.json` and its own `_meta.json`. Current state: four navbar items and five Docs sidebar section headers (Start here, Understand, Ship it, Docs Guide, More).

## Language

Default for committed docs: **English**. Internal notes may use Indonesian. Do not auto-translate; any translated page must be a deliberate, separate pass. Do not invent company facts, names, or numbers — verify against project sources before writing them into docs.

## When to update

- User explicitly requests it, or public behavior/tooling changed and docs are stale (e.g. i18n library swap).
- Pure copy/styling/layout changes do not require doc updates.
- Do not update the changelog as part of a docs update. Inspect its structure first if asked separately; verify via `git status`; never fabricate entries.

## Format

Markdown, consistent headings, fenced code blocks with language tags, English prose. Examples must match current code (React 19, Vite 8, Tailwind v4, i18next, Rspress v2). Use `design-doc-mermaid` skill for diagrams when useful.

## Review

Run `npm run docs:build`, verify every page is registered in its `_meta.json` and the navbar in `docs/_nav.json`, confirm `rspress.config.ts` has no `themeConfig.nav` or `themeConfig.sidebar`, and check for placeholder content and stale tool references.

## Delegation

Mass doc updates may use a sub-agent; small single-file edits inline.
