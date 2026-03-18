import { Component, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup } from './popup';

@Component({ template: '<p>Test Content</p>' })
class TestChildComponent {}

describe('Popup', () => {
  let component: Popup;
  let fixture: ComponentFixture<Popup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Popup],
    }).compileComponents();

    fixture = TestBed.createComponent(Popup);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('child', TestChildComponent);
    fixture.componentRef.setInput('injector', TestBed.inject(Injector));
    fixture.componentRef.setInput('options', {});
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('p')?.textContent).toBe('Test Content');
  });

  it('onClose emits closed with given value', () => {
    const emitted: unknown[] = [];
    component.closed.subscribe((v) => emitted.push(v));
    component.onClose('result');
    expect(emitted).toEqual(['result']);
  });

  it('onClose emits closed with undefined when no value passed', () => {
    const emitted: unknown[] = [];
    component.closed.subscribe((v) => emitted.push(v));
    component.onClose();
    expect(emitted).toEqual([undefined]);
  });

  it('onBackdrop emits closed when target equals currentTarget', () => {
    const emitted: unknown[] = [];
    component.closed.subscribe((v) => emitted.push(v));
    const el = fixture.nativeElement as HTMLElement;
    const event = new MouseEvent('click');
    Object.defineProperty(event, 'target', { value: el });
    Object.defineProperty(event, 'currentTarget', { value: el });
    component.onBackdrop(event);
    expect(emitted).toEqual([undefined]);
  });

  it('onBackdrop does not emit when target is a child element', () => {
    const emitted: unknown[] = [];
    component.closed.subscribe((v) => emitted.push(v));
    const el = fixture.nativeElement as HTMLElement;
    const child = document.createElement('div');
    const event = new MouseEvent('click');
    Object.defineProperty(event, 'target', { value: child });
    Object.defineProperty(event, 'currentTarget', { value: el });
    component.onBackdrop(event);
    expect(emitted).toEqual([]);
  });

  it('onBackdrop does not emit when disableClose is true', () => {
    fixture.componentRef.setInput('options', { disableClose: true });
    const emitted: unknown[] = [];
    component.closed.subscribe((v) => emitted.push(v));
    const el = fixture.nativeElement as HTMLElement;
    const event = new MouseEvent('click');
    Object.defineProperty(event, 'target', { value: el });
    Object.defineProperty(event, 'currentTarget', { value: el });
    component.onBackdrop(event);
    expect(emitted).toEqual([]);
  });
});
