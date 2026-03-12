import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-item',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex gap-2 text-sm text-yellow-600 dark:text-yellow-200',
  },
})
export class AboutExperienceItem {}
