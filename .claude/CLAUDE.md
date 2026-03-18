# CLAUDE.md — fafnur project context

This file is loaded automatically by Claude Code in every session.
Author: Aleksandr (Александр)

---

## Stack

- **Angular 21**, NX 22, TypeScript ~5.9, Tailwind CSS 4, Vitest 4
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

## Behavior Notes

- If Aleksandr mentions something informational ("I fixed X") — it's context, not a task. Don't take action unless explicitly asked.
- Always follow existing conventions exactly when generating new code.
- Don't create files manually when an NX generator exists.
