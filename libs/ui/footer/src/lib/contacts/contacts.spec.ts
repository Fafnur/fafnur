import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacts } from './contacts';

describe('Contacts', () => {
  let component: Contacts;
  let fixture: ComponentFixture<Contacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacts],
    }).compileComponents();

    fixture = TestBed.createComponent(Contacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render telegram link', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');
    const hrefs = Array.from(links).map((l) => l.getAttribute('href'));
    expect(hrefs.some((h) => h?.includes('t.me'))).toBe(true);
  });

  it('should render email link', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');
    const hrefs = Array.from(links).map((l) => l.getAttribute('href'));
    expect(hrefs.some((h) => h?.startsWith('mailto:'))).toBe(true);
  });
});
