import { TestBed } from '@angular/core/testing';

import { InkService } from './ink.service';

const mockStory = vi.hoisted(() => ({
  canContinue: false as boolean,
  Continue: vi.fn(function () { return null as string | null; }),
  currentChoices: [] as unknown[],
  ChooseChoiceIndex: vi.fn(),
  state: {
    toJson: vi.fn(function () { return '{"state":"saved"}'; }),
    LoadJson: vi.fn(),
  },
}));

vi.mock('inkjs', () => ({
  Story: vi.fn(function () { return mockStory; }),
}));

describe('InkService', () => {
  let service: InkService;

  beforeEach(() => {
    mockStory.canContinue = false;
    mockStory.currentChoices = [];
    vi.clearAllMocks();
    mockStory.state.toJson.mockReturnValue('{"state":"saved"}');

    TestBed.configureTestingModule({});
    service = TestBed.inject(InkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty lines and choices', () => {
    expect(service.$lines()).toEqual([]);
    expect(service.$choices()).toEqual([]);
  });

  it('should compute hasChoices as false initially', () => {
    expect(service.$hasChoices()).toBe(false);
  });

  describe('init()', () => {
    it('should clear lines on re-init', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'First line\n';
      });
      service.init('{}');
      expect(service.$lines()).toHaveLength(1);

      service.init('{}');
      expect(service.$lines()).toEqual([]);
    });

    it('should flush lines from story', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Hello world\n';
      });

      service.init('{}');

      expect(service.$lines()).toHaveLength(1);
      expect(service.$lines()[0].text).toBe('Hello world');
    });

    it('should trim whitespace from lines', () => {
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return '  trimmed  \n';
      });

      service.init('{}');

      expect(service.$lines()[0].text).toBe('trimmed');
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

      service.init('{}');

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

      service.init('{}');

      expect(service.$lines()).toHaveLength(1);
      expect(service.$lines()[0].text).toBe('Real line');
    });

    it('should set choices from story after flush', () => {
      mockStory.currentChoices = [{ text: 'Choice A' }, { text: 'Choice B' }] as unknown[];

      service.init('{}');

      expect(service.$choices()).toHaveLength(2);
      expect(service.$hasChoices()).toBe(true);
    });
  });

  describe('choose()', () => {
    beforeEach(() => {
      service.init('{}');
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
  });

  describe('save()', () => {
    it('should call state.toJson and return result', () => {
      service.init('{}');
      const json = service.save();
      expect(mockStory.state.toJson).toHaveBeenCalled();
      expect(json).toBe('{"state":"saved"}');
    });
  });

  describe('load()', () => {
    it('should call state.LoadJson with provided json', () => {
      service.init('{}');
      service.load('{"saved":"state"}');
      expect(mockStory.state.LoadJson).toHaveBeenCalledWith('{"saved":"state"}');
    });

    it('should flush lines after loading', () => {
      service.init('{}');
      mockStory.canContinue = true;
      mockStory.Continue.mockImplementationOnce(function () {
        mockStory.canContinue = false;
        return 'Loaded line\n';
      });

      service.load('{}');

      expect(service.$lines()).toContainEqual(expect.objectContaining({ text: 'Loaded line' }));
    });
  });
});
