import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconService, MetricService, SOCIAL_ICONS, SOCIAL_LINKS } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-socials',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent, MatButtonModule, MatIconModule, NgForOf],
})
export class SocialComponent {
  readonly links = SOCIAL_LINKS;

  constructor(private readonly iconService: IconService, private readonly metricService: MetricService) {
    SOCIAL_ICONS.forEach((social) => this.iconService.add(social.name, social.icon));
  }

  onGoSocial(social: string): void {
    this.metricService.send('social', {
      ga: {
        eventValue: social,
      },
      ym: { value: social },
    });
  }
}
