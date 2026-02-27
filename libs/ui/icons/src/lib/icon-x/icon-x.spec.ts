import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconX } from './icon-x';

describe('IconX', () => {
  let component: IconX;
  let fixture: ComponentFixture<IconX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconX],
    }).compileComponents();

    fixture = TestBed.createComponent(IconX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
