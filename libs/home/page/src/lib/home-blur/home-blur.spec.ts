import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeBlur } from './home-blur';

describe('HomeBlur', () => {
  let component: HomeBlur;
  let fixture: ComponentFixture<HomeBlur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlur],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBlur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
