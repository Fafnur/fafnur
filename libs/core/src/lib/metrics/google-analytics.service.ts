import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { METRIC_CONFIG } from './metrics.interface';

declare global {
  interface Window {
    readonly gtag?: (...params: unknown[]) => void;
  }
}

@Injectable()
export class GoogleAnalyticsService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly config = inject(METRIC_CONFIG);

  get gtag() {
    if (
      this.document &&
      this.document.defaultView &&
      typeof this.document.defaultView.gtag !== 'undefined' &&
      this.config?.ids.length > 0
    ) {
      return this.document.defaultView.gtag;
    }

    return () => {
      /* empty */
    };
  }

  set(payload: object): void {
    try {
      this.gtag('set', payload);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  sendEvent(action: string, payload?: object): void {
    try {
      if (action === 'purchase') {
        this.gtag('event', action, {
          ...payload,
        });
      } else {
        this.gtag('event', action, {
          ...payload,
          event_category: payload && 'eventCategory' in payload ? payload.eventCategory : undefined,
          event_label: payload && 'eventLabel' in payload ? payload.eventLabel : undefined,
          value: payload && 'eventValue' in payload ? payload.eventValue : null,
        });
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }

  sendPurchase(payload?: object): void {
    try {
      this.gtag('event', 'purchase', payload);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  sendNavigation(url: string): void {
    try {
      if (
        !this.config.domains.every((domain) => this.document && this.document.referrer.indexOf(domain) < 0) ||
        !this.config.paths.every((path) => this.document && this.document.location.pathname.indexOf(path) < 0)
      ) {
        this.set({ page_referrer: this.document?.defaultView?.location.origin ?? '' });
      }

      for (const key of this.config.ids) {
        this.gtag('config', key, {
          page_title: this.title.getTitle(),
          page_path: url,
        });
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }
}
