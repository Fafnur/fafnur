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

## Run tests

```bash
yarn test                          # all
yarn nx test about/page            # single lib
yarn nx test about/page --watch    # watch mode
```
