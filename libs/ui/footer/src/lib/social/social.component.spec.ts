import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';

import { IconService } from '@fafnur/core';

import { SocialComponent } from './social.component';

describe('MarketsComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialComponent, MockModule(MatIconModule)],
      providers: [
        {
          provide: IconService,
          useValue: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            add: (name: string, source: string) => undefined,
          } as IconService,
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
