import { inject, provideAppInitializer } from '@angular/core';

import { GoogleAnalyticsService } from './google-analytics.service';
import { MetricService } from './metric.service';
import type { MetricConfig } from './metrics.interface';
import { METRIC_CONFIG } from './metrics.interface';
import { YandexMetrikaService } from './yandex-metrika.service';

export function provideMetrics(config: MetricConfig) {
  return [
    {
      provide: METRIC_CONFIG,
      useValue: config,
    },
    YandexMetrikaService,
    GoogleAnalyticsService,
    MetricService,
    provideAppInitializer(() => inject(MetricService).init()),
  ];
}
