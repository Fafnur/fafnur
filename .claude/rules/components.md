# Component Conventions

## Signals — `$` prefix always

```typescript
readonly $experience = input.required<Experience>({ alias: 'experience' });
readonly $checked = input<boolean>(false, { alias: 'checked' });
readonly $size = input<number>(16, { alias: 'size', transform: numberAttribute });
readonly $currentTheme = signal<Theme>('system');
readonly $hasChoices = computed(() => this.$choices().length > 0);
```

Rule: alias = property name without `$` — used in templates as `[experience]="..."`.

## Components

```typescript
@Component({
  selector: 'fafnur-feature-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...],
  templateUrl: './feature-name.html',
  host: { class: 'tailwind classes here' },
})
export class FeatureName {
  readonly $input = input.required<Type>({ alias: 'input' });
  private readonly service = inject(SomeService);
}
```

- Always **standalone**
- **No `styleUrl`** — `.scss` files do not exist in this project, Tailwind only
- **No `imports: []`** — omit the imports array entirely when empty
- Services via `inject()`, not constructor
- Dual selector example: `selector: 'fafnur-buttons,[fafnurButtons]'`
- **Event listeners in `host`** — never use `@HostListener` decorator:
  ```typescript
  host: {
    class: 'fixed bottom-6 right-6 z-50',
    '(document:keydown.escape)': 'onEsc()',
  }
  ```
- **Event handler naming** — `on` prefix + semantic action name, no event-type suffix:
  - `onExit` ✓ — not `onExitClick`
  - `onEsc` ✓ — not `onEscKey`
  - `onSelect` ✓ — not `onSelectChange`

## File / Folder Structure

```
lib/
  feature-name/
    feature-name.ts
    feature-name.html
    feature-name.spec.ts
    sub-component/           ← used only inside feature-name
      sub-component.ts
      sub-component.html
      sub-component.spec.ts
      sub-sub-component/     ← used only inside sub-component
        ...
```

**Decomposition rule:** if a component is used in only one parent — place it as a subdirectory of that parent, not at the same level. Depth follows usage scope.

```
about/
  about-title/
    about-title.ts
    about-title-slogan/      ← only used in about-title
      about-title-slogan.ts
```

Only move a component up to a shared level when it is used in more than one place.

## Styling

- **Tailwind CSS only** — `.scss` files usually empty
- Classes in `host: { class: '...' }`
- Dark mode: `dark:`, responsive: `sm:`, `md:`, `lg:`

## Templates

```html
{{ $name() }}
[prop]="$value()"
@let list = $experience().description;
@for (item of $list(); track item) { }
@if ($condition()) { }
```

## Navigation

`PATHS` from `@fafnur/core` contains all internal app routes:

```typescript
import { PATHS } from '@fafnur/core';

// PATHS.home = '/', PATHS.about, PATHS.adventure, PATHS.novels
```

- **Internal links** → always `[routerLink]="paths.home"` + `RouterLink` in imports
- **External links** (mailto, https) → plain `href`
- Never use `href="/"` for internal routes — causes full page reload
