import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NovelArrow } from './novel-arrow/novel-arrow';

@Component({
  selector: 'fafnur-novel-link,[fafnurNovelLink]',
  template: '<fafnur-novel-arrow /><ng-content />',
  imports: [NovelArrow],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'group flex items-baseline gap-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors',
  },
})
export class NovelLink {}
