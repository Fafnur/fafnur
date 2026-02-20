import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container } from './container';

describe('UiContainer', () => {
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
});
