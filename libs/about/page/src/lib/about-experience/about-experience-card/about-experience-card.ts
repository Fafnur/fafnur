import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { AboutExperienceBox } from './about-experience-box/about-experience-box';
import { AboutExperienceCompany } from './about-experience-company/about-experience-company';
import { AboutExperienceDot } from './about-experience-dot/about-experience-dot';
import { AboutExperienceHeader } from './about-experience-header/about-experience-header';
import { AboutExperienceList } from './about-experience-list/about-experience-list';
import { AboutExperiencePeriod } from './about-experience-period/about-experience-period';
import { AboutExperiencePost } from './about-experience-post/about-experience-post';

export interface Experience {
  readonly company: string;
  readonly post: string;
  readonly description: string[];
  readonly start: string;
  readonly end: string;
  readonly time: string;
}

@Component({
  selector: 'fafnur-about-experience-card',
  imports: [
    AboutExperienceDot,
    AboutExperienceHeader,
    AboutExperienceCompany,
    AboutExperiencePeriod,
    AboutExperiencePost,
    AboutExperienceList,
    AboutExperienceBox,
  ],
  templateUrl: './about-experience-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block relative pl-8 pb-8 last:pb-0',
  },
})
export class AboutExperienceCard {
  readonly $experience = input.required<Experience>({ alias: 'experience' });
}
