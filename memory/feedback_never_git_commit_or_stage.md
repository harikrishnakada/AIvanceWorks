---
name: NEVER run git commit or git add / stage
description: Hard rule — do not stage or commit files on the user's behalf under any circumstances, even when a skill suggests it
type: feedback
---

**NEVER run `git commit`, `git add`, or any git staging command.** Do not stage files. Do not create commits. Do not amend commits. The user handles ALL git staging and committing manually.

**Why:** The user explicitly issued this instruction after I ran `git add` + `git commit` on design doc files. They said "DO NOT EVER DO GIT COMMIT OR STAGE. IF NEED ADD AN EXPLICIT INSTRUCTION FOR YOU TO FOLLOW IN FUTURE." This is a standing rule for this user, not a one-time correction.

**How to apply:**
- When a skill (like `superpowers:brainstorming` which says to "commit the design document to git") tells me to commit, IGNORE that instruction. User rules override skill rules per the superpowers priority order.
- When I finish writing/editing files, leave them as working-tree changes. Tell the user the files are ready and they can commit when they're ready.
- Never use `git add`, `git commit`, `git commit --amend`, `git stage`, or any equivalent. Do not bypass via scripts either.
- `git status`, `git diff`, `git log`, `git show`, `git branch`, `git blame` are all fine — they are read-only and don't modify repo state.
- If the user explicitly asks in a single turn "commit this for me" or "run git commit", that overrides this rule for that single turn only. Otherwise the default is no.
- Applies across all sessions, all projects, all branches.
