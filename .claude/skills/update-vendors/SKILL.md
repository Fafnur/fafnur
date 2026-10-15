---
name: update-vendors
description: Update all project dependencies (Yarn, Nx, Angular, npm packages, agent skills) to latest versions following a safe migration workflow, ending with a merge into develop. Activate when user asks to "update vendors", "update dependencies", "обновить зависимости", "обновить вендоры".
---

# Update Vendors — fafnur

Goal: one branch `feature/vendors` with up to two commits, all checks green, merged into `develop` with `--no-ff`.

**Stop rule:** if any check fails at any step — **stop and report** the failing command and its output. Do not try
to "fix" failures by downgrading random packages or changing code without asking the user first.

The full check used below (the Nx TUI is off in `nx.json`):

```bash
yarn nx run-many -t lint test build e2e
```

## Step 1: Check for uncommitted changes

```bash
git status --porcelain
```

If there are any uncommitted changes — **stop immediately** and tell the user to commit or stash them first.

## Step 2: Create feature branch from develop

```bash
git switch develop
git switch -c feature/vendors
```

If `feature/vendors` already exists — stop and ask the user what to do with it.

## Step 3: Update Yarn

```bash
npm view @yarnpkg/cli-dist version
```

If it is newer than `packageManager` in `package.json` — set `"packageManager": "yarn@<version>"` (edit the field,
keep the rest of `package.json` as is). `yarn -v` must then print the new version (Corepack picks it up).

## Step 4: Run Nx migration

```bash
yarn nx migrate latest
yarn install
```

This updates Nx, Angular, `typescript`, `angular-eslint` and related packages in `package.json` and may create
`migrations.json`.

## Step 5: Run Nx migrations (if migrations.json exists)

```bash
git status --porcelain migrations.json
```

If it is present — run the migrations, then delete the file (it is not kept in the repo):

```bash
yarn nx migrate --run-migrations=migrations.json
rm migrations.json
```

Read the migration output: if a migration reports something to do manually — tell the user.

## Step 6: Fix formatting

Nx migrations may reformat `project.json` and other files differently from the Prettier config:

```bash
yarn nx format:write
```

## Step 7: Install Playwright browsers and run checks

The Playwright version may have changed — install the matching browser first:

```bash
yarn playwright install chromium
yarn nx run-many -t lint test build e2e
```

## Step 8: Commit Nx migration result

```bash
git status --porcelain
```

If there are changes:

```bash
git add -A
git commit -m "[vendors] Nx migrate"
```

Otherwise skip this commit.

## Step 9: Update remaining dependencies

Use `npm-check-updates` to update version strings in `package.json`, excluding packages managed elsewhere:

```bash
npx npm-check-updates@latest -u -p yarn \
  --reject 'nx,@nx/*,@angular/*,@angular-devkit/*,@schematics/angular,angular-eslint,typescript,express,@types/express,@types/node,vitest,@vitest/*'
```

Why these are excluded:

- **`nx`, `@nx/*`, `@angular/*`, `@angular-devkit/*`, `@schematics/angular`, `angular-eslint`, `typescript`** —
  versions are chosen by `nx migrate` (Step 4) to be compatible with each other. `ncu` would jump to versions Nx or
  Angular do not support yet (e.g. a TypeScript major outside the `@angular/build` peer range).
- **`express`** — stays on v4, never v5+: `yarn up express@^4`. **`@types/express`** — update within its current
  major only: `yarn up @types/express@^<current major>`.
- **`@types/node`** — major must match the Node major in `.nvmrc`: `yarn up @types/node@^<major from .nvmrc>`.
- **`vitest`, `@vitest/*`** — must satisfy the peer range of `@angular/build` and `@analogjs/vitest-angular`:
  `node -p 'require("@angular/build/package.json").peerDependencies.vitest'`, then
  `yarn up vitest@<range> @vitest/coverage-v8@<range> @vitest/ui@<range>`.

Show the user the list of **major** upgrades `ncu` made (e.g. `eslint 9 → 10`) before continuing.

Then clean install, so `yarn.lock` reflects the latest resolved versions:

```bash
rm -rf node_modules yarn.lock
yarn install
```

Check peer dependencies of the build tooling — a major bump from `ncu` must not fall outside them:

```bash
yarn explain peer-requirements | grep '✘ @fafnur/source@workspace:. provides'
```

Must print nothing (other `✘ … doesn't provide …` lines are pre-existing noise inside packages, ignore them). A line
like `provides vitest@npm:5.0.4 to @angular/build@npm:22.1.9` means a package from `package.json` is outside the
range its consumer requires (`yarn explain peer-requirements <hash>` shows the range). Revert that package to the
highest version in the required range (`yarn up <pkg>@<range>`) and tell the user.

## Step 10: Update agent skills

```bash
npx skills update -p -y
```

Updates `.claude/skills/angular-developer` and `skills-lock.json`. Do not edit those skill files by hand.

## Step 11: Run checks after clean install

```bash
yarn playwright install chromium
yarn nx run-many -t lint test build e2e
yarn nx format:check
```

## Step 12: Commit dependency updates

```bash
git status --porcelain
```

If there are changes:

```bash
git add -A
git commit -m "[vendors] Refresh dependencies"
```

Otherwise skip this commit.

## Step 13: Update CLAUDE.md

If a major version changed (Angular, Nx, TypeScript, Tailwind, Vitest) — update the **Stack** section of
`.claude/CLAUDE.md` and amend it into the last commit.

## Step 14: Merge into develop or clean up

```bash
git log develop..feature/vendors --oneline
```

If there are commits — merge into develop (do not push, the user does it):

```bash
git switch develop
git merge feature/vendors --no-ff -m "Merge branch 'feature/vendors' into develop"
git branch -d feature/vendors
```

If there are **no commits** — delete the branch and report that everything is already up to date:

```bash
git switch develop
git branch -D feature/vendors
```

Report to the user: Yarn/Nx/Angular/TypeScript versions before → after, major upgrades from Step 9, Nx migrations
that ran, any manual follow-ups.
