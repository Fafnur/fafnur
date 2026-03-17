import { ApplicationRef, createComponent, inject, Injectable, signal, Type } from '@angular/core';

import { Popup } from './popup/popup';
import { PopupRef } from './popup-ref';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private readonly appRef = inject(ApplicationRef);

  readonly $isOpen = signal(false);

  private currentRef: PopupRef | null = null;

  open(component: Type<unknown>): void {
    if (this.$isOpen()) return;

    const componentRef = createComponent(Popup, {
      environmentInjector: this.appRef.injector,
    });

    const popupRef = new PopupRef(componentRef, this.appRef);

    componentRef.setInput('content', component);
    componentRef.setInput('popupRef', popupRef);

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.location.nativeElement);

    this.currentRef = popupRef;
    this.$isOpen.set(true);

    // Wrap close to update state
    const originalClose = popupRef.close.bind(popupRef);
    popupRef.close = () => {
      originalClose();
      this.currentRef = null;
      this.$isOpen.set(false);
    };
  }

  close(): void {
    this.currentRef?.close();
  }
}
