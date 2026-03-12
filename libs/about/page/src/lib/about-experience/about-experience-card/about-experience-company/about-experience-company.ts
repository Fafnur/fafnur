import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-company',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'font-semibold text-yellow-900 dark:text-white text-base',
  },
})
export class AboutExperienceCompany {}
