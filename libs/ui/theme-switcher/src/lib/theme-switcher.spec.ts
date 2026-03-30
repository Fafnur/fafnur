import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcher } from './theme-switcher';

describe('ThemeSwitcher', () => {
  let component: ThemeSwitcher;
  let fixture: ComponentFixture<ThemeSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 theme radio buttons', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const radios = el.querySelectorAll('fafnur-theme-radio');
    expect(radios.length).toBe(3);
  });

  it('should expose current theme from service', () => {
    expect(component.$currentTheme).toBeDefined();
    expect(component.$currentTheme()).toBeDefined();
  });
});
