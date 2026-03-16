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

## NX Generators

**ALWAYS use NX generators** instead of manually creating files. Generator defaults in `nx.json`: `style=scss`, `changeDetection=OnPush`, `prefix=fafnur`.

```bash
# Component (path = full path including component folder and name)
yarn nx g @nx/angular:component libs/about/page/src/lib/my-feature/my-component/my-component

# Library
yarn nx g @nx/angular:library libs/ui/icons --name=ui/icons

# Service
yarn nx g @nx/angular:service libs/core/src/lib/my-service/my-service

# Pipe / Directive
yarn nx g @nx/angular:pipe libs/core/src/lib/my-pipe/my-pipe
yarn nx g @nx/angular:directive libs/ui/buttons/src/lib/my-dir/my-dir

# Dry run (preview)
yarn nx g @nx/angular:component path/to/component --dry-run
```

---

## Code Conventions

### Signals — `$` prefix always

```typescript
readonly $experience = input.required<Experience>({ alias: 'experience' });
readonly $checked = input<boolean>(false, { alias: 'checked' });
readonly $size = input<number>(16, { alias: 'size', transform: numberAttribute });
readonly $currentTheme = signal<Theme>('system');
readonly $hasChoices = computed(() => this.$choices().length > 0);
```

Rule: alias = property name without `$` — used in templates as `[experience]="..."`.

### Components

```typescript
@Component({
  selector: 'fafnur-feature-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...],
  templateUrl: './feature-name.html',
  styleUrl: './feature-name.scss',
  host: { class: 'tailwind classes here' },
})
export class FeatureName {
  readonly $input = input.required<Type>({ alias: 'input' });
  private readonly service = inject(SomeService);
}
```

- Always **standalone**
- Services via `inject()`, not constructor
- Dual selector example: `selector: 'fafnur-buttons,[fafnurButtons]'`

### File / Folder Structure

```
lib/
  feature-name/
    feature-name.ts
    feature-name.html
    feature-name.scss
    feature-name.spec.ts
    sub-component/
      sub-component.ts
      ...
```

### Styling

- **Tailwind CSS only** — `.scss` files usually empty
- Classes in `host: { class: '...' }`
- Dark mode: `dark:`, responsive: `sm:`, `md:`, `lg:`

### Templates

```html
{{ $name() }}
[prop]="$value()"
@let list = $experience().description;
@for (item of $list(); track item) { }
@if ($condition()) { }
```

### i18n

```typescript
company: $localize`:Context|:Text here`,
```
```html
<h2 i18n="About Page|Experience Title">Experience</h2>
```

---

## Testing

### test-setup.ts (each lib)

```typescript
import '@angular/localize/init';  // REQUIRED if lib uses i18n / $localize
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
```

### Basic component test

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Required inputs → `setInput`

```typescript
fixture.componentRef.setInput('experience', mockExperience); // alias as key
await fixture.whenStable();
```

### Components with RouterLink/RouterOutlet

```typescript
imports: [MyComponent],
providers: [provideRouter([])],
```

### Service mocking

```typescript
providers: [{ provide: ThemeService, useValue: mockThemeService }]
```

### Module mocking (vi.mock)

```typescript
// Use function(), not arrow => for constructors
const mockStory = vi.hoisted(() => ({
  canContinue: false as boolean,
  Continue: vi.fn(function () { return null; }),
}));

vi.mock('some-module', () => ({
  SomeClass: vi.fn(function () { return mockStory; }),
}));
```

### Run tests

```bash
yarn test                          # all
yarn nx test about/page            # single lib
yarn nx test about/page --watch    # watch mode
```

---

## Behavior Notes

- If Aleksandr mentions something informational ("I fixed X") — it's context, not a task. Don't take action unless explicitly asked.
- Always follow existing conventions exactly when generating new code.
- Don't create files manually when an NX generator exists.
