import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socials } from './socials';

describe('Socials', () => {
  let component: Socials;
  let fixture: ComponentFixture<Socials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Socials],
    }).compileComponents();

    fixture = TestBed.createComponent(Socials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 7 social links', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a[fafnurSocialLink]');
    expect(links.length).toBe(7);
  });

  it('should open all links in new tab', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('a');
    links.forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
    });
  });
});
