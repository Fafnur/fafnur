import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

import { Experience } from '../about-experience-card';

@Component({
  selector: 'fafnur-about-experience-period',
  imports: [Unit],
  templateUrl: './about-experience-period.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-xs text-yellow-400 dark:text-yellow-200 whitespace-nowrap',
  },
})
export class AboutExperiencePeriod {
  readonly $experience = input.required<Experience>({ alias: 'experience' });
}
