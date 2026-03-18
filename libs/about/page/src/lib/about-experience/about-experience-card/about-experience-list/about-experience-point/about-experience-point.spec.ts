import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperiencePoint } from './about-experience-point';

describe('AboutExperiencePoint', () => {
  let component: AboutExperiencePoint;
  let fixture: ComponentFixture<AboutExperiencePoint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperiencePoint],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperiencePoint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have rounded-full class on host', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.classList).toContain('rounded-full');
  });
});
