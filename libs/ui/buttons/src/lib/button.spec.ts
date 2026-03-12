import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
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
