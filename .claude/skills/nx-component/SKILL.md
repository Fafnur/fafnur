---
name: nx-component
description: Generate Angular component in the fafnur NX monorepo following project conventions. Activate when user asks to "create component", "add component", "generate component", "создать компонент", "добавить компонент", or requests a new UI element in any lib.
---

# NX Component Generator — fafnur

## Step 1: Determine the path

Ask the user (or infer from context) the full path to the component inside `libs/`.

The path format: `libs/<feature>/<lib>/src/lib/<feature-name>/<component-name>/<component-name>`

Examples:
- `libs/ui/buttons/src/lib/icon-button/icon-button`
- `libs/about/page/src/lib/experience/experience-card/experience-card`
- `libs/home/page/src/lib/hero/hero-section/hero-section`

## Step 2: Run the NX generator

Always use the NX generator — never create files manually.

```bash
yarn nx g @nx/angular:component <full-path>
```

Example:
```bash
yarn nx g @nx/angular:component libs/ui/buttons/src/lib/icon-button/icon-button
```

Generator defaults from `nx.json`:
- `style=scss`
- `changeDetection=OnPush`
- `prefix=fafnur`

Use `--dry-run` to preview before generating:
```bash
yarn nx g @nx/angular:component <full-path> --dry-run
```

## Step 3: Apply project conventions to the generated component

After generation, update the `.ts` file to match these conventions.

### Component structure

```typescript
import { ChangeDetectionStrategy, Component, inject, input, computed, signal } from '@angular/core';

@Component({
  selector: 'fafnur-component-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './component-name.html',
  styleUrl: './component-name.scss',
  host: { class: '' },
})
export class ComponentName {
  // Inputs — $ prefix, alias without $
  readonly $value = input.required<Type>({ alias: 'value' });
  readonly $optional = input<boolean>(false, { alias: 'optional' });

  // Services via inject()
  private readonly someService = inject(SomeService);

  // Internal state
  readonly $computed = computed(() => this.$value());
}
```

### Signal conventions

| Kind | Pattern |
|---|---|
| Required input | `readonly $name = input.required<Type>({ alias: 'name' })` |
| Optional input with default | `readonly $name = input<Type>(default, { alias: 'name' })` |
| Number input | `readonly $size = input<number>(16, { alias: 'size', transform: numberAttribute })` |
| Output | `readonly $event = output<Type>({ alias: 'event' })` |
| Writable signal | `readonly $state = signal<Type>(initial)` |
| Computed | `readonly $derived = computed(() => this.$source())` |

Rule: **alias = property name without `$`** — used in templates as `[name]="..."`.

### Styling

- Tailwind CSS only — `.scss` file stays empty
- Classes go in `host: { class: '...' }` on the component
- Dark mode: `dark:`, responsive: `sm:`, `md:`, `lg:`

### Template patterns

```html
<!-- Signal call -->
{{ $name() }}

<!-- Binding -->
[prop]="$value()"

<!-- Local variable -->
@let list = $items();

<!-- Control flow -->
@if ($condition()) { }
@for (item of $list(); track item.id) { }
@switch ($status()) {
  @case ('active') { }
  @default { }
}
```

### i18n (when needed)

TypeScript:
```typescript
readonly label = $localize`:ComponentName|Description:Text here`;
```

Template:
```html
<span i18n="ComponentName|Description">Text here</span>
```

## Step 4: Export from index.ts

Add the component to the library's `src/index.ts`:

```typescript
export * from './lib/feature-name/component-name/component-name';
```

## Step 5: Write a basic spec

The generated `.spec.ts` should follow this pattern:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentName } from './component-name';

describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
    // Set required inputs:
    // fixture.componentRef.setInput('inputName', value);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

For components with routing:
```typescript
providers: [provideRouter([])]
```

For components with services:
```typescript
providers: [{ provide: SomeService, useValue: mockService }]
```

Run tests:
```bash
yarn nx test <lib-name>
yarn nx test <lib-name> --watch
```
