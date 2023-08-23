import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';

import { PromoComponent } from './promo.component';

describe('AboutComponent', () => {
  let component: PromoComponent;
  let fixture: ComponentFixture<PromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoComponent, MockModule(MatIconModule), MockModule(MatButtonModule), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PromoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
