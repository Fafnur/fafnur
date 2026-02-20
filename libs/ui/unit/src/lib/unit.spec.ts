import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Unit } from './unit';

describe('UiUnit', () => {
  let component: Unit;
  let fixture: ComponentFixture<Unit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unit],
    }).compileComponents();

    fixture = TestBed.createComponent(Unit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
