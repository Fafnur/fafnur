import { Route } from '@angular/router';

import { AsideComponent } from '@fafnur/ui/aside';
import { FooterComponent } from '@fafnur/ui/footer';
import { HeaderComponent } from '@fafnur/ui/header';
import { ContentLayoutComponent, LayoutComponent } from '@fafnur/ui/layout';

/* eslint-disable  max-len */
export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header',
      },
      {
        path: '',
        component: FooterComponent,
        outlet: 'footer',
      },
      {
        path: '',
        component: ContentLayoutComponent,
        children: [
          {
            path: '',
            component: AsideComponent,
            outlet: 'aside',
          },
          {
            path: '',
            loadComponent: () => import('@fafnur/home/page').then((modules) => modules.HomePageComponent),
            data: {
              sitemap: {
                loc: '/',
                lastmod: '2023-10-21',
                changefreq: 'weekly',
              },
            },
          },
          {
            path: 'about',
            loadComponent: () => import('@fafnur/about/page').then((modules) => modules.AboutPageComponent),
            data: {
              sitemap: {
                loc: '/about',
                lastmod: '2023-10-21',
                changefreq: 'weekly',
              },
              meta: {
                title: 'Все о Fafnur',
                description:
                  'Я фронтенд-разработчик с более чем 7-летним опытом в создании современных и функциональных веб-приложений. Мой основной стек это: Angular, NX, Universal (SSR), Localization, Redux, TypeScript и JavaScript',
              },
            },
          },
        ],
      },
      {
        path: '**',
        loadComponent: () => import('@fafnur/errors/not-found/page').then((modules) => modules.NotFoundPageComponent),
      },
    ],
  },
];
/* eslint-enable  max-len */
