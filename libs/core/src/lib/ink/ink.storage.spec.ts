import { TestBed } from '@angular/core/testing';

import { LocalStorage } from '../storages/local.storage';
import { InkStorage } from './ink.storage';

const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

describe('InkStorage', () => {
  let service: InkStorage;

  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue(null);

    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorage, useValue: mockLocalStorage }],
    });
    service = TestBed.inject(InkStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getState()', () => {
    it('should return state from localStorage when it exists', () => {
      const savedState = { story: '{"inkState":true}', lines: [{ id: 1, text: 'Hello' }], lineId: 1 };
      mockLocalStorage.getItem.mockReturnValue(savedState);

      expect(service.getState()).toEqual(savedState);
    });

    it('should reset and return initial state when localStorage is empty', () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      const state = service.getState();

      expect(state).toEqual({ story: '', lines: [], lineId: 0 });
    });

    it('should save initial state to storage when nothing is stored', () => {
      mockLocalStorage.getItem.mockReturnValue(null);

      service.getState();

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('inkState', { story: '', lines: [], lineId: 0 });
    });
  });

  describe('saveState()', () => {
    it('should call setItem with inkState key and provided state', () => {
      const state = { story: '{"state":"saved"}', lines: [], lineId: 0 };

      service.saveState(state);

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('inkState', state);
    });

    it('should save state with lines', () => {
      const state = { story: '{}', lines: [{ id: 1, text: 'Line one' }], lineId: 1 };

      service.saveState(state);

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('inkState', state);
    });
  });

  describe('resetState()', () => {
    it('should save initial state to localStorage', () => {
      service.resetState();

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('inkState', { story: '', lines: [], lineId: 0 });
    });

    it('should return initial state', () => {
      const state = service.resetState();

      expect(state).toEqual({ story: '', lines: [], lineId: 0 });
    });
  });
});
