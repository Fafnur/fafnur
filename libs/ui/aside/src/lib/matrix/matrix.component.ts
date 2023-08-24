import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconService, MetricService, pillIcon } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { MatrixService } from './matrix.service';

@Component({
  selector: 'fafnur-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent, MatButtonModule, MatIconModule, NgIf],
})
export class MatrixComponent {
  show = true;

  constructor(
    private readonly matrixService: MatrixService,
    private readonly metricService: MetricService,
    private readonly iconService: IconService
  ) {
    this.iconService.add('pill', pillIcon);
  }

  onSelect(): void {
    this.matrixService.select();
    this.metricService.send('matrix-red');
  }

  onCancel(): void {
    this.show = false;
    this.metricService.send('matrix-blue');
  }

  @HostListener('document:matrixFinish')
  matrix() {
    this.show = false;
  }
}
