import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelText } from './novel-text';

@Component({
  template: `<fafnur-novel-text color="primary">Story text</fafnur-novel-text>`,
  imports: [NovelText],
})
class TestHostComponent {}

describe('NovelText', () => {
  let component: NovelText;
  let fixture: ComponentFixture<NovelText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelText],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary color class by default', () => {
    expect(fixture.nativeElement.classList).toContain('text-gray-400');
  });

  it('should apply secondary color class', () => {
    fixture.componentRef.setInput('color', 'secondary');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList).toContain('text-mist-400');
  });

  it('should apply tertiary color class', () => {
    fixture.componentRef.setInput('color', 'tertiary');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList).toContain('text-gray-900');
  });

  it('should project content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    expect(hostFixture.nativeElement.textContent).toContain('Story text');
  });
});
