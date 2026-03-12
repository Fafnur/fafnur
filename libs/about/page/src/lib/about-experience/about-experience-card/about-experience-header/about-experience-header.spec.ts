import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceHeader } from './about-experience-header';

describe('AboutExperienceHeader', () => {
  let component: AboutExperienceHeader;
  let fixture: ComponentFixture<AboutExperienceHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
