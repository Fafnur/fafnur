import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Experience } from '../about-experience-card';
import { AboutExperienceTime } from './about-experience-time/about-experience-time';

@Component({
  selector: 'fafnur-about-experience-period',
  imports: [AboutExperienceTime],
  templateUrl: './about-experience-period.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-xs text-yellow-600 dark:text-yellow-200 whitespace-nowrap',
  },
})
export class AboutExperiencePeriod {
  readonly $experience = input.required<Experience>({ alias: 'experience' });
}
