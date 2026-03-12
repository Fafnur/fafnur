import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-post',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-sm font-medium text-yellow-600 dark:text-yellow-200',
  },
})
export class AboutExperiencePost {}
