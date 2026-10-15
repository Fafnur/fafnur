---
name: e2e
description: Run, write and debug Playwright e2e tests of the fafnur site with minimal time and output. Activate when user asks to "run e2e", "fix e2e", "write e2e", "debug e2e", "прогони e2e", "почини e2e", "напиши e2e тест", or when an e2e failure needs investigating.
---

# e2e — fafnur

Playwright tests live in `apps/fafnur-e2e/src`. They run against the **built static site** (`fafnur:serve-static`,
http://localhost:4200), not the dev server: the `e2e` target builds the app first.

Projects (`apps/fafnur-e2e/playwright.config.ts`): `chromium` (desktop), `mobile-chrome` (Pixel 7),
`tablet-chrome` (820×1180). Only Chromium is installed: `yarn playwright install chromium`.

## Running — narrow first, full suite last

Full runs print ~130 results. While working on one thing, narrow it down:

```bash
yarn nx e2e fafnur-e2e -- novel                         # one spec file (substring of the path)
yarn nx e2e fafnur-e2e -- --project=chromium novel      # one viewport
yarn nx e2e fafnur-e2e -- --grep "Play again"           # tests by title
yarn nx e2e fafnur-e2e -- --grep "Play again" --repeat-each=5   # check a fix for flakiness
```

Always redirect output to a file in the scratchpad and read only the summary and failures:

```bash
yarn nx e2e fafnur-e2e -- novel > <scratchpad>/e2e.log 2>&1; echo EXIT $?
sed 's/\x1b\[[0-9;]*m//g' <scratchpad>/e2e.log | grep -E "passed|failed|flaky|Error:|^\s+[+-] " | head -40
```

Run the full suite (`yarn e2e`) once at the end, before reporting the task as done.

If a server is already running on port 4200 locally, Playwright reuses it — make sure it serves the **current**
build (stop it, or run `yarn build` first), otherwise tests check stale code.

## Debugging a failure

1. Read `dist/.playwright/apps/fafnur-e2e/test-output/<test-name>-<project>/error-context.md` — it contains the
   accessibility snapshot of the page at the moment of failure. This is usually enough; do not take screenshots
   or rerun the whole suite to "see what happens".
2. Failing only on `mobile-chrome`/`tablet-chrome` → suspect layout (hidden elements, other menu) or timing.
3. For live investigation write a short throwaway Playwright script (use `browser.newContext()` — axe requires it)
   against `npx http-server dist/apps/fafnur/browser -p 4300 -s`, log what you need, delete the script.
4. Fix the cause, then rerun only the failing tests with `--repeat-each=5`.

## Writing tests

- Locators: `getByRole`/`getByText` with the **Russian** texts (the build is `ru`), component selectors
  (`fafnur-novel-window`) for structure. No CSS classes — Tailwind classes change.
- Never `waitForTimeout` or `waitForLoadState('networkidle')` (lint rule `playwright/no-networkidle`) — wait for
  an element or use web-first assertions (`expect(locator).toBeVisible()`).
- After an action that re-renders, wait for the new state (`expect(dialog).not.toHaveText(before)`) before the
  next action.
- Novel: the dialog scrolls smoothly after every step, so mouse clicks on choices can hit a different button.
  Pick choices with digit keys (`page.keyboard.press('2')`) — see `playToEnd` in `novel.spec.ts`.
- `quality.spec.ts` — axe (WCAG 2.1 AA, serious/critical only), internal links, robots/sitemap. A new page must be
  added to its `PAGES`. An axe failure is a real a11y bug: fix the markup or colors, do not disable the rule.
- Light theme accent text is `text-yellow-700` (`yellow-600`/`500` fail contrast on light backgrounds).
