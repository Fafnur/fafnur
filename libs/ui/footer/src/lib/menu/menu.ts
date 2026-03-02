import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PATHS } from '@fafnur/core';
import { Unit } from '@fafnur/ui/unit';

import { Header } from '../header/header';
import { MenuLink } from './menu-link/menu-link';

@Component({
  selector: 'fafnur-menu',
  imports: [Header, MenuLink, RouterLink, Unit],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  readonly paths = PATHS;
}
