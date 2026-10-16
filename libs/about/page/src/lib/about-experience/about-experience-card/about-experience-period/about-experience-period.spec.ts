import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildDateService } from '@fafnur/core';

import { Experience } from '../about-experience-card';
import { AboutExperiencePeriod } from './about-experience-period';

const mockExperience: Experience = {
  company: 'Test Company',
  post: 'Frontend developer',
  start: { year: 2020, month: 0 },
  end: { year: 2022, month: 11 },
  description: ['Task one', 'Task two'],
};

describe('AboutExperiencePeriod', () => {
  let component: AboutExperiencePeriod;
  let fixture: ComponentFixture<AboutExperiencePeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperiencePeriod],
      providers: [{ provide: BuildDateService, useValue: { month: { year: 2026, month: 9 } } }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperiencePeriod);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('experience', mockExperience);
    await fixture.whenStable();
  });

  function text(): string {
    return (fixture.nativeElement as HTMLElement).textContent?.replace(/\s+/g, ' ') ?? '';
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render start and end months', () => {
    expect(text()).toContain('January 2020');
    expect(text()).toContain('December 2022');
  });

  it('should render whole years without months', () => {
    expect(text()).toContain('3 years');
    expect(text()).not.toContain('month');
  });

  it('should render years and months', async () => {
    fixture.componentRef.setInput('experience', { ...mockExperience, end: { year: 2022, month: 5 } });
    await fixture.whenStable();

    expect(text()).toContain('2 years');
    expect(text()).toContain('6 months');
  });

  it('should render only months for less than a year', async () => {
    fixture.componentRef.setInput('experience', { ...mockExperience, end: { year: 2020, month: 0 } });
    await fixture.whenStable();

    expect(text()).toContain('1 month');
    expect(text()).not.toContain('year');
  });

  it('should count the current job until the build month', async () => {
    fixture.componentRef.setInput('experience', { ...mockExperience, start: { year: 2018, month: 8 }, end: undefined });
    await fixture.whenStable();

    expect(text()).toContain('until now');
    expect(text()).toContain('8 years');
    expect(text()).toContain('2 months');
  });
});
