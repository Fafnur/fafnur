import { Route } from '@angular/router';

import { PATHS, withNavigationRoutes } from '@fafnur/core';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@fafnur/ui/layout'),
    children: withNavigationRoutes([
      {
        path: PATHS.current,
        loadComponent: () => import('@fafnur/ui/header'),
        outlet: 'header',
      },
      {
        path: PATHS.current,
        loadComponent: () => import('@fafnur/ui/footer'),
        outlet: 'footer',
      },
      {
        path: PATHS.home,
        loadComponent: () => import('@fafnur/home/page'),
      },
      {
        path: PATHS.about,
        loadComponent: () => import('@fafnur/about/page'),
      },
      {
        path: PATHS.adventure,
        loadComponent: () => import('@fafnur/adventure/page'),
      },
    ]),
  },
  {
    path: '',
    loadComponent: () => import('@fafnur/ui/layout'),
    children: withNavigationRoutes([
      {
        path: PATHS.novels,
        loadComponent: () => import('@fafnur/novels/page'),
      },
    ]),
  },
];
