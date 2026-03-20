import type { EnvironmentProviders, Provider } from '@angular/core';
import { provideAppInitializer } from '@angular/core';

import { generateSitemap, hasSitemap } from './generator';

export interface SitemapOptions {
  readonly routes: string[];
  readonly hostname: string;
  readonly fileName?: string;
}

export function provideSitemap(options: SitemapOptions): (Provider | EnvironmentProviders)[] {
  return [
    provideAppInitializer(() => {
      const fileName = options?.fileName ?? 'sitemap.xml';

      if (hasSitemap(fileName)) {
        return;
      }

      generateSitemap(options.routes, options.hostname, fileName);
    }),
  ];
}
