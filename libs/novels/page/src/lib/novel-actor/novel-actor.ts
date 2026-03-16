import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-novel-actor',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-xs font-bold uppercase tracking-widest',
    '[class.text-gray-400]': `$color() === 'primary'`,
    '[class.dark:text-gray-600]': `$color() === 'primary'`,
    '[class.text-mist-400]': `$color() === 'secondary'`,
    '[class.dark:text-mist-600]': `$color() === 'secondary'`,
    '[class.text-yellow-600]': `$color() === 'tertiary'`,
    '[class.dark:text-yellow-500]': `$color() === 'tertiary'`,
  },
})
export class NovelActor {
  readonly $color = input<Color>('primary', { alias: 'color' });
}
