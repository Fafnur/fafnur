import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@fafnur/ui/container';
import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';

@Component({
  selector: 'fafnur-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, RowComponent, ColumnComponent, TabletDirective, WebDirective],
})
export class ContentLayoutComponent {}
