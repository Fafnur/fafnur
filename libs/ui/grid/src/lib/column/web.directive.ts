import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ColumnComponent } from './column.component';
import { ColumnDirective } from './column.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafnur-column[web],fafnur-column[web-offset]',
  standalone: true,
})
export class WebDirective extends ColumnDirective {
  @Input() set web(size: string | number | undefined | null) {
    this.updateSize(size);
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('web-offset') set webOffset(offset: string | number | undefined | null) {
    this.updateOffset(offset);
  }

  constructor(renderer: Renderer2, elementRef: ElementRef<ColumnComponent>) {
    super(renderer, elementRef, 'web');
  }
}
