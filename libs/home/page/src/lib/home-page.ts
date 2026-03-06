import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PATHS } from '@fafnur/core';

import { HomeBlur } from './home-blur/home-blur';
import { HomeCard } from './home-card/home-card';

@Component({
  selector: 'fafnur-home-page',
  imports: [HomeBlur, HomeCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex align-middle justify-center min-h-screen relative overflow-hidden transition-colors duration-300 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900',
  },
})
export class HomePage {
  readonly paths = PATHS;
}
