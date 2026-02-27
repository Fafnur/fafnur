import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLinkedin } from './icon-linkedin';

describe('IconLinkedin', () => {
  let component: IconLinkedin;
  let fixture: ComponentFixture<IconLinkedin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLinkedin],
    }).compileComponents();

    fixture = TestBed.createComponent(IconLinkedin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
