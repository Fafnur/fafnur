import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { VisitorService } from '../visitors/visitor.service';
import { WindowService } from '../window/window.service';
import { GoogleAnalyticsService } from './google-analytics.service';
import { MetricService } from './metric.service';
import { YandexMetrikaService } from './yandex-metrika.service';

describe('MetricService', () => {
  let service: MetricService;
  let mockYm: { [K in 'hit' | 'reachGoal' | 'set' | 'call' | 'purchase']: ReturnType<typeof vi.fn> };
  let mockGa: { [K in 'set' | 'sendEvent' | 'sendNavigation' | 'sendPurchase']: ReturnType<typeof vi.fn> };
  let mockVisitor: { get: ReturnType<typeof vi.fn> };
  let mockWindow: { isBrowser: boolean };

  beforeEach(() => {
    mockYm = {
      hit: vi.fn(),
      reachGoal: vi.fn(),
      set: vi.fn(),
      call: vi.fn(),
      purchase: vi.fn(),
    };
    mockGa = {
      set: vi.fn(),
      sendEvent: vi.fn(),
      sendNavigation: vi.fn(),
      sendPurchase: vi.fn(),
    };
    mockVisitor = { get: vi.fn().mockReturnValue('visitor-uuid') };
    mockWindow = { isBrowser: true };

    TestBed.configureTestingModule({
      providers: [
        MetricService,
        provideRouter([]),
        { provide: YandexMetrikaService, useValue: mockYm },
        { provide: GoogleAnalyticsService, useValue: mockGa },
        { provide: VisitorService, useValue: mockVisitor },
        { provide: WindowService, useValue: mockWindow },
      ],
    });

    service = TestBed.inject(MetricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('navigation()', () => {
    it('should call ym.hit with url', () => {
      service.navigation('/about');
      expect(mockYm.hit).toHaveBeenCalledWith('/about');
    });

    it('should call ga.sendNavigation with url', () => {
      service.navigation('/about');
      expect(mockGa.sendNavigation).toHaveBeenCalledWith('/about');
    });
  });

  describe('send()', () => {
    it('should call ym.reachGoal with action when no options', () => {
      service.send('click_button');
      expect(mockYm.reachGoal).toHaveBeenCalledWith('click_button', undefined);
    });

    it('should call ga.sendEvent with action when no options', () => {
      service.send('click_button');
      expect(mockGa.sendEvent).toHaveBeenCalledWith('click_button', undefined);
    });

    it('should pass options.ym to ym.reachGoal', () => {
      service.send('goal', { ym: { foo: 'bar' } });
      expect(mockYm.reachGoal).toHaveBeenCalledWith('goal', { foo: 'bar' });
    });

    it('should pass options.ga to ga.sendEvent', () => {
      service.send('goal', { ga: { eventCategory: 'cat' } });
      expect(mockGa.sendEvent).toHaveBeenCalledWith('goal', { eventCategory: 'cat' });
    });

    it('should pass undefined to ym when only options.ga provided', () => {
      service.send('goal', { ga: { eventCategory: 'cat' } });
      expect(mockYm.reachGoal).toHaveBeenCalledWith('goal', undefined);
    });

    it('should use options.ga.eventAction as ga action when provided', () => {
      service.send('fallback', { ga: { eventAction: 'custom_action' } });
      expect(mockGa.sendEvent).toHaveBeenCalledWith('custom_action', { eventAction: 'custom_action' });
    });
  });

  describe('purchase()', () => {
    it('should call ga.sendPurchase when options provided', () => {
      service.purchase({ orderId: 'order-1' });
      expect(mockGa.sendPurchase).toHaveBeenCalledWith({ orderId: 'order-1' });
    });

    it('should call ym.purchase when ya provided', () => {
      service.purchase(undefined, { ecommerce: {} });
      expect(mockYm.purchase).toHaveBeenCalledWith({ ecommerce: {} });
    });

    it('should not call ga.sendPurchase when options is undefined', () => {
      service.purchase(undefined, { ecommerce: {} });
      expect(mockGa.sendPurchase).not.toHaveBeenCalled();
    });

    it('should not call ym.purchase when ya is undefined', () => {
      service.purchase({ orderId: 'order-1' });
      expect(mockYm.purchase).not.toHaveBeenCalled();
    });
  });

  describe('set()', () => {
    it('should call ga.set when options.ga provided', () => {
      service.set({ ga: { user_id: 'u1' } });
      expect(mockGa.set).toHaveBeenCalledWith({ user_id: 'u1' });
    });

    it('should call ym.set when options.ym provided', () => {
      service.set({ ym: { UserID: 'u1' } });
      expect(mockYm.set).toHaveBeenCalledWith({ UserID: 'u1' });
    });

    it('should not call ga.set when options.ga is absent', () => {
      service.set({ ym: { UserID: 'u1' } });
      expect(mockGa.set).not.toHaveBeenCalled();
    });

    it('should not call ym.set when options.ym is absent', () => {
      service.set({ ga: { user_id: 'u1' } });
      expect(mockYm.set).not.toHaveBeenCalled();
    });
  });

  describe('setVisitor()', () => {
    it('should call ga.set with user_id', () => {
      service.setVisitor('visitor-1');
      expect(mockGa.set).toHaveBeenCalledWith({ user_id: 'visitor-1' });
    });

    it('should call ym.call with setUserID', () => {
      service.setVisitor('visitor-1');
      expect(mockYm.call).toHaveBeenCalledWith('setUserID', 'visitor-1');
    });

    it('should call ym.call with userParams', () => {
      service.setVisitor('visitor-1');
      expect(mockYm.call).toHaveBeenCalledWith('userParams', { UserID: 'visitor-1' });
    });

    it('should call ym.hit with current router url and UserID param', () => {
      service.setVisitor('visitor-1');
      expect(mockYm.hit).toHaveBeenCalledWith(expect.any(String), { params: { UserID: 'visitor-1' } });
    });
  });

  describe('init()', () => {
    it('should call setVisitor when isBrowser is true', () => {
      const spy = vi.spyOn(service, 'setVisitor');
      service.init();
      expect(spy).toHaveBeenCalledWith('visitor-uuid');
    });

    it('should not call setVisitor when isBrowser is false', () => {
      mockWindow.isBrowser = false;
      const spy = vi.spyOn(service, 'setVisitor');
      service.init();
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call navigation on RouterEnd event when isBrowser is true', async () => {
      const router = TestBed.inject(Router);
      const spy = vi.spyOn(service, 'navigation');
      service.init();
      await router.navigate(['/']);
      expect(spy).toHaveBeenCalled();
    });
  });
});
