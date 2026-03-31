import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-time',
  template: '.<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ml-1 px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-200',
  },
})
export class AboutExperienceTime {}
