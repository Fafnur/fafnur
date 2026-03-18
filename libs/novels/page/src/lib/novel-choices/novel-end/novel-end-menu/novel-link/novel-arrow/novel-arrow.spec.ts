import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelArrow } from './novel-arrow';

describe('NovelArrow', () => {
  let component: NovelArrow;
  let fixture: ComponentFixture<NovelArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelArrow],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelArrow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render › character', () => {
    expect(fixture.nativeElement.textContent).toBe('›');
  });

  it('should have opacity-0 class on host', () => {
    expect(fixture.nativeElement.classList).toContain('opacity-0');
  });
});
