import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-novel-text',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-sm leading-relaxed',
    '[class.text-gray-400]': `$color() === 'primary'`,
    '[class.dark:text-gray-500]': `$color() === 'primary'`,
    '[class.text-mist-400]': `$color() === 'secondary'`,
    '[class.dark:text-mist-500]': `$color() === 'secondary'`,
    '[class.text-gray-900]': `$color() === 'tertiary'`,
    '[class.dark:text-gray-100]': `$color() === 'tertiary'`,
  },
})
export class NovelText {
  readonly $color = input<Color>('primary', { alias: 'color' });
  readonly $inline = input(false, { alias: 'inline', transform: booleanAttribute });
}
