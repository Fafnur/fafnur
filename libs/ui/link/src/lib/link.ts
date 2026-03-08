import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Color } from '@fafnur/ui/common';

@Component({
  selector: 'fafnur-link,[fafnurLink]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'underline',
    '[class.text-orange-600.hover:text-orange-700]': `$color() === 'primary'`,
  },
})
export class Link {
  readonly $color = input<Color>('primary', { alias: 'color' });
}
