import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLink } from './nav-link';

describe('NavLink', () => {
  let component: NavLink;
  let fixture: ComponentFixture<NavLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLink],
    }).compileComponents();

    fixture = TestBed.createComponent(NavLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
