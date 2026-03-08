import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-title,[fafnurTitle]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-2xl font-bold text-gray-900 dark:text-white',
  },
})
export class Title {}
