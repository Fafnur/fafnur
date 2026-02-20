import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly $width = input<number>(28, { alias: 'width' });
  readonly $height = input<number>(28, { alias: 'height' });
}
