import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NovelImage } from './novel-image/novel-image';

@Component({
  selector: 'fafnur-novel-scene',
  imports: [NovelImage],
  template: '<fafnur-novel-image />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'col-span-3 shrink-0 aspect-video md:aspect-auto md:shrink bg-gray-100 dark:bg-gray-800 overflow-hidden',
  },
})
export class NovelScene {}
