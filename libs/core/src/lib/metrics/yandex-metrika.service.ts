import { DOCUMENT, inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { METRIC_CONFIG } from './metrics.interface';

declare global {
  interface Window {
    ym?: (...params: unknown[]) => void;
    dataLayer?: { push: (params: object) => void };
  }
}

@Injectable({
  providedIn: 'root',
})
export class YandexMetrikaService {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly config = inject(METRIC_CONFIG);

  private get counter() {
    if (
      this.document &&
      this.document.defaultView &&
      typeof this.document.defaultView.ym !== 'undefined' &&
      this.config.counter
    ) {
      return this.document.defaultView.ym;
    }

    return () => {
      /* empty */
    };
  }

  private get dataLayer() {
    if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined' && this.config.counter) {
      return window.dataLayer;
    }

    return { push: () => undefined };
  }

  hit(url: string, options?: object): void {
    const { error, forward } = this.activatedRoute.snapshot.queryParams;

    let clearReferrer = false;
    if (
      error ||
      forward ||
      !this.config.domains.every((domain) => this.document && this.document.referrer.indexOf(domain) < 0) ||
      !this.config.paths.every((path) => this.document && this.document.location.pathname.indexOf(path) < 0)
    ) {
      clearReferrer = true;
    }

    const optionsAll: { referer?: string; scale?: Record<string, unknown> } = { ...options };
    if (clearReferrer) {
      optionsAll.referer = '';
    }

    try {
      this.counter(this.config.counter, 'hit', url, optionsAll);
    } catch (err: unknown) {
      console.error(err);
    }
  }

  reachGoal(target: string, options?: object): void {
    try {
      this.counter(this.config.counter, 'reachGoal', target, options);
    } catch (error: unknown) {
      console.error(error);
    }
  }

  set(params: object, options?: object): void {
    this.counter(this.config.counter, 'userParams', params, options);
  }

  call(method: string, params?: object | string | number | boolean): void {
    this.counter(this.config.counter, method, params);
  }

  purchase(params: object): void {
    this.dataLayer.push(params);
  }
}
