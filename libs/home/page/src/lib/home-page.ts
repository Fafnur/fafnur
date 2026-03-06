import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PATHS } from '@fafnur/core';

import { HomeCard } from './home-card/home-card';

@Component({
  selector: 'fafnur-home-page',
  imports: [HomeCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex align-middle justify-center min-h-[calc(100vh-4rem)] bg-white dark:bg-mauve-900',
  },
})
export class HomePage {
  readonly paths = PATHS;
}
