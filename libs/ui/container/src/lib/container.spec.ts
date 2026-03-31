import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container } from './container';

describe('Container', () => {
  let component: Container;
  let fixture: ComponentFixture<Container>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Container],
    }).compileComponents();

    fixture = TestBed.createComponent(Container);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default block type', () => {
    expect(component.$type()).toBe('block');
  });

  it('should accept type input', () => {
    fixture.componentRef.setInput('type', 'flex');
    expect(component.$type()).toBe('flex');
  });
});
