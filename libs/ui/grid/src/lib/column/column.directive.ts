import { ElementRef, Renderer2 } from '@angular/core';

import { ColumnComponent } from './column.component';

export abstract class ColumnDirective {
  protected size?: number;
  protected offset?: number;

  protected constructor(
    protected readonly renderer: Renderer2,
    protected readonly elementRef: ElementRef<ColumnComponent>,
    protected readonly className: string
  ) {}

  updateSize(size: string | number | undefined | null) {
    if (this.size) {
      this.renderer.removeClass(this.elementRef.nativeElement, `${this.className}-${this.size}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, `${this.className}`);
    }

    const value = Number(size);
    if (Number.isInteger(value)) {
      this.size = value;
      this.renderer.addClass(this.elementRef.nativeElement, `${this.className}-${this.size}`);
    } else {
      this.size = undefined;
      this.renderer.addClass(this.elementRef.nativeElement, `${this.className}`);
    }
  }

  updateOffset(offset: string | number | undefined | null) {
    if (this.offset) {
      this.renderer.removeClass(this.elementRef.nativeElement, `${this.className}-offset-${this.offset}`);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, `${this.className}-offset`);
    }

    const value = Number(offset);
    if (Number.isInteger(value)) {
      this.offset = value;
      this.renderer.addClass(this.elementRef.nativeElement, `${this.className}-offset-${this.offset}`);
    } else {
      this.offset = undefined;
      this.renderer.addClass(this.elementRef.nativeElement, `${this.className}-offset`);
    }
  }
}
