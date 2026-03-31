import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWho } from './about-who';

describe('AboutWho', () => {
  let component: AboutWho;
  let fixture: ComponentFixture<AboutWho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWho],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutWho);
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
    expect(el.querySelector('h2')?.textContent).toContain('Who am I?');
  });

  it('should render description paragraphs', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const paragraphs = el.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThan(0);
  });
});
