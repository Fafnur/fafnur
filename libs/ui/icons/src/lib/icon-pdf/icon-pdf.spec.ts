import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPdf } from './icon-pdf';

describe('IconPdf', () => {
  let component: IconPdf;
  let fixture: ComponentFixture<IconPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPdf],
    }).compileComponents();

    fixture = TestBed.createComponent(IconPdf);
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
    fixture.componentRef.setInput('width', 20);
    fixture.componentRef.setInput('height', 20);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const svg = el.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('20');
    expect(svg?.getAttribute('height')).toBe('20');
  });
});
