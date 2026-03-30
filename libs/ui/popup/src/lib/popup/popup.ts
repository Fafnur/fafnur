import {
  ChangeDetectionStrategy,
  Component,
  effect,
  Injector,
  input,
  output,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { PopupOptions } from '../popup.type';
import { PopupPanel } from './popup-panel/popup-panel';
import { Observable } from 'rxjs';

export interface PopupRef<T = unknown> {
  readonly ref: Popup;
  readonly closed: Observable<T | undefined>;
  readonly widgetId: string;
}

@Component({
  selector: 'fafnur-popup',
  imports: [PopupPanel],
  templateUrl: './popup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm',
    '(click)': 'onBackdrop($event)',
  },
})
export class Popup {
  readonly $child = input.required<Type<unknown>>({ alias: 'child' });
  readonly $injector = input.required<Injector>({ alias: 'injector' });
  readonly $options = input.required<PopupOptions>({ alias: 'options' });

  private readonly $viewContainerRef = viewChild.required('outlet', { read: ViewContainerRef });

  readonly closed = output<unknown>();

  constructor() {
    effect(() => {
      this.$viewContainerRef().clear();
      this.$viewContainerRef().createComponent(this.$child(), { injector: this.$injector() });
    });
  }

  onBackdrop(event: Event): void {
    if (event.target === event.currentTarget && !this.$options().disableClose) {
      this.closed.emit(undefined);
    }
  }

  onClose(value?: unknown): void {
    this.closed.emit(value);
  }
}
