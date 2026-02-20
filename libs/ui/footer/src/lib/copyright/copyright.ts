import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-copyright',
  imports: [],
  templateUrl: './copyright.html',
  styleUrl: './copyright.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Copyright {
  readonly year = new Date().getFullYear();
}
