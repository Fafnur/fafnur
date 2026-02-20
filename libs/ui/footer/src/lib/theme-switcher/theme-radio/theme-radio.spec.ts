import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeRadio } from './theme-radio';

describe('ThemeRadio', () => {
  let component: ThemeRadio;
  let fixture: ComponentFixture<ThemeRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeRadio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
