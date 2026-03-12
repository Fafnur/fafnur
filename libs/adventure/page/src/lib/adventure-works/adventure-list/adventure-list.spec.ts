import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureList } from './adventure-list';

describe('AdventureList', () => {
  let component: AdventureList;
  let fixture: ComponentFixture<AdventureList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list items defined', () => {
    expect(component.list).toBeDefined();
    expect(component.list.length).toBeGreaterThan(0);
  });

  it('should render an item for each list entry', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const items = el.querySelectorAll('fafnur-adventure-item');
    expect(items.length).toBe(component.list.length);
  });
});
