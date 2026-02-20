import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';
import { Unit } from '@fafnur/ui/unit';

import { Copyright } from './copyright/copyright';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';

@Component({
  selector: 'fafnur-footer',
  imports: [Container, ThemeSwitcher, Copyright, Unit],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'py-3 bg-slate-200 dark:bg-slate-800',
  },
})
export class Footer {}
