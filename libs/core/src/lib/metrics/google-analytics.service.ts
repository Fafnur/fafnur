import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

declare global {
  interface Window {
    /**
     * GTag
     */
    readonly gtag?: (...params: unknown[]) => void;
  }
}

/**
 * GA config
 * @publicApi
 */
export interface GoogleAnalyticsConfig {
  /**
   * Google Analytics uid collection
   */
  ids: string[];

  /**
   * Google Analytics uid for webview
   */
  idsWebview: string[];

  /**
   * Domains for reset referer
   */
  domains: string[];

  /**
   * Paths for reset referer
   */
  paths: string[];

  platform?: string;
  appstore?: string;
}

/**
 * Google Analytics event interface
 * @publicApi
 */
export interface GoogleAnalyticsEvent<T = unknown> {
  [key: string]: unknown;

  /**
   * Event category
   */
  eventCategory?: string;

  /**
   * Event value
   */
  eventLabel?: string;

  /**
   * Event value
   */
  eventValue?: T;

  /**
   * Event action
   */
  eventAction?: string;
}

/**
 * Google Analytics navigation interface
 * @publicApi
 */
export interface GoogleAnalyticsNavigation {
  [key: string]: unknown;

  /**
   * Page title
   */
  title: string;

  /**
   * Current platform (web or app)
   */
  platform: string;

  /**
   * Current application store (google play, app store, xiaomi, ...)
   */
  appstore: string;

  /**
   * Customer ID
   */
  customerId: string;
}

/**
 * Service for send all metrics.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 *
 * First, add script in index.html for Google Analytics.
 *
 * ```
 * <!DOCTYPE html>
 * <html lang="en">
 *   <head>
 *     <meta charset="utf-8" />
 *     <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TAG"></script>
 *     <script>
 *       window.dataLayer = window.dataLayer || [];
 *       function gtag() {
 *         dataLayer.push(arguments);
 *       }
 *       gtag('js', new Date());
 *     </script>
 *   </head>
 *   <body>
 *     <app-root></app-root>
 *   </body>
 * </html>
 * ```
 *
 * Second, set config on AppModule:
 *
 * ```
 * @NgModule({
 *   providers: [
 *     {
 *       provide: GA_CONFIG,
 *       useValue: {
 *         ids: ['MY-ID-1', 'MY-ID-2'],
 *         idsWebview: ['MY-ID-1'],
 *       } as Partial<GoogleAnalyticsConfig>,
 *     },
 *   ],
 * })
 * export class AppCoreModule {}
 * ```
 *
 * Third, add service on component and send event.
 *
 * ```
 * @Component({})
 * export class SimpleComponent {
 *   constructor(private readonly googleAnalyticsService: GoogleAnalyticsService) {}
 *
 *   onSubmit(): void {
 *     this.googleAnalyticsService.sendEvent('submit', { eventLabel: 'Registration' });
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  /**
   * GA config
   */
  readonly config: GoogleAnalyticsConfig = {
    ids: [],
    idsWebview: [],
    paths: [],
    domains: [],
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly title: Title,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  get gtag() {
    if (this.document.defaultView && typeof this.document.defaultView.gtag !== 'undefined' && this.config.ids.length > 0) {
      return this.document.defaultView.gtag;
    }

    return () => {
      /* empty */
    };
  }

  init(config: Partial<GoogleAnalyticsConfig>): void {
    this.config.ids = config.ids ?? [];
    this.config.idsWebview = config.idsWebview ?? [];
    this.config.paths = config.paths ?? [];
    this.config.domains = config.domains ?? [];

    this.config.ids.forEach((id) => {
      this.gtag('config', id);
    });
  }

  /**
   * Set config for GA
   *
   * @param payload Payload with data
   */
  set(payload: object): void {
    try {
      this.gtag('set', payload);
    } catch (error) {
      /* empty */
    }
  }

  /**
   * Send Google Analytic event
   *
   * @param action Event name
   * @param payload Payload
   * @param values Custom values for GA
   * @param data Custom data on GA
   */
  sendEvent(action: string, payload?: Partial<GoogleAnalyticsEvent>, values?: object, data?: unknown): void {
    try {
      /* eslint-disable @typescript-eslint/naming-convention */
      this.gtag(
        'event',
        action,
        {
          event_category: payload?.eventCategory,
          event_label: payload?.eventLabel,
          value: payload?.eventValue,
          ...values,
        },
        data
      );
      /* eslint-enable @typescript-eslint/naming-convention */
    } catch (error) {
      /* empty */
    }
  }

  /**
   * Change SPA page
   *
   * @param url A new URL
   */
  sendNavigation(url: string): void {
    try {
      const { error, forward } = this.activatedRoute.snapshot.queryParams;

      if (
        error ||
        forward ||
        !this.config.domains.every((domain) => this.document.referrer.indexOf(domain) < 0) ||
        !this.config.paths.every((path) => this.document.location.pathname.indexOf(path) < 0)
      ) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.set({ page_referrer: this.document.defaultView?.location.origin ?? '' });
      }
      this.set({ dimension3: this.config.platform, dimension4: this.config.appstore });

      for (const key of this.config.ids) {
        /* eslint-disable @typescript-eslint/naming-convention */
        this.gtag('config', key, {
          page_title: this.title,
          page_path: url,
        });
        /* eslint-enable @typescript-eslint/naming-convention */
      }
    } catch (error) {
      /* empty */
    }
  }
}
