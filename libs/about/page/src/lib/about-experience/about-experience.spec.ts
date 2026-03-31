import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperience } from './about-experience';

describe('AboutExperience', () => {
  let component: AboutExperience;
  let fixture: ComponentFixture<AboutExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have experiences defined', () => {
    expect(component.experiences).toBeDefined();
    expect(component.experiences.length).toBeGreaterThan(0);
  });

  it('should render heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')).not.toBeNull();
    expect(el.querySelector('h2')?.textContent).toContain('Experience');
  });

  it('should render experience cards for each entry', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('fafnur-about-experience-card');
    expect(cards.length).toBe(component.experiences.length);
  });
});
