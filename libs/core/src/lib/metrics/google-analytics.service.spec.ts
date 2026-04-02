import { TestBed } from '@angular/core/testing';

import { GoogleAnalyticsService } from './google-analytics.service';
import { METRIC_CONFIG, MetricConfig } from './metrics.interface';

const config: MetricConfig = {
  ids: ['GA-TEST-1', 'GA-TEST-2'],
  counter: 12345,
  paths: ['/admin'],
  domains: ['internal.example.com'],
};

describe('GoogleAnalyticsService', () => {
  let service: GoogleAnalyticsService;
  let mockGtag: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockGtag = vi.fn();
    (window as any).gtag = mockGtag;

    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsService, { provide: METRIC_CONFIG, useValue: config }],
    });

    service = TestBed.inject(GoogleAnalyticsService);
  });

  afterEach(() => {
    delete (window as any).gtag;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('gtag getter', () => {
    it('should return noop and not throw when gtag is not on window', () => {
      delete (window as any).gtag;
      expect(() => service.set({})).not.toThrow();
      expect(mockGtag).not.toHaveBeenCalled();
    });

    it('should return noop when config has no ids', () => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [GoogleAnalyticsService, { provide: METRIC_CONFIG, useValue: { ...config, ids: [] } }],
      });
      service = TestBed.inject(GoogleAnalyticsService);
      service.set({ user_id: 'u1' });
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('set()', () => {
    it('should call gtag with set command and payload', () => {
      service.set({ user_id: 'user-1' });
      expect(mockGtag).toHaveBeenCalledWith('set', { user_id: 'user-1' });
    });
  });

  describe('sendEvent()', () => {
    it('should map eventCategory, eventLabel and eventValue to GA4 fields', () => {
      service.sendEvent('click', {
        eventCategory: 'button',
        eventLabel: 'submit',
        eventValue: 1,
      });
      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        eventCategory: 'button',
        eventLabel: 'submit',
        eventValue: 1,
        event_category: 'button',
        event_label: 'submit',
        value: 1,
      });
    });

    it('should set GA4 fields to undefined/null when payload has no event fields', () => {
      service.sendEvent('click', {});
      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: undefined,
        event_label: undefined,
        value: null,
      });
    });

    it('should handle undefined payload', () => {
      service.sendEvent('click');
      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: undefined,
        event_label: undefined,
        value: null,
      });
    });

    it('should not remap payload for purchase action', () => {
      service.sendEvent('purchase', { items: [] });
      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', { items: [] });
    });
  });

  describe('sendPurchase()', () => {
    it('should call gtag with event purchase and payload', () => {
      service.sendPurchase({ orderId: 'order-1' });
      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', { orderId: 'order-1' });
    });

    it('should call gtag with event purchase when payload is undefined', () => {
      service.sendPurchase();
      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', undefined);
    });
  });

  describe('sendNavigation()', () => {
    it('should call gtag config for each configured id', () => {
      service.sendNavigation('/about');
      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-1', expect.objectContaining({ page_path: '/about' }));
      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-2', expect.objectContaining({ page_path: '/about' }));
    });

    it('should call gtag config twice for two ids', () => {
      service.sendNavigation('/about');
      expect(mockGtag).toHaveBeenCalledTimes(2);
    });
  });
});
