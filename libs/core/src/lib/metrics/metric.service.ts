import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

import { GoogleAnalyticsService } from './google-analytics.service';
import { YandexMetrikaService } from './yandex-metrika.service';

/**
 * Metric params
 * @publicApi
 */
export interface MetricOptions {
  /**
   * Yandex Metrika options
   */
  readonly ym?: Record<string, unknown>;

  /**
   * Google Analytics options
   */
  readonly ga?: Record<string, unknown>;
}

/**
 * GA config
 * @publicApi
 */
export interface MetricConfig {
  /**
   * Google Analytics uid collection
   */
  ids: string[];

  /**
   * Domains for reset referer
   */
  counter: string | number;

  /**
   * Paths for reset referer
   */
  paths: string[];

  /**
   * Domains for reset referer
   */
  domains: string[];
}

/**
 * InjectionToken for yandex metrika config
 * @publicApi
 */
export const METRIC_CONFIG = new InjectionToken<Partial<MetricConfig>>('MetricConfig');

/**
 * Service for send all metrics.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 *
 * First, add script in index.html for Google Analytics and Yandex Metrika.
 *
 * Second, add service on component and send event.
 *
 * ```
 * @Component({})
 * export class SimpleComponent {
 *   constructor(private readonly metricService: MetricService) {}
 *
 *   onSubmit(): void {
 *     this.metricService.send('submit', { ym: { user: 1 }, ga: { customerId: 1 } });
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MetricService {
  private readonly enabled: boolean;

  constructor(
    private readonly yandexMetrikaService: YandexMetrikaService,
    private readonly googleAnalyticsService: GoogleAnalyticsService,
    private readonly router: Router,
    private readonly destroyRef: DestroyRef,
    @Inject(METRIC_CONFIG) private readonly config: Partial<MetricConfig>,
    // eslint-disable-next-line @typescript-eslint/ban-types
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    this.enabled = isPlatformBrowser(this.platformId);

    if (this.enabled) {
      this.googleAnalyticsService.init(this.config);
      this.yandexMetrikaService.init(this.config);

      this.router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          tap((event) => window.setTimeout(() => this.navigation(event.urlAfterRedirects), 0)),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    }
  }

  init(): void {
    /* empty */
  }

  /**
   * Send change SPA page
   *
   * @param url A new url
   */
  navigation(url: string): void {
    if (this.enabled) {
      this.yandexMetrikaService.hit(url);
      this.googleAnalyticsService.sendNavigation(url);
    }
  }

  /**
   * Send analytic event
   *
   * @param action Action name
   * @param options Action options
   */
  send(action: string, options?: MetricOptions): void {
    if (this.enabled) {
      if (action !== 'purchase') {
        this.yandexMetrikaService.reachGoal(action, options?.ym);
      }
      const eventAction = options?.ga?.['eventAction'];

      this.googleAnalyticsService.sendEvent(typeof eventAction === 'string' ? eventAction : action, options?.ga);
    }
  }

  set(options: MetricOptions): void {
    if (options.ga) {
      this.googleAnalyticsService.set(options.ga);
    }
    if (options.ym) {
      this.yandexMetrikaService.set(options.ym);
    }
  }
}
