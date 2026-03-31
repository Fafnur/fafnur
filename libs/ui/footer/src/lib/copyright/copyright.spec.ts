import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copyright } from './copyright';

describe('Copyright', () => {
  let component: Copyright;
  let fixture: ComponentFixture<Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright],
    }).compileComponents();

    fixture = TestBed.createComponent(Copyright);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current year', () => {
    expect(component.year).toBe(new Date().getFullYear());
  });

  it('should render current year', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain(String(new Date().getFullYear()));
  });
});
