import { ChangeDetectionStrategy, Component, input } from '@angular/core';

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
  templateUrl: './about-experience-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutExperienceCard {
  readonly $experience = input.required<Experience>({ alias: 'experience' });
}