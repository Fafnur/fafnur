import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperiencePeriod } from './about-experience-period';

describe('AboutExperiencePeriod', () => {
  let component: AboutExperiencePeriod;
  let fixture: ComponentFixture<AboutExperiencePeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperiencePeriod],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperiencePeriod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
