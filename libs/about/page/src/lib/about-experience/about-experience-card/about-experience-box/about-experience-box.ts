import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-box',
  template: '<ng-content/>',
  styleUrl: './about-experience-box.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex flex-col gap-2 rounded-2xl border border-yellow-100 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950 p-5 shadow-sm hover:shadow-md transition-shadow',
  },
})
export class AboutExperienceBox {}
