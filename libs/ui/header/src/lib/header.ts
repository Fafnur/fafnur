import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-header',
  imports: [Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
