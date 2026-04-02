import { TestBed } from '@angular/core/testing';

import { LocalStorage } from '../storages/local.storage';
import { VisitorService } from './visitor.service';

const MOCK_UUID = 'mock-uuid-1234';

vi.mock('uuid', () => ({
  v4: vi.fn(() => MOCK_UUID),
}));

describe('VisitorService', () => {
  let service: VisitorService;
  let mockStorage: { getItem: ReturnType<typeof vi.fn>; setItem: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    mockStorage = {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorage, useValue: mockStorage }],
    });

    service = TestBed.inject(VisitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get()', () => {
    it('should return existing UUID from storage', () => {
      mockStorage.getItem.mockReturnValue('existing-uuid');
      expect(service.get()).toBe('existing-uuid');
    });

    it('should generate and return new UUID when storage is empty', () => {
      expect(service.get()).toBe(MOCK_UUID);
    });

    it('should save generated UUID to storage', () => {
      service.get();
      expect(mockStorage.setItem).toHaveBeenCalledWith('visitorUuid', MOCK_UUID);
    });

    it('should not overwrite existing UUID in storage', () => {
      mockStorage.getItem.mockReturnValue('existing-uuid');
      service.get();
      expect(mockStorage.setItem).not.toHaveBeenCalled();
    });

    it('should return same UUID on repeated calls when storage has value', () => {
      mockStorage.getItem.mockReturnValue('existing-uuid');
      expect(service.get()).toBe('existing-uuid');
      expect(service.get()).toBe('existing-uuid');
    });
  });
});
