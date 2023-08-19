import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CopyrightComponent {
  readonly year = new Date().getFullYear();
}
