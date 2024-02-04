import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class LifeComponent {
  constructor(private readonly metricService: MetricService) {}

  onLife(): void {
    this.metricService.send('life');
  }
}
