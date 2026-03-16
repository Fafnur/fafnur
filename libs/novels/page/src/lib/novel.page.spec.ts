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

  it('should delegate $loaded to inkService.$loaded', () => {
    expect(component.$loaded).toBe(mockInkService.$loaded);
  });
});
