# Rules Index — lasuarindo.github.io

Load only the leaf matching the current task. Do not read the whole folder.

| Task | Rule file |
|---|---|
| Any editing, destructive op, verification, communication | `safety.md` |
| Feature implementation, testing, delegation, dependencies, internal notes | `workflow.md` |
| Docs work (`docs/`), Rspress, docs language | `docs.md` |
| Source layout, routes, components, i18n, styling conventions | `structure.md` |
| Commit, push, branch, lock file, deploy workflow | `git.md` |

Precedence: `safety.md` > `workflow.md` > project-specific leaves. `AGENTS.md` is always auto-loaded and is the short entry point.
