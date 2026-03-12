import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link } from './link';

describe('Link', () => {
  let component: Link;
  let fixture: ComponentFixture<Link>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Link],
    }).compileComponents();

    fixture = TestBed.createComponent(Link);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default primary color', () => {
    expect(component.$color()).toBe('primary');
  });

  it('should accept color input', () => {
    fixture.componentRef.setInput('color', 'secondary');
    expect(component.$color()).toBe('secondary');
  });
});
