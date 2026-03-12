import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceList } from './about-experience-list';

describe('AboutExperienceList', () => {
  let component: AboutExperienceList;
  let fixture: ComponentFixture<AboutExperienceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExperienceList],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExperienceList);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('list', ['First task', 'Second task', 'Third task']);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all list items', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const items = el.querySelectorAll('fafnur-about-experience-item');
    expect(items.length).toBe(3);
  });

  it('should render item content', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('First task');
    expect(el.textContent).toContain('Second task');
  });
});
