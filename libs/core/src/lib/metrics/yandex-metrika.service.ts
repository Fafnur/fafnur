import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare global {
  interface Window {
    /**
     * YandexMetrika
     */
    readonly ym?: (...params: unknown[]) => void;
  }
}

/**
 * Yandex metrika config
 * @publicApi
 */
export interface YandexMetrikaConfig {
  /**
   * Counter
   */
  counter: string | number | null;

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
 * Service for Yandex Metrika
 * @publicApi
 *
 * @usageNotes
 * ### Example
 *
 * First, add script in index.html:
 *
 * ```
 * <!DOCTYPE html>
 * <html lang="en">
 *   <head>
 *     <meta charset="utf-8" />
 *     <script>
 *       (function (m, e, t, r, i, k, a) {
 *         m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
 *         m[i].l = 1 * new Date();
 *         (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]), (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
 *       })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
 *
 *       ym(<YOUR_COUNTER>, 'init', {
 *         clickmap: true,
 *         trackLinks: true,
 *         accurateTrackBounce: true,
 *         webvisor: true,
 *         ecommerce: 'dataLayer',
 *       });
 *     </script>
 *   </head>
 *   <body>
 *     <app-root> </app-root>
 *   </body>
 * </html>
 * ```
 *
 * Then, you can send hit and reachGoal
 *
 * ```
 * @Component({})
 * export class SimpleComponent {
 *   constructor(private readonly yandexMetrikaService: YandexMetrikaService) {}
 *
 *   onSubmit(): void {
 *     this.yandexMetrikaService.reachGoal('submit');
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class YandexMetrikaService {
  /**
   * Yandex metrika config
   * @private
   */
  readonly config: YandexMetrikaConfig = {
    counter: 0,
    paths: [],
    domains: [],
  };

  get counter() {
    if (this.document.defaultView && typeof this.document.defaultView.ym !== 'undefined' && this.config.counter) {
      return this.document.defaultView.ym;
    }

    return () => {
      /* empty */
    };
  }

  constructor(private readonly activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private readonly document: Document) {}

  init(config: Partial<YandexMetrikaConfig>): void {
    this.config.counter = config.counter ?? 0;
    this.config.paths = config.paths ?? [];
    this.config.domains = config.domains ?? [];
  }

  /**
   * Sent hit
   *
   * @param url Url page
   * @param options Options for hit
   */
  hit(url: string, options?: object): void {
    const { error, forward } = this.activatedRoute.snapshot.queryParams;

    let clearReferrer = false;
    if (
      error ||
      forward ||
      !this.config.domains.every((domain) => this.document.referrer.indexOf(domain) < 0) ||
      !this.config.paths.every((path) => this.document.location.pathname.indexOf(path) < 0)
    ) {
      clearReferrer = true;
    }

    const optionsAll: { referer?: string } = { ...options };
    if (clearReferrer) {
      optionsAll.referer = '';
    }

    try {
      this.counter(this.config.counter, 'hit', url, optionsAll);
    } catch (err) {
      /* empty */
    }
  }

  /**
   * Sent reachGoal
   *
   * @param target Target name
   * @param options Options for hit
   */
  reachGoal(target: string, options?: object): void {
    try {
      this.counter(this.config.counter, 'reachGoal', target, options);
    } catch (error) {
      /* empty */
    }
  }

  set(params: Record<string, unknown>, options?: Record<string, unknown>): void {
    this.counter(this.config.counter, 'userParams', params, options);
  }
}
