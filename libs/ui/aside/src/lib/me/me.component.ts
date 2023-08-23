import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RowComponent, ColumnComponent, TabletDirective, WebDirective, TitleComponent],
})
export class MeComponent {}
