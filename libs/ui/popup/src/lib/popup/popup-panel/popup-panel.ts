import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-popup-panel',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block relative w-full max-w-sm mx-4 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl p-6',
    '(click)': `$event.stopPropagation()`,
  },
})
export class PopupPanel {}
