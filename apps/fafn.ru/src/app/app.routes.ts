import { Route } from '@angular/router';

// import { PostLayoutComponent } from '@angular-blog/posts/ui/layout';
// import { FooterComponent } from '@angular-blog/ui/footer';
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
      //     {
      //       path: '',
      //       component: FooterComponent,
      //       outlet: 'footer',
      //     },
      //     {
      //       path: '',
      //       component: PostLayoutComponent,
      //       children: [
      //         {
      //           path: '',
      //           loadChildren: () => import('./routes/blog.routes').then((modules) => modules.blogRoutes),
      //         },
      //       ],
      //     },
      {
        path: '',
        loadComponent: () => import('@fafnur/home/page').then((modules) => modules.HomePageComponent),
      },
      //     {
      //       path: '**',
      //       loadComponent: () => import('@angular-blog/errors/not-found/page').then((modules) => modules.NotFoundPageComponent),
      //     },
    ],
  },
];
