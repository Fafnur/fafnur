import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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

  constructor(private readonly matrixService: MatrixService) {}

  onSelect(): void {
    this.matrixService.select();
  }

  @HostListener('document:matrixFinish')
  matrix() {
    this.show = false;
  }
}
