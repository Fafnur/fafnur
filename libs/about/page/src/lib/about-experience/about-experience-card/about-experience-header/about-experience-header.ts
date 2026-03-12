import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-about-experience-header',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1',
  },
})
export class AboutExperienceHeader {}
