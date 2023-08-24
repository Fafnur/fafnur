import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MetricService } from '@fafnur/core';
import { TitleComponent } from '@fafnur/ui/title';

import { MatrixService } from './matrix.service';

@Component({
  selector: 'fafnur-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent, MatButtonModule, NgIf],
})
export class MatrixComponent {
  show = true;

  constructor(private readonly matrixService: MatrixService, private readonly metricService: MetricService) {}

  onSelect(): void {
    this.matrixService.select();
    this.metricService.send('show-matrix');
  }

  @HostListener('document:matrixFinish')
  matrix() {
    this.show = false;
  }
}
