import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconMedium } from './icon-medium';

describe('IconMedium', () => {
  let component: IconMedium;
  let fixture: ComponentFixture<IconMedium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMedium],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMedium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
