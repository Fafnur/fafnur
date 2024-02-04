import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { LifeComponent } from './life.component';

describe('LifeComponent', () => {
  let component: LifeComponent;
  let fixture: ComponentFixture<LifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeComponent, MockComponent(TitleComponent)],
      providers: [
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
