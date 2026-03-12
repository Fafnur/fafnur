import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureCard, AdventureHuman } from './adventure-card';

const mockHuman: AdventureHuman = {
  icon: '🧑‍💼',
  label: 'HR',
  description: 'Find out how I approach processes.',
};

describe('AdventureCard', () => {
  let component: AdventureCard;
  let fixture: ComponentFixture<AdventureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('human', mockHuman);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('🧑‍💼');
  });

  it('should render label', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h3')).not.toBeNull();
    expect(el.querySelector('h3')?.textContent).toContain('HR');
  });

  it('should render description', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('p')).not.toBeNull();
    expect(el.textContent).toContain('Find out how I approach processes.');
  });
});
