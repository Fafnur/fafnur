import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafnur-container[fluid]',
  standalone: true,
})
export class FluidDirective {}
