import { InjectionToken } from '@angular/core';

export interface PopupOptions {
  readonly data?: unknown;
  readonly panelClass?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POPUP_REF = new InjectionToken<{ onClose(value?: any): void }>('POPUP_REF');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POPUP_DATA = new InjectionToken<any>('POPUP_DATA');
