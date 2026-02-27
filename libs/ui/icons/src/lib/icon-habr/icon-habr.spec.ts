import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconHabr } from './icon-habr';

describe('IconHabr', () => {
  let component: IconHabr;
  let fixture: ComponentFixture<IconHabr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconHabr],
    }).compileComponents();

    fixture = TestBed.createComponent(IconHabr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
