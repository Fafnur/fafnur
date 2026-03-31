import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelActor } from './novel-actor';

@Component({
  template: `<fafnur-novel-actor color="primary">Speaker</fafnur-novel-actor>`,
  imports: [NovelActor],
})
class TestHostComponent {}

describe('NovelActor', () => {
  let component: NovelActor;
  let fixture: ComponentFixture<NovelActor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelActor],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelActor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary color class by default', () => {
    expect(fixture.nativeElement.classList).toContain('text-gray-500');
  });

  it('should apply secondary color class', () => {
    fixture.componentRef.setInput('color', 'secondary');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList).toContain('text-mist-500');
  });

  it('should apply tertiary color class', () => {
    fixture.componentRef.setInput('color', 'tertiary');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList).toContain('text-yellow-500');
  });

  it('should project content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    expect(hostFixture.nativeElement.textContent).toContain('Speaker');
  });
});
