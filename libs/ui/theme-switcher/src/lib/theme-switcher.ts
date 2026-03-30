import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Theme, ThemeService } from '@fafnur/core';
import { IconDisplay, IconMoon, IconSun } from '@fafnur/ui/icons';

import { ThemeRadio } from './theme-radio/theme-radio';

@Component({
  selector: 'fafnur-theme-switcher',
  imports: [ThemeRadio, IconDisplay, IconSun, IconMoon],
  templateUrl: './theme-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 dark:bg-white/10 cursor-pointer',
    role: 'radiogroup',
  },
})
export class ThemeSwitcher {
  private readonly themeService = inject(ThemeService);

  readonly $currentTheme = this.themeService.$currentTheme;

  onSelect(theme: Theme): void {
    this.themeService.select(theme);
  }
}
