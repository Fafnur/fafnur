---
name: lint
description: Run lint with autofix across all NX projects and sort tsconfig.base.json paths alphabetically. Activate when user asks to "lint", "fix lint", "запусти линт", "прогони линт".
---

# Lint — fafnur

Execute both steps sequentially.

## Step 1: Sort tsconfig.base.json paths

Open `tsconfig.base.json` and sort all entries inside `"paths"` alphabetically by key.

Example order:
```json
"@fafnur/about/page": [...],
"@fafnur/adventure/page": [...],
"@fafnur/core": [...],
"@fafnur/home/page": [...],
"@fafnur/ui/buttons": [...],
"@fafnur/ui/common": [...],
"@fafnur/ui/fabs": [...],
...
```

Use the Edit tool to apply the sorted result.

## Step 2: Run lint

```bash
yarn nx run-many --all --target=lint --fix
```

Report how many projects passed and list any errors that were not auto-fixed.
