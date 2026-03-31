import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab } from './tab';

@Component({
  template: `<button fafnurTab>Tab label</button>`,
  imports: [Tab],
})
class TestHostComponent {}

describe('Tab', () => {
  let component: Tab;
  let fixture: ComponentFixture<Tab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('active', false);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply inactive classes when active is false', () => {
    expect(fixture.nativeElement.classList).toContain('text-gray-500');
    expect(fixture.nativeElement.classList).toContain('border-transparent');
  });

  it('should apply active classes when active is true', () => {
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList).toContain('text-yellow-600');
    expect(fixture.nativeElement.classList).toContain('border-yellow-600');
  });

  it('should project content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    expect(hostFixture.nativeElement.textContent).toContain('Tab label');
  });
});
