import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-fab,[fafnurFab]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-colors focus:outline-none focus:ring-2',
    '[class.bg-yellow-600]': `$color() === 'primary'`,
    '[class.hover:bg-yellow-700]': `$color() === 'primary'`,
    '[class.focus:ring-yellow-400]': `$color() === 'primary'`,
  },
})
export class Fab {
  readonly $color = input<Color>('primary', { alias: 'color' });
}
