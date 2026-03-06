import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiButtons } from './button';

describe('UiButtons', () => {
  let component: UiButtons;
  let fixture: ComponentFixture<UiButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtons],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
