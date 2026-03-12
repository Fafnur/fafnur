import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureItem } from './adventure-item';

describe('AdventureItem', () => {
  let component: AdventureItem;
  let fixture: ComponentFixture<AdventureItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('index', 1);
    fixture.componentRef.setInput('content', 'Choose who you are');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render index number', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('1');
  });

  it('should render content text', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Choose who you are');
  });
});
