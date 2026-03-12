import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureWhom } from './adventure-whom';

describe('AdventureWhom', () => {
  let component: AdventureWhom;
  let fixture: ComponentFixture<AdventureWhom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureWhom],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureWhom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have humans defined', () => {
    expect(component.humans).toBeDefined();
    expect(component.humans.length).toBeGreaterThan(0);
  });

  it('should render h2 heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')).not.toBeNull();
    expect(el.querySelector('h2')?.textContent).toContain('Whom');
  });

  it('should render a card for each human', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const cards = el.querySelectorAll('fafnur-adventure-card');
    expect(cards.length).toBe(component.humans.length);
  });
});
