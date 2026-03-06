import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-social-link,a[fafnurSocialLink]',
  template: '<ng-content />',
  styleUrl: './social-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex h-9 w-9 items-center justify-center rounded-full bg-mauve-200 text-mauve-600 hover:bg-mauve-300 hover:text-mauve-900 dark:bg-mauve-800 dark:text-mauve-400 dark:hover:bg-mauve-700 dark:hover:text-white transition',
  },
})
export class SocialLink {}
