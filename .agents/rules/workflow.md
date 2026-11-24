# Workflow Rules

Feature/task workflow for this repo. Load with `safety.md`.

## Proactive tool & skill usage

- Scan and load relevant skills/tools/MCP automatically, but only within the asked scope.
- If the task needs code inspection, testing, or browser verification, invoke the tool directly rather than asking permission for the tool itself.
- Question ≠ task: answer only, do not edit "proactively".
- In scope: read related files, run relevant tests, inspect callers. Out of scope: unrelated refactors, renames, upgrades, repo-wide reformatting.
- Report a proactive step that would exceed scope instead of doing it.

## End-to-end workflow

1. **Analysis:** read the related module end-to-end before modifying anything.
2. **Implementation:** follow existing project conventions (see `structure.md`).
3. **Testing:** adapt or add tests for the exact behavior; run lint/typecheck and build; fix new warnings/errors. For UI changes follow the UI verification checklist in `safety.md`.
4. **Docs/formatting:** update docs only when explicitly requested or when public behavior/tooling changed (`docs.md`). Keep internal reports out of commits.

## Delegation

Use a sub-agent only for genuinely large/heavy tasks (multi-file/multi-module, mass docs, isolated context) that benefit from parallelism. Inline for concise tasks. If sub-agents are unavailable, work inline. The orchestrator must supply full context (paths, findings, coverage, questions).

## Internal notes

- Internal notes/reports must never be committed (use any local-only folder; keep its `.gitignore` as `*` + `!.gitignore`).
- If such a folder is absent, create it; never place committed deliverables inside it.

## Dependencies

- Prefer existing dependencies; add one only when justified and vetted. Pin via lockfile.
- **npm version:** regenerate `package-lock.json` with `npx npm@10` (CI Node 22). Local npm 12 changes peer-dependency resolution and breaks `npm ci` (React 18 / `@docsearch/react` issue).
- Verify with `npx npm@10 ci --dry-run` after any dependency change.
- Report major bumps and breaking changes; never install typosquatted packages.

## UI verification

For view changes: desktop + mobile viewports, browser console errors, failed network requests, screenshots where useful, keyboard navigation, labels, sticky/scroll behavior when relevant.
