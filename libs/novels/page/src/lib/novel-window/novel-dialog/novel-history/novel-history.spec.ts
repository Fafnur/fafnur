import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkService } from '@fafnur/core';

import { NovelHistory } from './novel-history';

const mockBlock = [
  { id: 1, text: 'Narrator line', type: 'narrator', blockId: 0 },
  { id: 2, text: 'Player line', type: 'player', blockId: 0 },
];

const mockInkService = {
  $historyBlocks: signal<typeof mockBlock[]>([]),
};

describe('NovelHistory', () => {
  let component: NovelHistory;
  let fixture: ComponentFixture<NovelHistory>;

  beforeEach(async () => {
    mockInkService.$historyBlocks.set([]);

    await TestBed.configureTestingModule({
      imports: [NovelHistory],
      providers: [{ provide: InkService, useValue: mockInkService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nothing when history is empty', () => {
    expect(fixture.nativeElement.querySelector('fafnur-novel-text')).toBeNull();
  });

  it('should render text lines from history blocks', async () => {
    mockInkService.$historyBlocks.set([mockBlock]);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Narrator line');
    expect(fixture.nativeElement.textContent).toContain('Player line');
  });

  it('should render one text element per line in a block', async () => {
    mockInkService.$historyBlocks.set([mockBlock]);
    fixture.detectChanges();
    await fixture.whenStable();
    const texts = fixture.nativeElement.querySelectorAll('fafnur-novel-text');
    expect(texts.length).toBe(mockBlock.length);
  });
});
