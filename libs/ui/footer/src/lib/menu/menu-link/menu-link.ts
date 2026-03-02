import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-menu-link,[fafnurMenuLink]',
  imports: [],
  template: '<ng-content />',
  styleUrl: './menu-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'block transition hover:underline text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
  },
})
export class MenuLink {}
