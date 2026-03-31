import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureHero } from './adventure-hero';

describe('AdventureHero', () => {
  let component: AdventureHero;
  let fixture: ComponentFixture<AdventureHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureHero],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h1')).not.toBeNull();
  });

  it('should render heading text', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const h1 = el.querySelector('h1');
    expect(h1?.textContent).toContain('This is not just');
    expect(h1?.textContent).toContain('a portfolio');
  });
});
