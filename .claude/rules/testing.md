# Testing

## test-setup.ts (each lib)

```typescript
import '@angular/localize/init';  // REQUIRED if lib uses i18n / $localize
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
```

## Basic component test

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

## Required inputs → `setInput`

```typescript
fixture.componentRef.setInput('experience', mockExperience); // alias as key
await fixture.whenStable();
```

## Components with RouterLink/RouterOutlet

```typescript
imports: [MyComponent],
providers: [provideRouter([])],
```

## Service mocking

```typescript
providers: [{ provide: ThemeService, useValue: mockThemeService }]
```

## Module mocking (vi.mock)

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

## RxJS Marble Testing

Use `TestScheduler` to test async RxJS code synchronously with virtual time.

**Limitation:** only works with RxJS schedulers (e.g. `delay`, `interval`, `timer`). Promise-based code requires traditional async testing.

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

### Testing side effects (flush)

```typescript
scheduler.run(({ cold, expectObservable, flush }) => {
  let count = 0;
  const source = cold('--a--b|').pipe(tap(() => count++));
  expectObservable(source).toBe('--a--b|');
  flush(); // execute virtual time before asserting side effects
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

- Observable wraps a `Promise` (use `async/await` + `firstValueFrom` instead)
- `delay(0)` — schedules a macrotask, not virtualizable

## Run tests

```bash
yarn test                          # all
yarn nx test about/page            # single lib
yarn nx test about/page --watch    # watch mode
```
