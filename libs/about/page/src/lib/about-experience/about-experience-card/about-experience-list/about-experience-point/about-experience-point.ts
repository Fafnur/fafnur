import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-point',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mt-1.5 w-1 h-1 min-w-1 rounded-full bg-yellow-400 dark:bg-yellow-600',
  },
})
export class AboutExperiencePoint {}
