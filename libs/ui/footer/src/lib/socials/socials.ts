import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconDevto, IconGithub, IconHabr, IconLinkedin, IconMedium, IconTelegram, IconX } from '@fafnur/ui/icons';

import { SocialLink } from './social-link/social-link';

@Component({
  selector: 'fafnur-socials',
  imports: [IconDevto, IconGithub, IconHabr, IconLinkedin, IconMedium, IconX, IconTelegram, SocialLink],
  templateUrl: './socials.html',
  styleUrl: './socials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex justify-center gap-4 flex-wrap',
  },
})
export class Socials {}
