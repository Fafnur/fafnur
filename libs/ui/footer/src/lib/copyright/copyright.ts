import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconX, IconMedium, IconHabr } from '@fafnur/ui/icons';

import { SocialLink } from './social-link/social-link';

@Component({
  selector: 'fafnur-copyright',
  imports: [IconX, IconMedium, IconHabr, SocialLink],
  templateUrl: './copyright.html',
  styleUrl: './copyright.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'block mt-10 border-t pt-6 text-center text-sm border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-500',
  },
})
export class Copyright {
  readonly year = new Date().getFullYear();
}
