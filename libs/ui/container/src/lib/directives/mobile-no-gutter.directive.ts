import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafnur-container[mobile-no-gutter]',
  standalone: true,
})
export class MobileNoGutterDirective {}
