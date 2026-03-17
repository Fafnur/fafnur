import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { Container } from '@fafnur/ui/container';
import { IconGamepad, IconHome, IconPerson } from '@fafnur/ui/icons';

import { NavLink } from './nav-link/nav-link';

@Component({
  selector: 'fafnur-header',
  imports: [Container, RouterLink, RouterLinkActive, NavLink, IconHome, IconGamepad, IconPerson],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-b bg-mauve-100 text-mauve-700 border-mauve-200 dark:bg-mauve-950 dark:text-mauve-400 dark:border-mauve-800',
  },
})
export class Header {
  readonly paths = PATHS;
}
