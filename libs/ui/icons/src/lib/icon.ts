import { ChangeDetectionStrategy, Component, input, numberAttribute } from '@angular/core';

@Component({
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  protected defaultWidth = 28;
  protected defaultHeight = 28;

  readonly $width = input(this.defaultWidth, { alias: 'width', transform: numberAttribute });
  readonly $height = input(this.defaultHeight, { alias: 'height', transform: numberAttribute });
}
