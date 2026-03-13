import { MemoryStorage } from './memory.storage';

describe('MemoryStorage', () => {
  let storage: MemoryStorage;

  beforeEach(() => {
    storage = new MemoryStorage();
  });

  it('should be created', () => {
    expect(storage).toBeTruthy();
  });

  it('should have storage property referencing itself', () => {
    expect(storage.storage).toBe(storage);
  });

  describe('length', () => {
    it('should be 0 initially', () => {
      expect(storage.length).toBe(0);
    });

    it('should increase after setItem', () => {
      storage.setItem('key', 'value');
      expect(storage.length).toBe(1);
    });

    it('should count unique keys', () => {
      storage.setItem('a', '1');
      storage.setItem('b', '2');
      storage.setItem('c', '3');
      expect(storage.length).toBe(3);
    });

    it('should not increase when overwriting an existing key', () => {
      storage.setItem('key', 'first');
      storage.setItem('key', 'second');
      expect(storage.length).toBe(1);
    });

    it('should decrease after removeItem', () => {
      storage.setItem('key', 'value');
      storage.removeItem('key');
      expect(storage.length).toBe(0);
    });

    it('should be 0 after clear', () => {
      storage.setItem('a', '1');
      storage.setItem('b', '2');
      storage.clear();
      expect(storage.length).toBe(0);
    });
  });

  describe('setItem() / getItem()', () => {
    it('should store and retrieve a string value', () => {
      storage.setItem('name', 'Alice');
      expect(storage.getItem('name')).toBe('Alice');
    });

    it('should store and retrieve an object value', () => {
      const obj = { a: 1, b: 'two' };
      storage.setItem('data', obj);
      expect(storage.getItem('data')).toEqual(obj);
    });

    it('should store and retrieve a number value', () => {
      storage.setItem('count', 42);
      expect(storage.getItem('count')).toBe(42);
    });

    it('should return null for a missing key', () => {
      expect(storage.getItem('missing')).toBeNull();
    });

    it('should overwrite an existing value', () => {
      storage.setItem('key', 'first');
      storage.setItem('key', 'second');
      expect(storage.getItem('key')).toBe('second');
    });
  });

  describe('removeItem()', () => {
    it('should remove an existing key', () => {
      storage.setItem('key', 'value');
      storage.removeItem('key');
      expect(storage.getItem('key')).toBeNull();
    });

    it('should not affect other keys when removing one', () => {
      storage.setItem('a', '1');
      storage.setItem('b', '2');
      storage.removeItem('a');
      expect(storage.getItem('b')).toBe('2');
    });

    it('should not throw when removing a non-existent key', () => {
      expect(() => storage.removeItem('missing')).not.toThrow();
    });
  });

  describe('clear()', () => {
    it('should remove all stored items', () => {
      storage.setItem('a', '1');
      storage.setItem('b', '2');
      storage.clear();
      expect(storage.getItem('a')).toBeNull();
      expect(storage.getItem('b')).toBeNull();
    });

    it('should not throw when called on empty storage', () => {
      expect(() => storage.clear()).not.toThrow();
    });
  });

  describe('key()', () => {
    it('should return null for empty storage', () => {
      expect(storage.key(0)).toBeNull();
    });

    it('should return null for a valid in-bounds index', () => {
      storage.setItem('only', 'one');
      // length < index: 1 < 0 => false → returns null
      expect(storage.key(0)).toBeNull();
    });
  });
});
