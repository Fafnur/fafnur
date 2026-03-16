import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-button,[fafnurButton]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white font-semibold transition',
    '[class.bg-yellow-600]': `$color() === 'primary'`,
    '[class.hover:bg-yellow-700]': `$color() === 'primary'`,
  },
})
export class Button {
  readonly $color = input<Color>('primary', { alias: 'color' });
}
