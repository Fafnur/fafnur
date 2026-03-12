import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperiencePost } from './about-experience-post';

describe('AboutExperiencePost', () => {
  let component: AboutExperiencePost;
  let fixture: ComponentFixture<AboutExperiencePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperiencePost],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperiencePost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
