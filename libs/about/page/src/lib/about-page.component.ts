import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent, RowComponent, ColumnComponent, TabletDirective, WebDirective],
})
export class AboutPageComponent {}
