import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconSun } from './icon-sun';

describe('IconSun', () => {
  let component: IconSun;
  let fixture: ComponentFixture<IconSun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSun],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSun);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
