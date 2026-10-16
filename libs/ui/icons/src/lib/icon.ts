import { Component, input, numberAttribute } from '@angular/core';

@Component({
  template: '<ng-content/>',
})
export class Icon {
  protected get defaultWidth(): number {
    return 28;
  }

  protected get defaultHeight(): number {
    return 28;
  }

  readonly $width = input(this.defaultWidth, { alias: 'width', transform: numberAttribute });
  readonly $height = input(this.defaultHeight, { alias: 'height', transform: numberAttribute });
}
