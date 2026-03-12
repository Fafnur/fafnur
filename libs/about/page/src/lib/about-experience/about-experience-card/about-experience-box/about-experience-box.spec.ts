import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceBox } from './about-experience-box';

describe('AboutExperienceBox', () => {
  let component: AboutExperienceBox;
  let fixture: ComponentFixture<AboutExperienceBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceBox],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
