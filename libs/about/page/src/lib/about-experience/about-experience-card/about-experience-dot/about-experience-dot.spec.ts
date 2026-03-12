import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceDot } from './about-experience-dot';

describe('AboutExperienceDot', () => {
  let component: AboutExperienceDot;
  let fixture: ComponentFixture<AboutExperienceDot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceDot],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceDot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
