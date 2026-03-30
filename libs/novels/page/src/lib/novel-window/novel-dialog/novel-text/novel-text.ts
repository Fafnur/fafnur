import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-novel-text',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'leading-relaxed',
    '[class.text-sm]': `$size() === 'sm'`,
    '[class.text-base]': `$size() === 'base'`,
    '[class.text-gray-500]': `$color() === 'primary'`,
    '[class.dark:text-gray-400]': `$color() === 'primary'`,
    '[class.text-mist-500]': `$color() === 'secondary'`,
    '[class.dark:text-mist-400]': `$color() === 'secondary'`,
    '[class.text-gray-800]': `$color() === 'tertiary'`,
    '[class.dark:text-gray-200]': `$color() === 'tertiary'`,
  },
})
export class NovelText {
  readonly $color = input<Color>('primary', { alias: 'color' });
  readonly $size = input<'sm' | 'base'>('sm', { alias: 'size' });
  readonly $inline = input(false, { alias: 'inline', transform: booleanAttribute });
}
