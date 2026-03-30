import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInfo } from './icon-info';

describe('IconInfo', () => {
  let component: IconInfo;
  let fixture: ComponentFixture<IconInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(IconInfo);
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
