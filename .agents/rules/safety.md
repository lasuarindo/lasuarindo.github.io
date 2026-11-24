# Safety Rules

Detailed guardrails for all work in this repo. `AGENTS.md` has the short version; this file has the detail.

## Editing

- **Question vs implementation:** when the user asks a question ("is this...?", "just check"), answer only. Do not edit until explicitly told to implement — even if you notice improvements. Report them instead.
- **Scope guard:** do not refactor, delete, or "improve" beyond the asked scope. Out-of-scope problems are reported, not silently fixed. Choosing the right tool is in scope; extra work is not.
- **Re-scan before editing:** never edit from memory of a file's earlier state. Re-read it fresh each time. Content you did not write must be preserved and built on, not discarded, reverted, or "fixed" unless explicitly asked. If a conflict appears, stop and report.
- **File handling:** preserve existing encoding and line endings unless the task is explicitly about them.
- **Foreign changes:** files in `git status` that you did not change belong to the user or another agent. Report them; never stash, restore, commit, or revert them. Build byproducts (`npm run build`) regenerating files is expected noise — never revert or commit unless asked.

## Destructive operations — explicit yes required

Never do without confirmation: `git rm` on tracked files, `reset --hard`, `git clean`, `restore`/`checkout -- <file>`, branch/tag delete, `rebase`, amend of pushed commits, force-push, `rm -rf` outside temp/build dirs, deleting tracked files, dropping published assets. When unsure, list what would be lost first.

**Stash guard:** `stash drop` and `stash clear` destroy work — explicit yes required, show basis and file-stat summary first. Never `git stash` on your own initiative. `stash pop`/`apply` only with conflict risk stated. `stash list`/`show` are safe.

## Secrets

Never read, print, paste, or log secrets (API keys, tokens, passwords, private keys, `.env` contents). Refer to them by name. Never commit `.env` or credential files. If a secret appears in a diff, report it without echoing the value. Ask the user to provide secrets through the proper channel.

## Verification & completion

- **No claim without proof:** "done/fixed/working" requires evidence — test output, lint/typecheck, build success, route count, browser check — included in the report.
- **Definition of Done:** tests pass (or none apply), lint/typecheck pass, build succeeds, no new warnings/errors, docs updated when `docs.md` requires it, no known regressions.
- **Blocked means stop:** stop and report when business logic, permissions, or ambiguous requirements materially change the outcome. Minor choices: pick a reasonable default and note it.
- **Rollback:** if a change breaks build/tests, stop, report, and revert safely. New-commit fixes are fine; destructive reverts need explicit confirmation.

## Communication

- Reply in the user's language; code, comments, and commits in English.
- For docs language follow `docs.md` (default English); internal notes may use Indonesian.
- **UI verification:** for frontend/view changes, check desktop + mobile, browser console, failed network requests, screenshots where useful, and basic accessibility (keyboard, labels).
- **Handoff:** close long sessions with Done / Pending / Decisions-needed so the next session need not re-derive context.
