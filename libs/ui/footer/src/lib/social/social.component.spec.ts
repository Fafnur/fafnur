import { NgFor } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { IconService } from '@fafnur/core';

import { SocialComponent } from './social.component';

describe('MarketsComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialComponent, NgFor, MockModule(MatIconModule), MockModule(MatButtonModule)],
      providers: [
        {
          provide: IconService,
          useValue: {
            add: jest.fn(),
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
