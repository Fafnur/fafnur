import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Container } from '@fafnur/ui/container';

@Component({
  selector: 'fafnur-adventure-page',
  imports: [Container],
  templateUrl: './adventure-page.html',
  styleUrl: './adventure-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventurePage {}
