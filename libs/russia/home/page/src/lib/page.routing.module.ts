import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    data: {
      meta: {
        title: 'Fafnur - senior Front-end Developer, Angular evangelist, Nx apologist, NodeJS warlock',
        description: 'Angular евангелист, Nx апологет, NodeJS чернокнижник. Пишу статьи на тему современного фронтенда и веб-разработки.',
        keywords: 'fafnur, fafn, angular, frontend, web development, nx, ngrx, universal, apollo, nativescript, nodejs',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
