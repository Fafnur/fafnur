import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { PopupService } from '@fafnur/ui/popup';

import { NovelExit } from './novel-exit';

describe('NovelExit', () => {
  let component: NovelExit;
  let fixture: ComponentFixture<NovelExit>;

  const mockPopupService = {
    $isOpen: signal(false),
    toggle: vi.fn(),
    open: vi.fn(),
    close: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelExit],
      providers: [{ provide: PopupService, useValue: mockPopupService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelExit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a button', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('button')).toBeTruthy();
  });

  it('should call toggle on button click', () => {
    const el: HTMLElement = fixture.nativeElement;
    el.querySelector('button')!.click();
    expect(mockPopupService.toggle).toHaveBeenCalledTimes(1);
  });

  it('should call toggle on ESC keydown', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(mockPopupService.toggle).toHaveBeenCalledTimes(1);
  });
});
