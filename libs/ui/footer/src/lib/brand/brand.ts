import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSwitcher } from '@fafnur/ui/theme-switcher';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-brand',
  imports: [ThemeSwitcher, Unit],
  templateUrl: './brand.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Brand {}
