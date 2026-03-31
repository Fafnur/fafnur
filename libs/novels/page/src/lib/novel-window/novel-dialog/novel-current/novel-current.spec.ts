import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkService } from '@fafnur/core';

import { NovelCurrent } from './novel-current';

const mockInkService = {
  $currentLines: signal<{ id: number; text: string; type: string; blockId: number }[]>([]),
};

describe('NovelCurrent', () => {
  let component: NovelCurrent;
  let fixture: ComponentFixture<NovelCurrent>;

  beforeEach(async () => {
    mockInkService.$currentLines.set([]);

    await TestBed.configureTestingModule({
      imports: [NovelCurrent],
      providers: [{ provide: InkService, useValue: mockInkService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelCurrent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text lines from inkService', async () => {
    mockInkService.$currentLines.set([{ id: 1, text: 'Hello world', type: 'narrator', blockId: 0 }]);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Hello world');
  });

  it('should render one text element per line', async () => {
    mockInkService.$currentLines.set([
      { id: 1, text: 'Line one', type: 'narrator', blockId: 0 },
      { id: 2, text: 'Line two', type: 'narrator', blockId: 0 },
    ]);
    fixture.detectChanges();
    await fixture.whenStable();
    const texts = fixture.nativeElement.querySelectorAll('fafnur-novel-text');
    expect(texts.length).toBe(2);
  });
});
