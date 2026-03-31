import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-dot',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400 ring-4 ring-white dark:ring-yellow-950',
  },
})
export class AboutExperienceDot {}
