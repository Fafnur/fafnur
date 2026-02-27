import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconDevto } from './icon-devto';

describe('IconDevto', () => {
  let component: IconDevto;
  let fixture: ComponentFixture<IconDevto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDevto],
    }).compileComponents();

    fixture = TestBed.createComponent(IconDevto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
