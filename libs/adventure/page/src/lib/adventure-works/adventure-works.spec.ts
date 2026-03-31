import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureWorks } from './adventure-works';

describe('AdventureWorks', () => {
  let component: AdventureWorks;
  let fixture: ComponentFixture<AdventureWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventureWorks);
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
    expect(el.querySelector('h2')?.textContent).toContain('How it works');
  });

  it('should render adventure list', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-adventure-list')).not.toBeNull();
  });
});
