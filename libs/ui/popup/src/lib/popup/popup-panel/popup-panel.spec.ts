import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPanel } from './popup-panel';

@Component({
  template: `<fafnur-popup-panel>Projected text</fafnur-popup-panel>`,
  imports: [PopupPanel],
})
class TestHostComponent {}

describe('PopupPanel', () => {
  let component: PopupPanel;
  let fixture: ComponentFixture<PopupPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have host classes', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.classList).toContain('rounded-2xl');
    expect(el.classList).toContain('shadow-2xl');
    expect(el.classList).toContain('relative');
  });

  it('should render projected content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    const el: HTMLElement = hostFixture.nativeElement;
    expect(el.textContent).toContain('Projected text');
  });

  it('should stop click propagation', () => {
    const el: HTMLElement = fixture.nativeElement;
    const event = new MouseEvent('click', { bubbles: true });
    const stopSpy = vi.spyOn(event, 'stopPropagation');
    el.dispatchEvent(event);
    expect(stopSpy).toHaveBeenCalled();
  });
});
