import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { CvComponent } from './cv.component';

describe('CollaborationComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvComponent, MockComponents(TitleComponent)],
      providers: [
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
