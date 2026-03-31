import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStackLink } from './about-stack-link';

describe('AboutStackLink', () => {
  let component: AboutStackLink;
  let fixture: ComponentFixture<AboutStackLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutStackLink],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutStackLink);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('href', 'https://angular.dev/');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render anchor with correct href', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a');
    expect(link).not.toBeNull();
    expect(link?.getAttribute('href')).toBe('https://angular.dev/');
  });

  it('should open link in new tab', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a');
    expect(link?.getAttribute('target')).toBe('_blank');
  });
});
