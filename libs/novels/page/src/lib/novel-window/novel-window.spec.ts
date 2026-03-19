import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { InkService } from '@fafnur/core';

import { NovelWindow } from './novel-window';

const mockInkService = {
  $choices: signal([] as unknown[]),
  $historyBlocks: signal([] as unknown[][]),
  $currentLines: signal([] as unknown[]),
  choose: vi.fn(),
  reset: vi.fn(),
};

describe('NovelWindow', () => {
  let component: NovelWindow;
  let fixture: ComponentFixture<NovelWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelWindow],
      providers: [
        provideRouter([]),
        { provide: InkService, useValue: mockInkService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render scene', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-scene')).toBeTruthy();
  });

  it('should render dialog', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-dialog')).toBeTruthy();
  });
});
