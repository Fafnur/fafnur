import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceItem } from './about-experience-item';

describe('AboutExperienceItem', () => {
  let component: AboutExperienceItem;
  let fixture: ComponentFixture<AboutExperienceItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
