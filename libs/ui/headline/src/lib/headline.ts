import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-headline,[fafnurHeadline]',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white',
  },
})
export class Headline {}
