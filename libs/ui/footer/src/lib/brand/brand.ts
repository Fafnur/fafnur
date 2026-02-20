import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

@Component({
  selector: 'fafnur-brand',
  imports: [ThemeSwitcher],
  templateUrl: './brand.html',
  styleUrl: './brand.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Brand {}
