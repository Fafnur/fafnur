import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceList } from './about-experience-list';

describe('AboutExperienceList', () => {
  let component: AboutExperienceList;
  let fixture: ComponentFixture<AboutExperienceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceList],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
