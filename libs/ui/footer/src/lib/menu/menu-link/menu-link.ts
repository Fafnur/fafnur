import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-menu-link,[fafnurMenuLink]',
  imports: [],
  template: '<ng-content />',
  styleUrl: './menu-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'block transition hover:underline text-mauve-600 hover:text-mauve-900 dark:text-mauve-400 dark:hover:text-white',
  },
})
export class MenuLink {}
