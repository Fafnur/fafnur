import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-brand',
  imports: [ThemeSwitcher, Unit],
  templateUrl: './brand.html',
  styleUrl: './brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Brand {}
