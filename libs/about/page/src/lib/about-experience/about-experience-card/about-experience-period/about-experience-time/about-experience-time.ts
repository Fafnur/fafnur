import { Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-time',
  template: '<span class="sr-only">.</span><ng-content/>',
  host: {
    class:
      'inline-flex gap-1 ml-1 px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200',
  },
})
export class AboutExperienceTime {}
