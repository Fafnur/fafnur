import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuLink } from './menu-link';

describe('MenuLink', () => {
  let component: MenuLink;
  let fixture: ComponentFixture<MenuLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLink],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
