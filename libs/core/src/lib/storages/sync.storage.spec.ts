import { MemoryStorage } from './memory.storage';
import { StorageSync } from './sync.storage';

interface TestState { name: string; count: number; flag: boolean }

class TestStorageSync extends StorageSync<TestState> {
  constructor(storage: Storage) {
    super(storage, 'TEST_KEY');
  }
}

function createStorage(initial: Partial<TestState> = {}): { sync: TestStorageSync; raw: MemoryStorage } {
  const raw = new MemoryStorage();
  if (Object.keys(initial).length) {
    raw.setItem('TEST_KEY', JSON.stringify(initial));
  }
  const sync = new TestStorageSync(raw);
  return { sync, raw };
}

describe('StorageSync', () => {
  describe('constructor', () => {
    it('should create instance with empty state when storage is empty', () => {
      const { sync } = createStorage();
      expect(sync.getState()).toEqual({});
    });

    it('should load existing state from storage on construction', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      expect(sync.getState()).toEqual({ name: 'Alice', count: 5 });
    });

    it('should expose storage and key properties', () => {
      const raw = new MemoryStorage();
      const sync = new TestStorageSync(raw);
      expect(sync.storage).toBe(raw);
      expect(sync.key).toBe('TEST_KEY');
    });
  });

  describe('length', () => {
    it('should be 0 for empty state', () => {
      const { sync } = createStorage();
      expect(sync.length).toBe(0);
    });

    it('should reflect number of keys in state', () => {
      const { sync } = createStorage({ name: 'Bob', count: 3 });
      expect(sync.length).toBe(2);
    });
  });

  describe('getState()', () => {
    it('should return full current state', () => {
      const { sync } = createStorage({ name: 'Alice', count: 1 });
      expect(sync.getState()).toEqual({ name: 'Alice', count: 1 });
    });
  });

  describe('getItem()', () => {
    it('should return value for existing key', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      expect(sync.getItem('name')).toBe('Alice');
    });

    it('should return null for missing key', () => {
      const { sync } = createStorage();
      expect(sync.getItem('name')).toBeNull();
    });
  });

  describe('getItems()', () => {
    it('should return values for all requested keys', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      const result = sync.getItems(['name', 'count']);
      expect(result).toEqual({ name: 'Alice', count: 5 });
    });

    it('should return null for missing keys', () => {
      const { sync } = createStorage({ name: 'Alice' });
      const result = sync.getItems(['name', 'count']);
      expect(result).toEqual({ name: 'Alice', count: null });
    });

    it('should return all nulls for empty state', () => {
      const { sync } = createStorage();
      const result = sync.getItems(['name', 'count']);
      expect(result).toEqual({ name: null, count: null });
    });
  });

  describe('setItem()', () => {
    it('should store a value and make it retrievable', () => {
      const { sync } = createStorage();
      sync.setItem('name', 'Bob');
      expect(sync.getItem('name')).toBe('Bob');
    });

    it('should persist the updated state to underlying storage', () => {
      const { sync, raw } = createStorage();
      sync.setItem('count', 7);
      const stored = JSON.parse(raw.getItem('TEST_KEY') as string);
      expect(stored.count).toBe(7);
    });

    it('should overwrite an existing value', () => {
      const { sync } = createStorage({ name: 'Alice' });
      sync.setItem('name', 'Bob');
      expect(sync.getItem('name')).toBe('Bob');
    });

    it('should not affect other keys', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      sync.setItem('count', 10);
      expect(sync.getItem('name')).toBe('Alice');
    });
  });

  describe('setItems()', () => {
    it('should update multiple keys at once', () => {
      const { sync } = createStorage();
      sync.setItems({ name: 'Carol', count: 3 });
      expect(sync.getItem('name')).toBe('Carol');
      expect(sync.getItem('count')).toBe(3);
    });

    it('should merge with existing state', () => {
      const { sync } = createStorage({ name: 'Alice', count: 1 });
      sync.setItems({ count: 99 });
      expect(sync.getItem('name')).toBe('Alice');
      expect(sync.getItem('count')).toBe(99);
    });
  });

  describe('removeItem()', () => {
    it('should remove the specified key from state', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      sync.removeItem('name');
      expect(sync.getItem('name')).toBeNull();
    });

    it('should not affect other keys', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      sync.removeItem('name');
      expect(sync.getItem('count')).toBe(5);
    });

    it('should persist removal to underlying storage', () => {
      const { sync, raw } = createStorage({ name: 'Alice', count: 5 });
      sync.removeItem('name');
      const stored = JSON.parse(raw.getItem('TEST_KEY') as string);
      expect(stored).not.toHaveProperty('name');
    });
  });

  describe('removeItems()', () => {
    it('should remove all specified keys', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5, flag: true });
      sync.removeItems(['name', 'count']);
      expect(sync.getItem('name')).toBeNull();
      expect(sync.getItem('count')).toBeNull();
    });

    it('should preserve keys not in the removal list', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5, flag: true });
      sync.removeItems(['name', 'count']);
      expect(sync.getItem('flag')).toBe(true);
    });
  });

  describe('clear()', () => {
    it('should remove all keys from state', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      sync.clear();
      expect(sync.getState()).toEqual({});
    });

    it('should set length to 0', () => {
      const { sync } = createStorage({ name: 'Alice', count: 5 });
      sync.clear();
      expect(sync.length).toBe(0);
    });

    it('should persist empty state to storage', () => {
      const { sync, raw } = createStorage({ name: 'Alice' });
      sync.clear();
      const stored = JSON.parse(raw.getItem('TEST_KEY') as string);
      expect(stored).toEqual({});
    });
  });

  describe('QuotaExceededError handling', () => {
    it('should clear storage and log error on QuotaExceededError', () => {
      const raw = new MemoryStorage();
      const sync = new TestStorageSync(raw);
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

      const quotaError = new DOMException('QuotaExceededError', 'QuotaExceededError');
      vi.spyOn(raw, 'setItem').mockImplementationOnce(() => {
        throw quotaError;
      });
      const clearSpy = vi.spyOn(raw, 'clear');

      sync.setItem('name', 'Alice');

      expect(clearSpy).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(quotaError);

      consoleSpy.mockRestore();
    });
  });
});
