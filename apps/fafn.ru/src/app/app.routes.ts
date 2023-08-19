import { Route } from '@angular/router';

import { FooterComponent } from '@fafnur/ui/footer';
import { HeaderComponent } from '@fafnur/ui/header';
import { LayoutComponent } from '@fafnur/ui/layout';

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
        loadComponent: () => import('@fafnur/home/page').then((modules) => modules.HomePageComponent),
      },
      {
        path: '**',
        loadComponent: () => import('@fafnur/errors/not-found/page').then((modules) => modules.NotFoundPageComponent),
      },
    ],
  },
];
