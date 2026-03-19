import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { InkService } from '@fafnur/core';
import { PopupService } from '@fafnur/ui/popup';

import { NovelPage } from './novel.page';

const mockInkService = {
  $choices: signal([] as unknown[]),
  $loaded: signal(false),
  $historyBlocks: signal([] as unknown[][]),
  $currentLines: signal([] as unknown[]),
  load: vi.fn(),
  choose: vi.fn(),
  reset: vi.fn(),
};

const mockPopupService = {
  $isOpen: signal(false),
  toggle: vi.fn(),
  open: vi.fn(),
  close: vi.fn(),
};

describe('NovelPage', () => {
  let component: NovelPage;
  let fixture: ComponentFixture<NovelPage>;

  beforeEach(async () => {
    vi.clearAllMocks();
    mockInkService.$loaded.set(false);

    await TestBed.configureTestingModule({
      imports: [NovelPage],
      providers: [
        provideRouter([]),
        { provide: InkService, useValue: mockInkService },
        { provide: PopupService, useValue: mockPopupService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delegate $loaded to inkService.$loaded', () => {
    expect(component.$loaded).toBe(mockInkService.$loaded);
  });

  it('should show loading when not loaded', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-loading')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('fafnur-novel-window')).toBeNull();
  });

  it('should show window when loaded', async () => {
    mockInkService.$loaded.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('fafnur-novel-window')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('fafnur-novel-loading')).toBeNull();
  });

  it('should always render exit button', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-exit')).toBeTruthy();
  });
});
