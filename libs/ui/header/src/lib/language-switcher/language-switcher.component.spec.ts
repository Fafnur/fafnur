import { NgIf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MockDirectives, MockModule } from 'ng-mocks';

import { CookieService, MetricService, WindowService } from '@fafnur/core';

import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent, MockDirectives(NgIf), MockModule(MatIconModule), MockModule(MatButtonModule)],
      providers: [
        {
          provide: WindowService,
          useValue: {
            window: {
              localStorage: {
                getItem: () => null,
                setItem: jest.fn(),
              },
              navigator: { language: 'ru-RU' },
            },
          },
        },
        {
          provide: CookieService,
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
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

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
