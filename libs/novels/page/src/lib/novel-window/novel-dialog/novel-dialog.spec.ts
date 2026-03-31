import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { InkService } from '@fafnur/core';

import { NovelDialog } from './novel-dialog';

const mockInkService = {
  $choices: signal([] as unknown[]),
  $historyBlocks: signal([] as unknown[][]),
  $currentLines: signal([] as unknown[]),
  choose: vi.fn(),
  reset: vi.fn(),
};

describe('NovelDialog', () => {
  let component: NovelDialog;
  let fixture: ComponentFixture<NovelDialog>;

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [NovelDialog],
      providers: [
        provideRouter([]),
        { provide: InkService, useValue: mockInkService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to dialog tab', () => {
    expect(component.$tab()).toBe('dialog');
  });

  it('should render tabs', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-tabs')).toBeTruthy();
  });

  it('should render two scroll containers', () => {
    const scrolls = fixture.nativeElement.querySelectorAll('fafnur-novel-scroll');
    expect(scrolls.length).toBe(2);
  });
});
