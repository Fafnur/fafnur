import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have paths defined', () => {
    expect(component.paths).toBeDefined();
  });

  it('should render brand link', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const brand = el.querySelector('a[href]');
    expect(brand?.textContent?.trim()).toBe('Fafnur');
  });

  it('should render 3 nav links', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const navLinks = el.querySelectorAll('nav a');
    expect(navLinks.length).toBe(4);
  });
});
