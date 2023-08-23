import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class WhoComponent {}
