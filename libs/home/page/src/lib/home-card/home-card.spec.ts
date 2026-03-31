import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeCard } from './home-card';

describe('HomeCard', () => {
  let component: HomeCard;
  let fixture: ComponentFixture<HomeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const heading = el.querySelector('h1');
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toContain('Start a new');
    expect(heading?.textContent).toContain('adventure');
  });

  it('should render link to novels', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.textContent?.trim()).toBe('Start the adventure');
  });

  it('should have paths defined', () => {
    expect(component.paths).toBeDefined();
    expect(component.paths.novels).toBeDefined();
  });
});
