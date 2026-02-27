import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-social-link,a[fafnurSocialLink]',
  template: '<ng-content />',
  styleUrl: './social-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition',
  },
})
export class SocialLink {}
