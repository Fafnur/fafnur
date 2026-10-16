import { Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-post',
  template: '<ng-content/>',
  host: {
    class: 'text-sm font-medium text-yellow-700 dark:text-yellow-200',
  },
})
export class AboutExperiencePost {}
