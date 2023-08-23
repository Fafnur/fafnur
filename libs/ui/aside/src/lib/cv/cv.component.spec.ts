import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponent } from './cv.component';

describe('CollaborationComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
