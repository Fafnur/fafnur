import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NovelEnd } from './novel-end';

describe('NovelEnd', () => {
  let component: NovelEnd;
  let fixture: ComponentFixture<NovelEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelEnd],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelEnd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render description', () => {
    expect(fixture.nativeElement.textContent).toContain('If you want to continue the dialogue');
  });

  it('should render end menu', () => {
    const menu = fixture.nativeElement.querySelector('fafnur-novel-end-menu');
    expect(menu).toBeTruthy();
  });
});
