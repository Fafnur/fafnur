import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brand } from './brand';

describe('Brand', () => {
  let component: Brand;
  let fixture: ComponentFixture<Brand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brand],
    }).compileComponents();

    fixture = TestBed.createComponent(Brand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand name', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Fafnur');
  });

  it('should render theme switcher', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-theme-switcher')).not.toBeNull();
  });
});
