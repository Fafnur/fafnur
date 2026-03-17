import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

@Component({
  selector: 'fafnur-brand',
  imports: [ThemeSwitcher, Unit],
  templateUrl: './brand.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Brand {}
