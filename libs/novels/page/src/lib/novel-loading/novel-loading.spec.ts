import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelLoading } from './novel-loading';

describe('NovelLoading', () => {
  let component: NovelLoading;
  let fixture: ComponentFixture<NovelLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelLoading],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelLoading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render loading text', () => {
    expect(fixture.nativeElement.textContent).toContain('Loading');
  });

  it('should have animate-pulse class', () => {
    expect(fixture.nativeElement.classList).toContain('animate-pulse');
  });
});
