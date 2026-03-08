import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AdventureItem } from './adventure-item/adventure-item';

@Component({
  selector: 'fafnur-adventure-list',
  imports: [AdventureItem],
  templateUrl: './adventure-list.html',
  styleUrl: './adventure-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-3 max-w-xl',
  },
})
export class AdventureList {
  readonly list = [
    $localize`Adventure List|Choose who you are - HR, developer, regular person or just clicked.`,
    $localize`Adventure List|You answer questions—sometimes technical, sometimes about ice cream and superpowers.`,
    $localize`Adventure List|You get a description: startup, corporation, legacy, or "you would rewrite everything."`,
  ];
}
