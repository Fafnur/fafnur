import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InkService } from '@fafnur/core';

import { NovelPage } from './novel.page';

const mockInkService = {
  $choices: signal([] as unknown[]),
  $loaded: signal(false),
  $historyBlocks: signal([] as unknown[][]),
  $currentLines: signal([] as unknown[]),
  load: vi.fn(),
  choose: vi.fn(),
  reset: vi.fn(),
};

describe('NovelPage', () => {
  let component: NovelPage;
  let fixture: ComponentFixture<NovelPage>;

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [NovelPage],
      providers: [{ provide: InkService, useValue: mockInkService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delegate $choices to inkService.$choices', () => {
    expect(component.$choices).toBe(mockInkService.$choices);
  });

  it('should delegate $loaded to inkService.$loaded', () => {
    expect(component.$loaded).toBe(mockInkService.$loaded);
  });

  it('should delegate $historyBlocks to inkService.$historyBlocks', () => {
    expect(component.$historyBlocks).toBe(mockInkService.$historyBlocks);
  });

  it('should delegate $currentLines to inkService.$currentLines', () => {
    expect(component.$currentLines).toBe(mockInkService.$currentLines);
  });

  it('should call inkService.choose with the given index on onChoose', () => {
    component.onChoose(2);
    expect(mockInkService.choose).toHaveBeenCalledWith(2);
  });

  it('should call inkService.reset on onReset', () => {
    component.onReset();
    expect(mockInkService.reset).toHaveBeenCalled();
  });
});
