import { NgModule } from '@angular/core';
import { API_CONFIG, ENVIRONMENTS, META_CONFIG, META_CONFIG_OG, MetaConfig, MetaConfigOg, MetaModule } from '@loaney/core';
import { ApiConfig } from '@loaney/core/lib/api/api.service';

import { LocalizationModule } from '@fafnur/russia/localization';

import { environment } from '../environments/environment';

@NgModule({
  imports: [MetaModule, LocalizationModule],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment,
    },
    {
      provide: API_CONFIG,
      useValue: {
        host: environment.apiHost,
      } as Partial<ApiConfig>,
    },
    {
      provide: META_CONFIG,
      useValue: {
        title: 'Fafnur',
        description: 'Senior Front-end Developer, Angular evangelist, Nx apologist, NodeJS warlock',
        keywords: '',
        hostname: environment.host,
      } as Partial<MetaConfig>,
    },
    {
      provide: META_CONFIG_OG,
      useValue: {
        title: 'Fafnur',
        description: 'Senior Front-end Developer, Angular evangelist, Nx apologist, NodeJS warlock',
        type: 'website',
        siteName: 'fafn.ru',
        image: '/assets/images/site.jpg',
        imageType: 'image/jpeg',
        imageWidth: '1200',
        imageHeight: '600',
      } as Partial<MetaConfigOg>,
    },
  ],
})
export class AppCoreModule {}
