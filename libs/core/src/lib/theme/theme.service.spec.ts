import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  function createService(): ThemeService {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ThemeService);
    TestBed.tick();
    return service;
  }

  it('should be created', () => {
    const service = createService();
    expect(service).toBeTruthy();
  });

  it('should default to system theme', () => {
    const service = createService();
    expect(service.$currentTheme()).toBe('system');
  });

  it('should read persisted theme from localStorage', () => {
    localStorage.setItem('user-theme', 'dark');
    const service = createService();
    expect(service.$currentTheme()).toBe('dark');
  });

  it('should read light theme from localStorage', () => {
    localStorage.setItem('user-theme', 'light');
    const service = createService();
    expect(service.$currentTheme()).toBe('light');
  });

  describe('select()', () => {
    let service: ThemeService;

    beforeEach(() => {
      service = createService();
    });

    it('should update current theme signal', () => {
      service.select('dark');
      expect(service.$currentTheme()).toBe('dark');
    });

    it('should persist theme to localStorage', () => {
      service.select('light');
      expect(localStorage.getItem('user-theme')).toBe('light');
    });

    it('should persist dark theme to localStorage', () => {
      service.select('dark');
      expect(localStorage.getItem('user-theme')).toBe('dark');
    });

    it('should persist system theme to localStorage', () => {
      service.select('system');
      expect(localStorage.getItem('user-theme')).toBe('system');
    });
  });

  describe('applyTheme effect', () => {
    let service: ThemeService;

    beforeEach(() => {
      service = createService();
    });

    it('should add dark class when dark theme selected', () => {
      service.select('dark');
      TestBed.tick();
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should remove dark class when light theme selected', () => {
      service.select('dark');
      TestBed.tick();

      service.select('light');
      TestBed.tick();

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('should remove dark class when system theme selected without dark media', () => {
      service.select('dark');
      TestBed.tick();

      service.select('system');
      TestBed.tick();

      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});
