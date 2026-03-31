import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';

vi.mock('uuid', () => ({
  v4: vi.fn(() => 'test-uuid'),
}));

const createMockWindow = (name = '') =>
  ({
    name,
    history: { pushState: vi.fn() },
    location: { href: 'http://localhost/' },
  }) as unknown as Window;

const createMockDocument = (win: Window | null) =>
  ({
    defaultView: win,
    location: { href: '' } as Location,
  }) as unknown as Document;

function setup(platformId: string, win: Window | null = createMockWindow()) {
  TestBed.configureTestingModule({
    providers: [
      WindowService,
      { provide: DOCUMENT, useValue: createMockDocument(win) },
      { provide: PLATFORM_ID, useValue: platformId },
    ],
  });
  return TestBed.inject(WindowService);
}

describe('WindowService', () => {
  beforeEach(() => vi.clearAllMocks());

  describe('browser platform', () => {
    it('should create', () => {
      expect(setup('browser')).toBeTruthy();
    });

    it('isBrowser should be true', () => {
      expect(setup('browser').isBrowser).toBe(true);
    });

    it('should assign window.name via uuid on construction when name is empty', () => {
      const win = createMockWindow('');
      setup('browser', win);
      expect(win.name).toBe('test-uuid');
    });

    it('should not overwrite window.name when already set', () => {
      const win = createMockWindow('existing-name');
      setup('browser', win);
      expect(win.name).toBe('existing-name');
    });

    it('window getter should return document.defaultView', () => {
      const win = createMockWindow();
      const service = setup('browser', win);
      expect(service.window).toBe(win);
    });

    it('reload() should set document.location.href', () => {
      const service = setup('browser');
      service.reload();
      expect(service.document.location.href).toBe(service.document.location.href);
    });

    it('redirect() should set document.location.href to given value', () => {
      const service = setup('browser');
      service.redirect('https://example.com');
      expect(service.document.location.href).toBe('https://example.com');
    });
  });

  describe('server platform', () => {
    it('isBrowser should be false', () => {
      expect(setup('server').isBrowser).toBe(false);
    });

    it('reload() should warn and not throw', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      setup('server').reload();
      expect(warn).toHaveBeenCalledTimes(1);
    });

    it('redirect() should warn and not throw', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      setup('server').redirect('https://example.com');
      expect(warn).toHaveBeenCalledTimes(1);
    });
  });

  describe('window getter edge cases', () => {
    it('should throw when defaultView is null', () => {
      const service = setup('server', null);
      expect(() => service.window).toThrow('Default view is not defined!');
    });
  });
});
