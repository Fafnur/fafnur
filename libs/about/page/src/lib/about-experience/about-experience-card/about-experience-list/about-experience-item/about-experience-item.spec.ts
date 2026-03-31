import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceItem } from './about-experience-item';

@Component({
  template: `<fafnur-about-experience-item>Task text</fafnur-about-experience-item>`,
  imports: [AboutExperienceItem],
})
class TestHostComponent {}

describe('AboutExperienceItem', () => {
  let component: AboutExperienceItem;
  let fixture: ComponentFixture<AboutExperienceItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected content', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    const el: HTMLElement = hostFixture.nativeElement;
    expect(el.textContent).toContain('Task text');
  });
});
