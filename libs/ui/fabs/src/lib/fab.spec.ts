import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fab } from './fab';

@Component({
  template: `<button fafnurFab>+</button>`,
  imports: [Fab],
})
class TestHostComponent {}

describe('Fab', () => {
  let component: Fab;
  let fixture: ComponentFixture<Fab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fab],
    }).compileComponents();

    fixture = TestBed.createComponent(Fab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary color classes by default', () => {
    expect(fixture.nativeElement.classList).toContain('bg-yellow-600');
  });

  it('should have rounded-full class', () => {
    expect(fixture.nativeElement.classList).toContain('rounded-full');
  });

  it('should project content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    expect(hostFixture.nativeElement.textContent).toContain('+');
  });
});
