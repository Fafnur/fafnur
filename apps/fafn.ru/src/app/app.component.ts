import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
