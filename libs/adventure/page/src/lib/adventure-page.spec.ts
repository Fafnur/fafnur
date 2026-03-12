import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AdventurePage } from './adventure-page';

describe('AdventurePage', () => {
  let component: AdventurePage;
  let fixture: ComponentFixture<AdventurePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventurePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AdventurePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have paths defined', () => {
    expect(component.paths).toBeDefined();
    expect(component.paths.novels).toBeDefined();
  });

  it('should render hero section', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-adventure-hero')).not.toBeNull();
  });

  it('should render quest section', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-adventure-quest')).not.toBeNull();
  });

  it('should render whom section', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-adventure-whom')).not.toBeNull();
  });

  it('should render works section', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('fafnur-adventure-works')).not.toBeNull();
  });

  it('should render start link', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const link = el.querySelector('a[fafnurButtons]');
    expect(link).not.toBeNull();
    expect(link?.textContent?.trim()).toBe('Начать приключение');
  });
});
