import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class StackComponent {}
