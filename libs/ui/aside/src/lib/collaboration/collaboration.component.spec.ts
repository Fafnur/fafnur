import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { CollaborationComponent } from './collaboration.component';

describe('CollaborationComponent', () => {
  let component: CollaborationComponent;
  let fixture: ComponentFixture<CollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationComponent, MockComponent(TitleComponent)],
      providers: [
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CollaborationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
