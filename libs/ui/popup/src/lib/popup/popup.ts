import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Type } from '@angular/core';

import { PopupRef } from '../popup-ref';

@Component({
  selector: 'fafnur-popup',
  imports: [NgComponentOutlet],
  templateUrl: './popup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Popup {
  readonly $content = input.required<Type<unknown>>({ alias: 'content' });
  readonly $popupRef = input.required<PopupRef>({ alias: 'popupRef' });

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.$popupRef().close();
    }
  }
}
