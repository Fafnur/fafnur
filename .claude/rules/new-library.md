# New Library Checklist

After generating any new library with NX, always apply these steps.

## 1. Fix `index.ts` — default export (pages only)

Libraries used in routing (`loadComponent`) need a default export. This applies to:
- libraries ending in `/page` (e.g. `home/page`, `not-found/page`)
- rare shared UI used in routing (e.g. `ui/layout`)

```ts
import { MyPage } from './lib/my-page';

export default MyPage;
```

Regular UI/feature libraries (`ui/buttons`, `ui/container`, etc.) use named exports only — no default export needed.

## 2. `tsconfig.lib.json` — add localize types

Any library that uses `$localize` in `.ts` or `i18n` in `.html` must declare the type:

```json
{
  "compilerOptions": {
    "types": ["@angular/localize"]
  }
}
```

## 3. `eslint.config.mjs` — disable no-input-rename

Add to the `files: ['**/*.ts']` rules block (alongside the existing selector rules):

```js
'@angular-eslint/no-input-rename': 'off',
```

## 4. `test-setup.ts` — add localize init

If the library uses i18n, add `@angular/localize/init` at the top:

```ts
import '@angular/localize/init';
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
```

## 5. Reset NX cache

After all setup is done, reset NX so it picks up the new library:

```bash
yarn nx reset
```
