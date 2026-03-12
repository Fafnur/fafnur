import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceCompany } from './about-experience-company';

describe('AboutExperienceCompany', () => {
  let component: AboutExperienceCompany;
  let fixture: ComponentFixture<AboutExperienceCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
