import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonMode = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'fafnur-buttons,[fafnurButtons]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white font-semibold transition',
    '[class.bg-yellow-600.hover:bg-yellow-700]': `$mode() === 'primary'`,
  },
})
export class Button {
  readonly $mode = input<ButtonMode>('primary', { alias: 'mode' });
}
