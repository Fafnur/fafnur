import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, RendererFactory2, signal } from '@angular/core';

export type Theme = 'system' | 'light' | 'dark';

const USER_THEME = 'user-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(null, null);

  readonly $currentTheme = signal<Theme>(
    (this.document.defaultView?.localStorage?.getItem(USER_THEME) as Theme) ?? 'system',
  );

  constructor() {
    effect(() => {
      const theme = this.$currentTheme();

      if (
        theme === 'dark' ||
        (theme === 'system' &&
          !!this.document.defaultView?.matchMedia &&
          this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        this.renderer.addClass(this.document.body, 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark');
      }
    });
  }

  select(theme: Theme): void {
    this.$currentTheme.set(theme);
    this.document.defaultView?.localStorage.setItem(USER_THEME, theme);
  }
}
