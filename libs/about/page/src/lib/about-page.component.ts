import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ExperienceComponent } from './experience/experience.component';
import { StackComponent } from './stack/stack.component';
import { WhoComponent } from './who/who.component';

@Component({
  selector: 'fafnur-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [WhoComponent, ExperienceComponent, StackComponent],
})
export class AboutPageComponent {}
