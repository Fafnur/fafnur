import { APP_ID, APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { META_CONFIG, MetaConfig, MetaService, METRIC_CONFIG, MetricConfig, MetricService } from '@fafnur/core';

// import { MetaService, MetricService } from '@angular-blog/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    {
      provide: APP_ID,
      useValue: 'fafnur',
    },
    {
      provide: META_CONFIG,
      useValue: {
        hostname: 'https://fafn.ru',
        siteName: 'Fafnur',
        image: '/assets/images/site.jpg',
        imageType: 'image/jpeg',
        imageWidth: '1920',
        imageHeight: '1024',
        title: 'Fafnur - Senior Front-end Developer, Angular evangelist, Nx apologist, NodeJS warlock',
        description: 'Angular евангелист, Nx апологет, NodeJS чернокнижник. Пишу статьи на тему современного фронтенда и веб-разработки.',
      } as Partial<MetaConfig>,
    },
    {
      provide: METRIC_CONFIG,
      useValue: {
        counter: 88052285,
        ids: ['G-SM4WX8C0M1'],
        domains: ['fafn.ru'],
        paths: [],
      } as MetricConfig,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (metaService: MetaService, metricService: MetricService) => {
        return () => {
          metaService.init();
          metricService.init();
        };
      },
      multi: true,
      deps: [MetaService, MetricService],
    },
  ],
};
