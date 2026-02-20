import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {}
