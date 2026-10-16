import { Component, input } from '@angular/core';

@Component({
  selector: 'fafnur-container',
  template: '<ng-content />',
  host: {
    class: 'container mx-auto px-4 lg:max-w-7xl',
    '[class]': `$type()`,
  },
})
export class Container {
  readonly $type = input<'block' | 'flex'>('block', { alias: 'type' });
}
