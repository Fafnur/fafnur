import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher {}
