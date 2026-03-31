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
    effect((onCleanup) => {
      const theme = this.$currentTheme();
      const mediaQuery = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

      this.applyTheme(!!mediaQuery?.matches);

      if (theme === 'system' && mediaQuery) {
        const handler = (e: MediaQueryListEvent) => this.applyTheme(e.matches);
        mediaQuery.addEventListener('change', handler);
        onCleanup(() => mediaQuery.removeEventListener('change', handler));
      }
    });
  }

  select(theme: Theme): void {
    this.$currentTheme.set(theme);
    this.document.defaultView?.localStorage.setItem(USER_THEME, theme);
  }

  private applyTheme(prefersDark: boolean): void {
    const theme = this.$currentTheme();
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
  }
}
