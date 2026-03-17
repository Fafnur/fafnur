import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Title } from '@fafnur/ui/title';

import { AdventureList } from './adventure-list/adventure-list';

@Component({
  selector: 'fafnur-adventure-works',
  imports: [AdventureList, Title],
  templateUrl: './adventure-works.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AdventureWorks {}
