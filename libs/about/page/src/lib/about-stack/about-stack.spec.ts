import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStack } from './about-stack';

describe('AboutStack', () => {
  let component: AboutStack;
  let fixture: ComponentFixture<AboutStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutStack],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutStack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')).not.toBeNull();
    expect(el.querySelector('h2')?.textContent).toContain('Stack');
  });

  it('should render stack links', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('fafnur-about-stack-link');
    expect(links.length).toBeGreaterThan(0);
  });
});
