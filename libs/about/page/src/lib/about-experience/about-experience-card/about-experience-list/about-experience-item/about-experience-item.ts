import { Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-item',
  template: '<ng-content/>',
  host: {
    class: 'flex gap-2 text-sm text-yellow-700 dark:text-yellow-200',
  },
})
export class AboutExperienceItem {}
