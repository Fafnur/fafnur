import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

import { VisitorService } from '../visitors/visitor.service';
import { WindowService } from '../window/window.service';
import { GoogleAnalyticsService } from './google-analytics.service';
import type { MetricOptions } from './metrics.interface';
import { YandexMetrikaService } from './yandex-metrika.service';

@Injectable()
export class MetricService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly visitorService = inject(VisitorService);
  private readonly windowService = inject(WindowService);

  private readonly yandexMetrikaService = inject(YandexMetrikaService);
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);

  init(): void {
    if (!this.windowService.isBrowser) {
      return;
    }
    this.setVisitor(this.visitorService.get());
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        tap((event) => this.navigation(event.urlAfterRedirects)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  navigation(url: string): void {
    this.yandexMetrikaService.hit(url);
    this.googleAnalyticsService.sendNavigation(url);
  }

  send(action: string, options?: MetricOptions): void {
    this.yandexMetrikaService.reachGoal(
      action,
      typeof options?.ym !== 'undefined' ? options?.ym : typeof options?.ga !== 'undefined' ? undefined : options,
    );

    const act = typeof options?.ga?.eventAction === 'string' ? options?.ga?.eventAction : action;
    this.googleAnalyticsService.sendEvent(
      act,
      typeof options?.ga !== 'undefined' ? options?.ga : typeof options?.ym !== 'undefined' ? undefined : options,
    );
  }

  purchase(options?: object, ya?: object): void {
    if (options) {
      this.googleAnalyticsService.sendPurchase(options);
    }

    if (ya) {
      this.yandexMetrikaService.purchase(ya);
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

  setVisitor(visitor: string): void {
    this.googleAnalyticsService.set({ user_id: visitor });
    this.yandexMetrikaService.call('setUserID', visitor);
    this.yandexMetrikaService.call('userParams', { UserID: visitor });
    this.yandexMetrikaService.hit(this.router.url, { params: { UserID: visitor } });
  }
}
