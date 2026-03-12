import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

import { AboutExperienceItem } from './about-experience-item/about-experience-item';

@Component({
  selector: 'fafnur-about-experience-list',
  imports: [AboutExperienceItem, Unit],
  templateUrl: './about-experience-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-1 mt-1',
  },
})
export class AboutExperienceList {
  readonly $list = input.required<string[]>({ alias: 'list' });
}
