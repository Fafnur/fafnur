import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class CvComponent {
  constructor(private readonly metricService: MetricService) {}

  onDownload(): void {
    this.metricService.send('download-cv');
  }
}
