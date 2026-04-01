import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Icon } from '../icon';

@Component({
  selector: 'fafnur-icon-pdf',
  templateUrl: './icon-pdf.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPdf extends Icon {}
