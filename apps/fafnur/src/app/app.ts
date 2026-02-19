import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'fafnur-root',
  template: '<router-outlet/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
