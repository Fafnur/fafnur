import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Menu } from './menu';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have paths defined', () => {
    expect(component.paths).toBeDefined();
  });

  it('should render navigation heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Navigation');
  });

  it('should render 3 navigation links', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');
    expect(links.length).toBe(3);
  });
});
