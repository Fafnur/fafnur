import { NgForOf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockComponents, MockModule } from 'ng-mocks';

import { IconService, MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialComponent, NgForOf, MockComponents(TitleComponent), MockModule(MatButtonModule), MockModule(MatIconModule)],
      providers: [
        {
          provide: IconService,
          useValue: {
            add: jest.fn(),
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

    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
