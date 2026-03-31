import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { PATHS } from '@fafnur/core';
import { provideSitemap } from '@fafnur/server/sitemap';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideSitemap({
      routes: [PATHS.home, PATHS.about, PATHS.adventure, PATHS.novels],
      hostname: 'https://fafn.ru',
    }),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
