import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fafnur-tab,[fafnurTab]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'py-3 text-sm font-medium transition-colors border-b-2',
    '[class.text-gray-500]': `!$active()`,
    '[class.border-transparent]': `!$active()`,
    '[class.border-yellow-600]': `$active()`,
    '[class.text-yellow-600]': `$active()`,
  },
})
export class Tab {
  readonly $active = input(false, { alias: 'active', transform: booleanAttribute });
}
