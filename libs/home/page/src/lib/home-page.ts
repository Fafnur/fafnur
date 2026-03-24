import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PATHS, SeoService } from '@fafnur/core';

import { HomeCard } from './home-card/home-card';

@Component({
  selector: 'fafnur-home-page',
  imports: [HomeCard],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative flex align-middle justify-center min-h-[calc(100vh-4rem)] bg-[url(/novel/who.jpg)] bg-cover bg-center',
  },
})
export class HomePage {
  readonly paths = PATHS;

  constructor() {
    inject(SeoService).update({
      title: $localize`:Home Page|SEO Title:Fafnur — Interactive Adventure by an Angular Master`,
      description: $localize`:Home Page|SEO Description:Explore an interactive text quest that reveals the story of a frontend developer. Discover who I am through choices and dialogue — not just a list of skills.`,
    });
  }
}
