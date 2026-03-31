import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureQuest } from './adventure-quest';

describe('AdventureQuest', () => {
  let component: AdventureQuest;
  let fixture: ComponentFixture<AdventureQuest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureQuest],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureQuest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h2 heading', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('h2')).not.toBeNull();
    expect(el.querySelector('h2')?.textContent).toContain('What is this?');
  });

  it('should render description paragraphs', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const paragraphs = el.querySelectorAll('p');
    expect(paragraphs.length).toBe(2);
  });
});
