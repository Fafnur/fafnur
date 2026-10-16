import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';

import { BuildDateService } from '@fafnur/core';

import { experienceDuration, toDate } from '../../../experience/experience';
import { Experience } from '../about-experience-card';
import { AboutExperienceTime } from './about-experience-time/about-experience-time';

@Component({
  selector: 'fafnur-about-experience-period',
  imports: [AboutExperienceTime, DatePipe],
  templateUrl: './about-experience-period.html',
  host: {
    class: 'text-xs text-yellow-700 dark:text-yellow-200 whitespace-nowrap',
  },
})
export class AboutExperiencePeriod {
  readonly $experience = input.required<Experience>({ alias: 'experience' });

  private readonly buildDate = inject(BuildDateService);

  readonly $start = computed(() => toDate(this.$experience().start));
  readonly $end = computed(() => {
    const end = this.$experience().end;

    return end ? toDate(end) : null;
  });
  readonly $duration = computed(() => {
    const { start, end } = this.$experience();

    return experienceDuration(start, end ?? this.buildDate.month);
  });
}
