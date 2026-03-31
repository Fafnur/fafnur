---
name: update-vendors
description: Update all project dependencies to latest versions following a safe migration workflow. Activate when user asks to "update vendors", "update dependencies", "обновить зависимости", "обновить вендоры".
---

# Update Vendors — fafnur

## Step 1: Check for uncommitted changes

```bash
git status --porcelain
```

If there are any uncommitted changes — **stop immediately** and tell the user to commit or stash them first.

## Step 2: Create feature branch

```bash
git checkout -b feature/vendors
```

## Step 3: Run NX migration

```bash
yarn nx migrate latest
```

This updates NX and Angular-related packages in `package.json` and may generate a `migrations.json` file.

Then install the new dependencies:

```bash
yarn install
```

## Step 4: Run NX migrations (if migrations.json exists)

Check whether `migrations.json` was created or modified:

```bash
git status --porcelain migrations.json
```

If `migrations.json` is present in git status output — run the migrations:

```bash
yarn nx migrate --run-migrations=migrations.json
```

## Step 5: Run tests and build

```bash
yarn test
```

If any tests fail — **stop and report the failures**. Do not proceed.

```bash
yarn build
```

If the build fails — **stop and report the errors**. Do not proceed to commit.

## Step 6: Commit NX migration result

Check if there are any changes to commit:

```bash
git status --porcelain
```

If there are changes — commit them:

```bash
git add -A
git commit -m "[vendors] Updating vendors"
```

If there are no changes — skip this commit.

## Step 7: Update remaining dependencies

Read `package.json` and identify all dependencies and devDependencies.

Update rules:
- **`@angular/*`** — update all to latest
- **`express`** — update to latest **v4** only (e.g. `^4.x.x`), never v5+
- **`typescript`** — **skip** (already handled by NX migration)
- **All other packages** — update to latest

Use `yarn add` / `yarn add -D` to update packages in batches by category. After updating, run:

```bash
yarn install
```

## Step 8: Run tests and build again

```bash
yarn test
```

If any tests fail — **stop and report the failures**. Do not proceed.

```bash
yarn build
```

If the build fails — **stop and report the errors**. Do not proceed to commit.

## Step 9: Commit dependency updates

Check if there are any changes to commit:

```bash
git status --porcelain
```

If there are changes — commit them:

```bash
git add -A
git commit -m "[vendors] Updating vendors other"
```

If there are no changes — skip this commit.

## Step 10: Clean reinstall to refresh yarn.lock

Delete `node_modules` and `yarn.lock`, then reinstall from scratch so `yarn.lock` reflects the latest resolved versions:

```bash
rm -rf node_modules yarn.lock
yarn install
```

## Step 11: Run tests and e2e after clean install

```bash
yarn test
```

If any tests fail — **stop and report the failures**. Do not proceed.

```bash
yarn nx e2e fafnur-e2e --no-tui
```

If any e2e tests fail — **stop and report the failures**. Do not proceed to commit.

## Step 12: Commit refreshed yarn.lock

Check if `yarn.lock` has changed:

```bash
git status --porcelain
```

If there are changes — commit them:

```bash
git add -A
git commit -m "[vendors] Refresh yarn.lock"
```

If there are no changes — skip this commit.

## Step 13: Merge into develop or clean up

Check if the feature branch has any commits ahead of develop:

```bash
git log develop..feature/vendors --oneline
```

If there are commits — merge into develop:

```bash
git checkout develop
git merge feature/vendors --no-ff -m "[vendors] Merge feature/vendors into develop"
git branch -d feature/vendors
```

If there are **no commits** (nothing changed across all steps) — delete the branch and report that everything is already up to date:

```bash
git checkout develop
git branch -d feature/vendors
```

Then tell the user: all dependencies are already up to date, no changes were needed.
