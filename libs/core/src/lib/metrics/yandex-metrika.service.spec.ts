import { TestBed } from '@angular/core/testing';

import { METRIC_CONFIG, MetricConfig } from './metrics.interface';
import { YandexMetrikaService } from './yandex-metrika.service';

const config: MetricConfig = {
  ids: ['GA-TEST'],
  counter: 12345,
  paths: ['/admin'],
  domains: ['internal.example.com'],
};

describe('YandexMetrikaService', () => {
  let service: YandexMetrikaService;
  let mockYm: ReturnType<typeof vi.fn>;
  let mockDataLayer: { push: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    mockYm = vi.fn();
    mockDataLayer = { push: vi.fn() };

    (window as any).ym = mockYm;
    (window as any).dataLayer = mockDataLayer;

    TestBed.configureTestingModule({
      providers: [
        YandexMetrikaService,
        { provide: METRIC_CONFIG, useValue: config },
      ],
    });

    service = TestBed.inject(YandexMetrikaService);
  });

  afterEach(() => {
    delete (window as any).ym;
    delete (window as any).dataLayer;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hit()', () => {
    it('should call ym counter with hit and url', () => {
      service.hit('/page');
      expect(mockYm).toHaveBeenCalledWith(12345, 'hit', '/page', {});
    });

    it('should pass extra options', () => {
      service.hit('/page', { params: { key: 'val' } });
      expect(mockYm).toHaveBeenCalledWith(12345, 'hit', '/page', { params: { key: 'val' } });
    });

    it('should not throw when ym is not defined on window', () => {
      delete (window as any).ym;
      expect(() => service.hit('/page')).not.toThrow();
      expect(mockYm).not.toHaveBeenCalled();
    });
  });

  describe('reachGoal()', () => {
    it('should call ym counter with reachGoal and target', () => {
      service.reachGoal('click_button');
      expect(mockYm).toHaveBeenCalledWith(12345, 'reachGoal', 'click_button', undefined);
    });

    it('should pass options', () => {
      service.reachGoal('purchase', { value: 100 });
      expect(mockYm).toHaveBeenCalledWith(12345, 'reachGoal', 'purchase', { value: 100 });
    });
  });

  describe('set()', () => {
    it('should call ym counter with userParams', () => {
      service.set({ UserID: 'user-1' });
      expect(mockYm).toHaveBeenCalledWith(12345, 'userParams', { UserID: 'user-1' }, undefined);
    });
  });

  describe('call()', () => {
    it('should call ym counter with given method', () => {
      service.call('setUserID', 'user-1');
      expect(mockYm).toHaveBeenCalledWith(12345, 'setUserID', 'user-1');
    });
  });

  describe('purchase()', () => {
    it('should push params to dataLayer', () => {
      service.purchase({ orderId: 'order-1' });
      expect(mockDataLayer.push).toHaveBeenCalledWith({ orderId: 'order-1' });
    });

    it('should not throw when dataLayer is not defined', () => {
      delete (window as any).dataLayer;
      expect(() => service.purchase({ orderId: 'order-1' })).not.toThrow();
    });
  });
});
