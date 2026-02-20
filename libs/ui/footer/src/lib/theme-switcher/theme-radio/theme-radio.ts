import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'fafnur-theme-radio',
  template: '<ng-content />',
  styleUrl: './theme-radio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'rounded-full p-1.5 *:size-7 data-checked:bg-white data-checked:ring data-checked:inset-ring data-checked:ring-gray-950/10 data-checked:inset-ring-white/10 sm:p-0 dark:data-checked:bg-gray-700 dark:data-checked:text-white dark:data-checked:ring-transparent',
    role: 'radio',
    '[attr.tabindex]': `$checked() ? 0 : -1`,
    '[attr.aria-checked]': `$checked()`,
    '[attr.data-checked]': `$checked() ? true : undefined`,
  },
})
export class ThemeRadio {
  readonly $checked = input.required<boolean>({ alias: 'checked' });
}
