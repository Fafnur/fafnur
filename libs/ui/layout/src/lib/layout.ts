import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fafnur-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col min-h-screen',
  },
})
export class Layout {}
