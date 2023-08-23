import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class CvComponent {}
