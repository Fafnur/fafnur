import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { v4 } from 'uuid';

/**
 * Service for providing access to Window in Angular browser application.
 */
@Injectable({
  providedIn: 'root',
})
export class WindowService {
  /**
   * Current document
   *
   * @see DOCUMENT
   * @see https://angular.dev/api/common/DOCUMENT
   * @private
   */
  readonly document = inject(DOCUMENT);

  /**
   * Current platform is browser.
   *
   * @see PLATFORM_ID
   * @see https://angular.dev/api/common/isPlatformBrowser
   * @private
   */
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Return current window from document.defaultView
   *
   * @see Window
   * @see Document
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
   */
  get window(): Window {
    const window: Window | null = this.document.defaultView;

    if (window === null) {
      throw new Error('Default view is not defined!');
    }

    return window;
  }

  constructor() {
    if (this.isBrowser && !this.window.name) {
      this.window.name = v4();
    }
  }

  /**
   * Reload page
   */
  reload(): void {
    if (!this.isBrowser) {
      console.warn('Reload page on server platform.`');
      return;
    }

    this.document.location.href = `${this.document.location.href}`;
  }

  /**
   * Redirect
   */
  redirect(href: string): void {
    if (!this.isBrowser) {
      console.warn('Redirect on server platform.`');
      return;
    }

    this.document.location.href = href;
  }
}
