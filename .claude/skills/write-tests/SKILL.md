АА ---
name: write-tests
description: Write or fill out Angular component tests in the fafnur NX monorepo. Activate when user asks to "write tests", "add tests", "fill out tests", "допиши тесты", "напиши тесты", "добавь тесты", or mentions that tests are auto-generated and need to be completed.
---

# Writing Tests — fafnur

## Test file structure

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

## Setting required inputs

Use `setInput` with the **alias** (name without `$`):

```typescript
fixture.componentRef.setInput('experience', mockExperience);
await fixture.whenStable();
```

Always set required inputs **before** `whenStable()` in `beforeEach`, or per test when values differ.

## Testing projected content (ng-content)

Create a `TestHostComponent` inside the spec file:

```typescript
import { Component } from '@angular/core';

@Component({
  template: `<fafnur-my-component>Projected text</fafnur-my-component>`,
  imports: [MyComponent],
})
class TestHostComponent {}

// In the test:
it('should render projected content', async () => {
  const hostFixture = TestBed.createComponent(TestHostComponent);
  await hostFixture.whenStable();
  const el: HTMLElement = hostFixture.nativeElement;
  expect(el.textContent).toContain('Projected text');
});
```

## Testing host classes

```typescript
it('should have rounded-full class on host', () => {
  const el: HTMLElement = fixture.nativeElement;
  expect(el.classList).toContain('rounded-full');
});
```

## Testing rendered text / DOM content

```typescript
it('should render company name', () => {
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement;
  expect(el.textContent).toContain('Test Company');
});
```

## Testing child elements

```typescript
it('should render all list items', () => {
  fixture.detectChanges();
  const el: HTMLElement = fixture.nativeElement;
  const items = el.querySelectorAll('fafnur-about-experience-item');
  expect(items.length).toBe(3);
});
```

## Mock data

Define mocks at the top of the file, typed with the actual interface:

```typescript
import { Experience } from '../parent-component';

const mockExperience: Experience = {
  company: 'Test Company',
  post: 'Frontend Developer',
  start: 'January 2020',
  end: 'December 2022',
  time: '3 years',
  description: ['Task one', 'Task two'],
};
```

## Components with RouterLink / RouterOutlet

```typescript
import { provideRouter } from '@angular/router';

await TestBed.configureTestingModule({
  imports: [MyComponent],
  providers: [provideRouter([])],
}).compileComponents();
```

## Service mocking

```typescript
const mockThemeService = {
  $theme: signal<Theme>('system'),
  setTheme: vi.fn(),
};

await TestBed.configureTestingModule({
  imports: [MyComponent],
  providers: [{ provide: ThemeService, useValue: mockThemeService }],
}).compileComponents();
```

## Module mocking with vi.mock

Use `function()`, not arrow `=>` for constructors:

```typescript
const mockStory = vi.hoisted(() => ({
  canContinue: false as boolean,
  Continue: vi.fn(function () { return null; }),
}));

vi.mock('some-module', () => ({
  SomeClass: vi.fn(function () { return mockStory; }),
}));
```

## i18n

If the component uses `$localize`, the lib's `test-setup.ts` must have:

```typescript
import '@angular/localize/init';
```

Without it tests will throw at runtime.

## Deciding what tests to write

| Component type | Tests to add |
|---|---|
| No inputs, `<ng-content/>` | projected content via TestHostComponent |
| No inputs, visual only (dot, icon) | host class presence |
| Has required inputs | one test per meaningful input combination |
| Renders a list | item count matches input length |
| Renders dates / text fields | `textContent` contains each field value |
| Has `@if` / conditional blocks | test both truthy and falsy branch |

Always keep tests focused: test behavior visible in the DOM, not implementation details.

## RxJS Marble Testing

Use `TestScheduler` to test async RxJS code synchronously with virtual time.

**Limitation:** only works with RxJS schedulers (`delay`, `interval`, `timer`, etc.). Promise-based code requires `async/await` + `firstValueFrom` instead.

```typescript
import { TestScheduler } from 'rxjs/testing';

describe('MyService', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('delays emission by 1 second', () => {
    scheduler.run(({ cold, expectObservable }) => {
      const source = cold('a|');
      const result = source.pipe(delay(1000));
      expectObservable(result).toBe('1s a|');
    });
  });
});
```

### Marble syntax

| Symbol | Meaning |
|--------|---------|
| `-` | 1 virtual frame (1ms inside `run()`) |
| `\|` | Complete |
| `#` | Error |
| `a-z` | Emitted value (map via values object) |
| `()` | Synchronous group |
| `^` | Subscription point (hot only) |
| `1s`, `100ms` | Time progression |

```typescript
// Custom values
cold('--a--b|', { a: { id: 1 }, b: { id: 2 } })

// Error
cold('--a--#', { a: 'x' }, new Error('fail'))

// Hot observable with subscription point
hot('--^--a--b--|')
```

### Side effects — use flush()

```typescript
scheduler.run(({ cold, expectObservable, flush }) => {
  let count = 0;
  const source = cold('--a--b|').pipe(tap(() => count++));
  expectObservable(source).toBe('--a--b|');
  flush();
  expect(count).toBe(2);
});
```

### Testing subscriptions

```typescript
scheduler.run(({ hot, expectObservable, expectSubscriptions }) => {
  const source = hot('--a--b--c--|');
  const sub =        '--^-----!';
  const expected =   '--a--b--';

  expectObservable(source, sub).toBe(expected);
  expectSubscriptions(source.subscriptions).toBe(sub);
});
```

### When NOT to use marble testing

- Observable wraps a `Promise` → use `async/await` + `firstValueFrom`
- `delay(0)` — schedules macrotask, not virtualizable

## Running tests

```bash
yarn nx test about/page          # single lib
yarn nx test about/page --watch  # watch mode
yarn test                        # all libs
```
