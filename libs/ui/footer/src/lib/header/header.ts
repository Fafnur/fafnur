import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-header',
  template: '<ng-content />',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block text-sm font-semibold uppercase tracking-wider text-mauve-500 dark:text-mauve-400',
  },
})
export class Header {}
