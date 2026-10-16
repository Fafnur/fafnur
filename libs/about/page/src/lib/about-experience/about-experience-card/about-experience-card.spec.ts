import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceCard, Experience } from './about-experience-card';

const mockExperience: Experience = {
  company: 'Test Company',
  post: 'Frontend developer',
  start: { year: 2020, month: 0 },
  end: { year: 2022, month: 11 },
  description: ['Task one', 'Task two'],
};

describe('AboutExperienceCard', () => {
  let component: AboutExperienceCard;
  let fixture: ComponentFixture<AboutExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render company name', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-about-experience-company')).not.toBeNull();
    expect(el.textContent).toContain('Test Company');
  });

  it('should render post title', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-about-experience-post')).not.toBeNull();
    expect(el.textContent).toContain('Frontend developer');
  });

  it('should render experience list', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-about-experience-list')).not.toBeNull();
  });
});
