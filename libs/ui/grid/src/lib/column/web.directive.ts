import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ColumnComponent } from './column.component';

const className = `web`;
const classNameOffset = `web-offset`;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafnur-column[web],fafnur-column[web-offset]',
  standalone: true,
})
export class WebDirective {
  private size?: number;
  private offset?: number;

  @Input() set web(size: string | number | undefined | null) {
    if (this.size) {
      this.renderer.removeClass(this.elementRef.nativeElement, `${className}-${this.size}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, `${className}`);
    }

    const value = Number(size);
    if (Number.isInteger(value)) {
      this.size = value;
      this.renderer.addClass(this.elementRef.nativeElement, `${className}-${this.size}`);
    } else {
      this.size = undefined;
      this.renderer.addClass(this.elementRef.nativeElement, `${className}`);
    }
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('web-offset') set webOffset(offset: string | number | undefined | null) {
    if (this.offset) {
      this.renderer.removeClass(this.elementRef.nativeElement, `${classNameOffset}-${this.offset}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, `${classNameOffset}`);
    }

    const value = Number(offset);
    if (Number.isInteger(value)) {
      this.offset = value;
      this.renderer.addClass(this.elementRef.nativeElement, `${classNameOffset}-${this.offset}`);
    } else {
      this.offset = undefined;
      this.renderer.addClass(this.elementRef.nativeElement, `${classNameOffset}`);
    }
  }

  constructor(private readonly renderer: Renderer2, private readonly elementRef: ElementRef<ColumnComponent>) {}
}
