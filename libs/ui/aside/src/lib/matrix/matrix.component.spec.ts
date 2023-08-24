import { NgIf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MockComponents, MockModule } from 'ng-mocks';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { MatrixComponent } from './matrix.component';
import { MatrixService } from './matrix.service';

describe('MatrixComponent', () => {
  let component: MatrixComponent;
  let fixture: ComponentFixture<MatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixComponent, NgIf, MockComponents(TitleComponent), MockModule(MatButtonModule)],
      providers: [
        {
          provide: MatrixService,
          useValue: {
            select: jest.fn(),
          },
        },
        {
          provide: MetricService,
          useValue: {
            send: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MatrixComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
