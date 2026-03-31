import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeRadio } from './theme-radio';

describe('ThemeRadio', () => {
  let component: ThemeRadio;
  let fixture: ComponentFixture<ThemeRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeRadio);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('checked', false);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set aria-checked to false when unchecked', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getAttribute('aria-checked')).toBe('false');
  });

  it('should set aria-checked to true when checked', () => {
    fixture.componentRef.setInput('checked', true);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getAttribute('aria-checked')).toBe('true');
  });

  it('should set tabindex 0 when checked', () => {
    fixture.componentRef.setInput('checked', true);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getAttribute('tabindex')).toBe('0');
  });
});
