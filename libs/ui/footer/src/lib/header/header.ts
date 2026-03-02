import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-header',
  template: '<ng-content />',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400',
  },
})
export class Header {}
