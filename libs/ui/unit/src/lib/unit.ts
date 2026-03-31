import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-unit',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Unit {}
