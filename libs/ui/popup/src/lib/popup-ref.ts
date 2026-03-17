import { ApplicationRef, ComponentRef } from '@angular/core';

import { Popup } from './popup/popup';

export class PopupRef {
  constructor(
    private readonly componentRef: ComponentRef<Popup>,
    private readonly appRef: ApplicationRef,
  ) {}

  close(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.location.nativeElement.remove();
    this.componentRef.destroy();
  }
}
