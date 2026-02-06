import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@fafnur/ui/layout'),
    children: [
      {
        path: 'novels',
        loadComponent: () => import('@fafnur/novels/page'),
      },
    ],
  },
];
