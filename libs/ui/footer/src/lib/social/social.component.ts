import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconService, linkedinIcon, mediumIcon, NavigationLink, telegramIcon, twitterIcon, vkIcon } from '@fafnur/core';

@Component({
  selector: 'fafnur-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, MatIconModule, MatButtonModule],
})
export class SocialComponent {
  readonly links: (NavigationLink & { icon: string })[] = [
    {
      route: 'https://vk.com/fafnur',
      label: 'Vkontakte',
      icon: 'vkontakte',
    },
    {
      route: 'https://t.me/f_a_f_n_u_r',
      label: 'Telegram',
      icon: 'telegram',
    },
    {
      route: 'https://www.linkedin.com/in/fafnur',
      label: 'linkedin',
      icon: 'linkedin',
    },
    {
      route: 'https://twitter.com/Fafnur1',
      label: 'Twitter',
      icon: 'twitter',
    },
    {
      route: 'https://medium.com/@fafnur',
      label: 'Medium',
      icon: 'medium',
    },
  ];

  constructor(private readonly iconService: IconService) {
    this.iconService.add('vkontakte', vkIcon);
    this.iconService.add('telegram', telegramIcon);
    this.iconService.add('linkedin', linkedinIcon);
    this.iconService.add('twitter', twitterIcon);
    this.iconService.add('medium', mediumIcon);
  }
}
