import { Binding, InjectionToken } from '@angular/core';

export interface PopupOptions {
  readonly data?: unknown;
  readonly disableClose?: boolean;
  readonly panelClass?: string;
  readonly unique?: boolean;
  readonly bindings?: Binding[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POPUP_REF = new InjectionToken<{ onClose(value?: any): void }>('POPUP_REF');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POPUP_DATA = new InjectionToken<any>('POPUP_DATA');
