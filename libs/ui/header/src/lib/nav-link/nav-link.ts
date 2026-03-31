import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-nav-link,a[fafnurNavLink]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex h-10 w-10 items-center justify-center rounded-full text-mauve-600 hover:bg-mauve-100 hover:text-mauve-900 dark:text-mauve-400 dark:hover:bg-mauve-800 dark:hover:text-white transition',
  },
})
export class NavLink {}
