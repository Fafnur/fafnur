import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSettings } from './icon-settings';

describe('IconSettings', () => {
  let component: IconSettings;
  let fixture: ComponentFixture<IconSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('svg')).not.toBeNull();
  });

  it('should apply default dimensions', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const svg = el.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('28');
    expect(svg?.getAttribute('height')).toBe('28');
  });

  it('should accept custom dimensions', () => {
    fixture.componentRef.setInput('width', 16);
    fixture.componentRef.setInput('height', 16);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const svg = el.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
  });
});
