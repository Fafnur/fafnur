import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ColumnComponent } from './column.component';
import { ColumnDirective } from './column.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafnur-column[handset],fafnur-column[handset-offset]',
  standalone: true,
})
export class HandsetDirective extends ColumnDirective {
  @Input() set handset(size: string | number | undefined | null) {
    this.updateSize(size);
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('handset-offset') set handsetOffset(offset: string | number | undefined | null) {
    this.updateOffset(offset);
  }

  constructor(renderer: Renderer2, elementRef: ElementRef<ColumnComponent>) {
    super(renderer, elementRef, 'handset');
  }
}
