import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconMoon } from './icon-moon';

describe('IconMoon', () => {
  let component: IconMoon;
  let fixture: ComponentFixture<IconMoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMoon],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMoon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
