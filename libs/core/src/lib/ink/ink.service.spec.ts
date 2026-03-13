import { TestBed } from '@angular/core/testing';

import { InkService } from './ink.service';
import { InkStorage } from './ink.storage';

const mockStory = vi.hoisted(() => ({
  canContinue: false as boolean,
  Continue: vi.fn(function () {
    return null as string | null;
  }),
  currentChoices: [] as unknown[],
  ChooseChoiceIndex: vi.fn(),
  state: {
    toJson: vi.fn(function () {
      return '{"state":"saved"}';
    }),
    LoadJson: vi.fn(),
  },
}));

vi.mock('inkjs', () => ({
  Story: vi.fn(function () {
    return mockStory;
  }),
}));

const mockInkStorage = {
  getState: vi.fn(),
  saveState: vi.fn(),
  resetState: vi.fn(),
};

describe('InkService', () => {
  let service: InkService;

  beforeEach(() => {
    mockStory.canContinue = false;
    mockStory.currentChoices = [];
    vi.clearAllMocks();
    mockStory.state.toJson.mockReturnValue('{"state":"saved"}');
    mockInkStorage.getState.mockReturnValue({ story: '', lines: [], lineId: 0 });
    mockInkStorage.resetState.mockReturnValue({ story: '', lines: [], lineId: 0 });

    TestBed.configureTestingModule({
      providers: [{ provide: InkStorage, useValue: mockInkStorage }],
    });
    service = TestBed.inject(InkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty lines and choices', () => {
    expect(service.$lines()).toEqual([]);
    expect(service.$choices()).toEqual([]);
  });

  it('should start with $loaded false', () => {
    expect(service.$loaded()).toBe(false);
  });

  it('should compute $hasChoices as false initially', () => {
    expect(service.$hasChoices()).toBe(false);
  });

  describe('load()', () => {
    it('should call getState on inkStorage', () => {
      service.load();
      expect(mockInkStorage.getState).toHaveBeenCalled();
    });

    it('should set $loaded to true', () => {
      service.load();
      expect(service.$loaded()).toBe(true);
    });

    it('should restore lines from storage state', () => {
      const savedLines = [{ id: 1, text: 'Hello' }];
      mockInkStorage.getState.mockReturnValue({ story: '', lines: savedLines, lineId: 1 });

      service.load();

      expect(service.$lines()).toEqual(savedLines);
    });

    it('should call LoadJson when saved story state exists', () => {
      mockInkStorage.getState.mockReturnValue({ story: '{"saved":"state"}', lines: [], lineId: 0 });

      service.load();

      expect(mockStory.state.LoadJson).toHaveBeenCalledWith('{"saved":"state"}');
    });

    it('should not call LoadJson when story state is empty', () => {
      mockInkStorage.getState.mockReturnValue({ story: '', lines: [], lineId: 0 });

      service.load();

      expect(mockStory.state.LoadJson).not.toHaveBeenCalled();
    });

    it('should flush and append new lines after restoring state', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'New line\n';
      });

      service.load();

      expect(service.$lines()).toContainEqual(expect.objectContaining({ text: 'New line' }));
    });

    it('should restore lineId counter so new lines continue incrementing', () => {
      const savedLines = [{ id: 1, text: 'First' }];
      mockInkStorage.getState.mockReturnValue({ story: '', lines: savedLines, lineId: 1 });
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Second\n';
      });

      service.load();

      const lines = service.$lines();
      expect(lines[1].id).toBe(2);
    });

    it('should set choices from story after flush', () => {
      mockStory.currentChoices = [{ text: 'Choice A' }, { text: 'Choice B' }] as unknown[];

      service.load();

      expect(service.$choices()).toHaveLength(2);
      expect(service.$hasChoices()).toBe(true);
    });
  });

  describe('choose()', () => {
    beforeEach(() => {
      service.load();
    });

    it('should call ChooseChoiceIndex with given index', () => {
      service.choose(1);
      expect(mockStory.ChooseChoiceIndex).toHaveBeenCalledWith(1);
    });

    it('should flush new lines after choosing', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'After choice\n';
      });

      service.choose(0);

      expect(service.$lines()).toContainEqual(expect.objectContaining({ text: 'After choice' }));
    });

    it('should update choices signal after flush', () => {
      mockStory.currentChoices = [{ text: 'Next option' }] as unknown[];

      service.choose(0);

      expect(service.$choices()).toHaveLength(1);
      expect(service.$hasChoices()).toBe(true);
    });

    it('should save state after choosing', () => {
      service.choose(0);
      expect(mockInkStorage.saveState).toHaveBeenCalled();
    });
  });

  describe('reset()', () => {
    it('should call resetState on inkStorage', () => {
      service.reset();
      expect(mockInkStorage.resetState).toHaveBeenCalled();
    });

    it('should set $loaded to true after reset completes load', () => {
      service.reset();
      expect(service.$loaded()).toBe(true);
    });

    it('should clear lines and reload from fresh state', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Some line\n';
      });
      service.load();
      expect(service.$lines()).toHaveLength(1);

      service.reset();

      expect(service.$lines()).toEqual([]);
    });

    it('should reset lineId so new lines start from 1', () => {
      const savedLines = [{ id: 1, text: 'Old' }];
      mockInkStorage.getState.mockReturnValue({ story: '', lines: savedLines, lineId: 1 });
      service.load();

      mockInkStorage.getState.mockReturnValue({ story: '', lines: [], lineId: 0 });
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Fresh start\n';
      });
      service.reset();

      expect(service.$lines()[0].id).toBe(1);
    });
  });

  describe('flush()', () => {
    it('should append lines from story canContinue loop', () => {
      let callCount = 0;
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementation(function () {
        callCount++;
        if (callCount === 1) return 'Line A\n';
        mockStory.canContinue = false;
        return 'Line B\n';
      });

      service.flush();

      expect(service.$lines()).toHaveLength(2);
      expect(service.$lines()[0].text).toBe('Line A');
      expect(service.$lines()[1].text).toBe('Line B');
    });

    it('should assign incrementing ids to lines', () => {
      let callCount = 0;
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementation(function () {
        callCount++;
        if (callCount === 1) return 'Line A\n';
        mockStory.canContinue = false;
        return 'Line B\n';
      });

      service.flush();

      expect(service.$lines()[0].id).toBe(1);
      expect(service.$lines()[1].id).toBe(2);
    });

    it('should skip null lines', () => {
      let callCount = 0;
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementation(function () {
        callCount++;
        if (callCount === 1) return null;
        mockStory.canContinue = false;
        return 'Real line\n';
      });

      service.flush();

      expect(service.$lines()).toHaveLength(1);
      expect(service.$lines()[0].text).toBe('Real line');
    });

    it('should trim whitespace from lines', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return '  trimmed  \n';
      });

      service.flush();

      expect(service.$lines()[0].text).toBe('trimmed');
    });

    it('should set choices from story', () => {
      mockStory.currentChoices = [{ text: 'Choice A' }, { text: 'Choice B' }] as unknown[];

      service.flush();

      expect(service.$choices()).toHaveLength(2);
      expect(service.$hasChoices()).toBe(true);
    });

    it('should save state to inkStorage after flushing', () => {
      service.flush();
      expect(mockInkStorage.saveState).toHaveBeenCalledWith({
        story: '{"state":"saved"}',
        lines: [],
        lineId: 0,
      });
    });

    it('should accumulate lines across multiple flush calls', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'First\n';
      });
      service.flush();

      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Second\n';
      });
      service.flush();

      expect(service.$lines()).toHaveLength(2);
    });
  });
});
