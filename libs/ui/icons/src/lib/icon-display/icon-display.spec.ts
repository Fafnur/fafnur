import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconDisplay } from './icon-display';

describe('IconDisplay', () => {
  let component: IconDisplay;
  let fixture: ComponentFixture<IconDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(IconDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
