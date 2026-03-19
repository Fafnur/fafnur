import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconImage } from '@fafnur/ui/icons';

@Component({
  selector: 'fafnur-novel-image',
  imports: [IconImage],
  template: '<fafnur-icon-image width="62" height="62" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600',
  },
})
export class NovelImage {}
