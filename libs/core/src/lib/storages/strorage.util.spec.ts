import { getStorage } from './strorage.util';

describe('getStorage', () => {
  it('should return localStorage when it is available', () => {
    const storage = getStorage('localStorage');
    expect(storage).not.toBeNull();
    expect(storage).toBe(window.localStorage);
  });

  it('should return sessionStorage when it is available', () => {
    const storage = getStorage('sessionStorage');
    expect(storage).not.toBeNull();
    expect(storage).toBe(window.sessionStorage);
  });

  it('should return null when storage throws a non-quota error', () => {
    const mockStorage = {
      setItem: vi.fn(() => {
        throw new DOMException('Access denied', 'SecurityError');
      }),
      removeItem: vi.fn(),
      length: 0,
    };

    const originalLocalStorage = Object.getOwnPropertyDescriptor(window, 'localStorage');
    Object.defineProperty(window, 'localStorage', { value: mockStorage, configurable: true });

    const storage = getStorage('localStorage');

    Object.defineProperty(window, 'localStorage', originalLocalStorage!);
    expect(storage).toBeNull();
  });

  it('should return null when storage throws a quota error on empty storage', () => {
    const mockStorage = {
      setItem: vi.fn(() => {
        throw new DOMException('QuotaExceededError', 'QuotaExceededError');
      }),
      removeItem: vi.fn(),
      length: 0,
    };

    const originalLocalStorage = Object.getOwnPropertyDescriptor(window, 'localStorage');
    Object.defineProperty(window, 'localStorage', { value: mockStorage, configurable: true });

    const storage = getStorage('localStorage');

    Object.defineProperty(window, 'localStorage', originalLocalStorage!);
    expect(storage).toBeNull();
  });

  it('should return storage when quota error occurs but storage already has data', () => {
    const mockStorage = {
      setItem: vi.fn(() => {
        throw new DOMException('QuotaExceededError', 'QuotaExceededError');
      }),
      removeItem: vi.fn(),
      length: 5,
    };

    const originalLocalStorage = Object.getOwnPropertyDescriptor(window, 'localStorage');
    Object.defineProperty(window, 'localStorage', { value: mockStorage, configurable: true });

    const storage = getStorage('localStorage');

    Object.defineProperty(window, 'localStorage', originalLocalStorage!);
    expect(storage).not.toBeNull();
  });
});
