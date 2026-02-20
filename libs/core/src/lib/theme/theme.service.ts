import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, RendererFactory2, signal } from '@angular/core';

export type Theme = 'system' | 'light' | 'dark';

const USER_THEME = 'user-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(null, null);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly $currentTheme = signal<Theme | undefined>(undefined);

  constructor() {
    effect(() => {
      const theme = this.$currentTheme();
      if (!theme) {
        return;
      }

      if (theme === 'dark') {
        this.renderer.addClass(this.document.body, 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark');
      }
    });
  }

  init(): void {
    if (!this.isBrowser) {
      return;
    }

    const theme = (localStorage.getItem(USER_THEME) ?? 'system') as Theme;
    this.$currentTheme.set(theme);
  }

  select(theme: Theme): void {
    this.$currentTheme.set(theme);
    localStorage.setItem(USER_THEME, theme);
  }
}
