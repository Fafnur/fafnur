import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutExperienceTime } from './about-experience-time';

@Component({
  template: `<fafnur-about-experience-time>3 years</fafnur-about-experience-time>`,
  imports: [AboutExperienceTime],
})
class TestHostComponent {}

describe('AboutExperienceTime', () => {
  let component: AboutExperienceTime;
  let fixture: ComponentFixture<AboutExperienceTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceTime],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceTime);
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
    expect(el.textContent).toContain('3 years');
  });

  it('should prepend a dot character', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    await hostFixture.whenStable();
    const el: HTMLElement = hostFixture.nativeElement;
    expect(el.textContent).toMatch(/^\./);
  });
});
