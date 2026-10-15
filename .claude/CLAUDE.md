# CLAUDE.md — fafnur project context

This file is loaded automatically by Claude Code in every session.
Author: Aleksandr (Александр)

---

## Stack

- **Angular 22**, NX 23, TypeScript 6.0, Tailwind CSS 4, Vitest 4, Playwright + axe
- **Package manager**: yarn (never npm/bun)
- **Test runner**: vitest via `@nx/vitest:test` + `@analogjs/vitest-angular`

---

## Project Structure

```
fafnur/
  apps/fafnur/          # Main app
  libs/
    core/               # Services: theme, ink, navigation
    ui/                 # Shared UI: buttons, container, footer, header,
                        #   headline, icons, layout, link, title, unit, common
    about/page/
    adventure/page/
    home/page/
    novels/
  tsconfig.base.json    # Path aliases
  nx.json               # NX config (generator defaults: scss, OnPush, prefix=fafnur)
```

Each library:
```
libs/feature/lib-name/
  src/
    lib/        # Components, services
    index.ts    # Public exports
  project.json
```

---

## Commands

```bash
yarn start           # nx serve fafnur — dev server
yarn build           # nx build fafnur — SSG, ru locale
yarn serve           # nx serve-static fafnur — built static site
yarn test            # unit tests of all projects
yarn lint            # lint of all projects with --fix
yarn e2e             # Playwright against the built static site
yarn check           # lint test build e2e — a task is done when it is green
yarn affected        # the same for affected projects
yarn format          # Prettier
```

The Nx TUI is off in `nx.json` — no need for `--no-tui`.

---

## Skills

- `.claude/skills/angular-developer` — official Angular skill (`angular/skills`): signals, forms, routing,
  SSR/prerender, ARIA, testing. Update: `npx skills update -p`; version pinned in `skills-lock.json`. Never edit
  its files by hand. Where it conflicts with this file — this file wins: Nx generators and targets instead of
  `ng generate`/`ng build`, Tailwind in templates, no component style files.
- Own skills: `e2e`, `update-vendors`, `update-i18n`, `nx-component`, `write-tests`, `lint`.

---

## Git

- Single protected branch `main`: `feature/<name>` from `main`, pushed and merged via a pull request once the CI
  check `Lint, test, build, e2e` is green. No direct pushes to `main`.
- Every merge into `main` is a release: CI runs all checks, generates the sitemap, deploys via rsync and tags the
  commit `vYYYY.MM.DD.N`. Roll back by reverting the PR.
- Commits — `[scope] Short imperative summary` in English: `[e2e] Fix web server`, `[vendors] Nx migrate`.

---

## Behavior Notes

- If Aleksandr mentions something informational ("I fixed X") — it's context, not a task. Don't take action unless explicitly asked.
- Always follow existing conventions exactly when generating new code.
- Don't create files manually when an NX generator exists.
