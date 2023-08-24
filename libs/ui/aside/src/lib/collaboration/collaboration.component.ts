import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class CollaborationComponent {
  constructor(private readonly metricService: MetricService) {}

  onCollaboration(): void {
    this.metricService.send('collaboration');
  }
}
