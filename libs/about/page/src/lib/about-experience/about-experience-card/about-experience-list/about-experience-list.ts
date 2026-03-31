import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { AboutExperienceItem } from './about-experience-item/about-experience-item';
import { AboutExperiencePoint } from './about-experience-point/about-experience-point';

@Component({
  selector: 'fafnur-about-experience-list',
  imports: [AboutExperienceItem, AboutExperiencePoint],
  templateUrl: './about-experience-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-1 mt-1',
  },
})
export class AboutExperienceList {
  readonly $list = input.required<string[]>({ alias: 'list' });
}
