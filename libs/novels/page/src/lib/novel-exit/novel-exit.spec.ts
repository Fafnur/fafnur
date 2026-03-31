import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { vi } from 'vitest';

import { PopupService } from '@fafnur/ui/popup';

import { NovelExit } from './novel-exit';

describe('NovelExit', () => {
  let component: NovelExit;
  let fixture: ComponentFixture<NovelExit>;

  const mockPopupRef = {
    ref: { onClose: vi.fn() },
    closed: EMPTY,
    widgetId: '1',
  };

  const mockPopupService = {
    open: vi.fn().mockReturnValue(mockPopupRef),
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

  it('onPopup() opens popup when no popup is open', () => {
    component.onPopup();
    expect(mockPopupService.open).toHaveBeenCalledTimes(1);
  });

  it('onPopup() closes popup when one is already open', () => {
    component.onPopup(); // open
    component.onPopup(); // close
    expect(mockPopupRef.ref.onClose).toHaveBeenCalledTimes(1);
    expect(mockPopupService.open).toHaveBeenCalledTimes(1);
  });

  it('onPopup() resets ref after close so next call opens again', () => {
    component.onPopup(); // open
    component.onPopup(); // close
    component.onPopup(); // open again
    expect(mockPopupService.open).toHaveBeenCalledTimes(2);
  });

  it('ESC keydown triggers onPopup()', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(mockPopupService.open).toHaveBeenCalledTimes(1);
  });
});
