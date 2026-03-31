import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience } from '../about-experience-card';
import { AboutExperiencePeriod } from './about-experience-period';

const mockExperience: Experience = {
  company: 'Test Company',
  post: 'Frontend developer',
  start: 'January 2020',
  end: 'December 2022',
  time: '3 years',
  description: ['Task one', 'Task two'],
};

describe('AboutExperiencePeriod', () => {
  let component: AboutExperiencePeriod;
  let fixture: ComponentFixture<AboutExperiencePeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperiencePeriod],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperiencePeriod);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render start and end dates', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('January 2020');
    expect(el.textContent).toContain('December 2022');
  });

  it('should render time badge', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('3 years');
  });
});
