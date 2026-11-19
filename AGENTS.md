# AGENTS.md: Agent Rules

Safety-first rules for AI coding agents (OpenCode or any runtime that reads `AGENTS.md`).
Read this before any workflow or implementation step.

**Precedence:** Guardrails > Project Workflow > Docs Adapter. If rules conflict, the higher block wins.

**Template version:** 1.2.0 · **License:** MIT (see `LICENSE`)

## 1. Guardrails

Safety-first constraints for agent behavior.

### 1.1 Editing safety

- **Question vs implementation:** if the user asks a question (e.g. "this is a question", "just check"), answer only. Never edit files until explicitly told to implement. This applies even when you notice improvements: report them instead of applying them.
- **Scope guard:** do not refactor, delete, or "improve" beyond the asked scope. Spot problems outside scope? Report them; do not fix them silently. Proactive tool usage (section 2.1) stays inside the asked task and never expands the scope. Proactive means choosing the right tools for the task, not doing extra work.
- **Re-scan before editing:** never edit from memory of a file's earlier state. Re-read it fresh every time. Content you did not write must be preserved and built on, never discarded, reverted, overwritten, or "fixed", unless the user explicitly asks to replace, refactor, or remove it. If a conflict with the task appears, stop and report instead of silently adapting.
- **File handling:** preserve the existing file encoding and line endings unless the task is explicitly about them.
- **Foreign changes:** files shown in `git status` that you did not change belong to the user/another agent. Report them; never stash/restore/commit/revert them. Build byproducts (e.g. `npm run build`, `composer install`) also regenerate files; expected noise, never revert or commit unless asked.
- **Destructive operations need an explicit yes:** never run `git rm` on tracked files, `git reset --hard`, `git clean`, `git restore`/`git checkout -- <file>`, `git branch -D`, `git tag -d`, `git rebase`, `git commit --amend` on pushed commits, force-push, `rm -rf` outside build/temp directories, deleting tracked files, or dropping published assets without explicit confirmation; when in doubt, list what would be deleted/lost first.
- **Stash guard:** `git stash drop` and `git stash clear` destroy stored work. An explicit yes is required, and show the basis plus a file-stat summary of the stash first; never `git stash` on your own initiative; propose `git stash pop`/`apply` only with the conflict risk stated for a dirty working tree; `git stash list`/`stash show` are safe to read freely.

### 1.2 Git safety

- **Git remote actions:** never `git push` (or set/push upstreams) without explicit request; commits follow repo style.
- **Branch & commit:** do not commit directly to `main`/`master` unless the user explicitly asks; follow the repo's branch naming and commit conventions; keep commits focused (one logical change); never rewrite shared history (rebase/amend/force-push) without explicit approval.
- **Push checklist:** before `git push`, show the staged list (what goes up), review `git diff --cached` for secrets, large files, and unintended changes, confirm the target branch, confirm nothing ignored-but-needed (e.g. `.env`) is sneaking in, and make sure the commit message matches repo conventions.
- **[skip ci] rule:** add `[skip ci]` (or `[ci skip]`) only when the commit changes nothing CI verifies: docs, markdown, `AGENTS.md`, skills-lock, `.gitignore`, rules folders. Never for source code, tests, database migrations, dependency manifests/lockfiles, frontend/build files, `.env.example`, or CI workflow files. Adapt the "never" list to your stack; when in doubt, omit it.

### 1.3 Secrets & credentials

- Never read, print, paste, or log secrets (API keys, tokens, passwords, private keys, `.env` contents). Refer to them by name, not value.
- Never commit `.env`, credential files, or secrets. If a secret is found in the repo or in a diff, report it without echoing the value.
- If a task requires a secret, ask the user to provide it through the proper channel; never guess or reuse a secret found elsewhere.

### 1.4 Verification & completion

- **No claim without proof:** never say "done/fixed/working" without verifying evidence (test output, lint/types check, build success, route count, or a browser check for UI), and make that evidence available in the report.
- **Definition of Done:** a task is Done only when tests pass (or no tests apply), lint/typecheck pass, the build succeeds, there are no new warnings/errors, docs are updated when section 3 requires it, and no known regressions remain.
- **Blocked means stop:** stop and report when blocked by missing business logic, permissions, or requirements whose ambiguity materially changes the outcome; do not guess business logic. For minor choices (naming, formatting, default values), pick a reasonable option and note it.
- **Rollback:** if a change breaks the build or tests, stop, report, and revert safely. Non-destructive fixes (new commit) are fine, but destructive reverts need explicit confirmation (see 1.1).

### 1.5 Communication

- **Language:** chat responses use the user's language (whatever they write). Code, comments, and commit messages default to English. Committed docs follow the language set in section 3 (`ADAPT`); an explicit docs-language choice there overrides the English default. The user's language is allowed for reports/notes inside internal folders (e.g. `.ignore/`, `.plan/`, `.feature/`).
- **Routing map first (if present):** before editing, open the project's rules index (e.g. `.ai/rules/index.md` and/or `.agents/rules/master.md` if they exist); load a detail leaf only when its routing-map row matches the task; never load the folder wholesale. A routing map is a Markdown table mapping task types to detail leaves (e.g. `| Database migrations | rules/database.md |`); create detail leaves only for task types that recur.
- **UI verification:** for frontend/view changes, verify at desktop and mobile viewports, check the browser console for errors, check for failed network requests, take screenshots where useful, and check basic accessibility (keyboard navigation, labels).
- **Long sessions end with a handoff:** close with Done / Pending / Decisions-needed so the next session or reviewer can continue without re-deriving context. Done = what changed and how it was verified; Pending = what remains; Decisions-needed = open questions with options.

## 2. Project Workflow Rules

### 2.1 Proactive Skill & Tool Usage Policy

Proactive means choosing the right tools and approach **for the asked task**, not expanding the task.

- **Autonomous execution:** scan, load, and run the relevant skills, tools, or MCP servers without waiting for an explicit `@mention`, but only within the asked scope.
- **Strict trigger bypass:** if the task needs code inspection, database analysis, or testing, invoke the tool automatically instead of asking permission for the tool itself.
- **Questions are not tasks:** if the user asks a question, answer it; do not edit files or "proactively" fix things (see 1.1).
- **Proactive vs scope creep:**
  - ✅ Task: "fix the bug in `X`" → read `X`, run the relevant tests, inspect related callers.
  - ❌ Task: "fix the bug in `X`" → also refactor `Y`, rename variables, update docs, or upgrade dependencies.
  - ✅ Task: "add endpoint `Z`" → inspect routes, models, and tests; add tests for `Z`.
  - ❌ Task: "add endpoint `Z`" → also reformat the repo, add unrelated features, or change unrelated modules.
- If a proactive step would go beyond the asked scope, report it instead of doing it.

### 2.2 End-to-End Workflow (A-Z)

Whenever you receive a task to create, fix, or modify a feature, execute the following sequential workflow automatically within a single session:

1. **Analysis & Context Scan:** read and gather the entire code structure of the related module from end-to-end (A-Z) using available tools or file searches before modifying anything.
2. **Implementation:** write or refactor code strictly adhering to the project's language/framework conventions and existing project patterns.
3. **Dynamic Testing:**
   - Do not blindly rely on or rigidly stick to pre-existing tests if they no longer fit the current context. Instead, adapt, modify, or add new tests tailored specifically to the exact behavior, edge cases, and conditions occurring during the current implementation.
   - Run the updated test suite to verify the changes; tests must pass and no test may be skipped without a stated reason.
   - Run lint/typecheck and the build; fix new warnings/errors.
   - If the task involves frontend/view changes, follow the UI verification checklist in 1.5.
4. **Documentation & Formatting:**
   - Create or update documentation files only when: (a) the user explicitly requests it, or (b) section 3 requires it because public behavior/API changed. Pure copy/styling/layout changes do not require doc updates.
   - Internal notes/reports go to internal folders (e.g. `.ignore/`, `.plan/`, `.feature/`, or similar).
   - Project documentation deliverables follow the project's docs workflow rules (section 3).

### 2.3 Communication Style

- Provide clear, structured, and direct summaries focused on the technical changes implemented once the entire end-to-end workflow is complete; also report limitations, risks, and next steps.

### 2.4 Delegation & Task Sizing

- Deploy a sub-agent only for genuinely large/heavy tasks (e.g. mass docs updates, building a module end-to-end, cross-file analysis, or 3+ files / multiple modules) that benefit from parallelism or isolated context.
- For concise tasks, do the work inline to avoid burning context credits and triggering redundant re-reads.
- Deploy a sub-agent only when the runtime supports it and the current agent acts as an orchestrator that can consume the result efficiently; if the model can complete the task without a sub-agent, do not deploy one. **If the runtime does not support sub-agents, ignore sub-agent guidance entirely and work inline.**

### 2.5 Internal Notes Hygiene

- Internal notes/reports (e.g. `.ignore/`, `.plan/`, `.feature/`, `docs/.local/`, or similar) must never be committed.
- If such a folder does not exist when needed, create it.
- Ensure the folder contains a `.gitignore` with exactly:
  ```
  *
  !.gitignore
  ```
  If the `.gitignore` is missing, create it with the content above. If it exists with different content, do not overwrite it. Report the mismatch and ask before changing (guardrail 1.1 applies).
- Never place committed deliverables inside these folders.

### 2.6 Dependency Management

- Prefer existing dependencies; add a package only when necessary and justified.
- Pin versions (exact or lockfile-resolved); update the lockfile with the change.
- Never install unvetted or typosquatted packages; report major version bumps and breaking changes.

## 3. Docs Workflow Rules (Adapter)

**If your project has no docs workflow, delete this section.**

**This section is a per-project adapter, not a core rule.** Adapt the `ADAPT` fields below to your stack before use. The core guardrails and project workflow remain portable.

Project documentation deliverables (e.g. `docs/`, README, API docs, changelog). Internal working notes are NOT governed here.

### 3.1 Site & tooling (ADAPT)

Describe the doc tool (e.g. VitePress, Docusaurus, MkDocs) and its config/commands; if no site, use plain Markdown under `docs/`.

### 3.2 Scope

Committed documentation deliverables only; never commit build artifacts (e.g. `dist/`, `cache/`) or internal notes (e.g. `docs/.local/`). Internal notes folders must follow Internal Notes Hygiene (create folder + `.gitignore` with `*` / `!.gitignore`), see 2.5.

### 3.3 Location & structure (ADAPT)

Define where docs live and the folder layout (e.g. `architecture/`, `modules/`, `guides/`, `reference/`). If multilingual, specify the mirror path and that new/renamed pages must be registered in each locale's navigation config.

### 3.4 Language (ADAPT)

Default language for committed docs (e.g. English) and where translations live; internal notes may use the user's language.

### 3.5 When to create/update

Update docs when: (a) the user explicitly requests it, or (b) public behavior/API changes make the docs stale. Pure copy/styling/layout changes do not require doc updates. This is the single source of truth for the docs policy; section 2.2.4 defers to it.

### 3.6 On a docs update request

- Deploy a sub-agent if possible to understand the existing structure and apply updates that fit it (see 2.4 "Delegation & Task Sizing"); fall back to inline for small edits. If the runtime does not support sub-agents, work inline.
- Do not perform direct translation; multilingual parity must be handled deliberately (e.g. via sub-agent or a dedicated pass), not auto-translated inline.
- Do not update the changelog as part of a docs update.

### 3.7 When updating the changelog

- First inspect its structure and conventions before editing.
- Verify state via `git status` (and related) to confirm what changed and avoid duplicating/stale entries; do not fabricate entries.

### 3.8 Format (ADAPT)

Markdown conventions; consistent headings, code blocks with language tags, diagrams in a designated folder; examples must match the codebase.

### 3.9 Review

Run the docs build (if any) to catch broken links/dead pages; verify navigation/parity registration; do not leave placeholder content.

### 3.10 Delegation

Mass documentation updates may use a sub-agent (see 2.4 "Delegation & Task Sizing"); small single-file edits stay inline. If the runtime does not support sub-agents, work inline.