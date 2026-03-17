import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { PopupRef } from '../popup-ref';
import { Popup } from './popup';

@Component({ template: '<p>Content</p>' })
class TestContentComponent {}

describe('Popup', () => {
  let component: Popup;
  let fixture: ComponentFixture<Popup>;

  const mockPopupRef = {
    close: vi.fn(),
  } as unknown as PopupRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popup],
    }).compileComponents();

    fixture = TestBed.createComponent(Popup);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('content', TestContentComponent);
    fixture.componentRef.setInput('popupRef', mockPopupRef);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the dynamic content component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Content');
  });

  it('should close when backdrop is clicked', () => {
    const el: HTMLElement = fixture.nativeElement;
    const backdrop = el.querySelector('div')!;
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: backdrop });
    Object.defineProperty(event, 'currentTarget', { value: backdrop });
    component.onBackdropClick(event);
    expect(mockPopupRef.close).toHaveBeenCalledTimes(1);
  });

  it('should not close when inner panel is clicked', () => {
    const el: HTMLElement = fixture.nativeElement;
    const backdrop = el.querySelector('div')!;
    const panel = el.querySelectorAll('div')[1];
    const event = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(event, 'target', { value: panel });
    Object.defineProperty(event, 'currentTarget', { value: backdrop });
    component.onBackdropClick(event);
    expect(mockPopupRef.close).not.toHaveBeenCalled();
  });
});
