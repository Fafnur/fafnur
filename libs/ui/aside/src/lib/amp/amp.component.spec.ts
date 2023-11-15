import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { AmpComponent } from './amp.component';

describe('AmpComponent', () => {
  let component: AmpComponent;
  let fixture: ComponentFixture<AmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmpComponent, MockComponents(TitleComponent)],
      providers: [
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AmpComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
