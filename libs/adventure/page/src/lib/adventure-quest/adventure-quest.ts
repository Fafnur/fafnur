import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Link } from '@fafnur/ui/link';
import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-adventure-quest',
  imports: [Unit, Link, Title],
  templateUrl: './adventure-quest.html',
  styleUrl: './adventure-quest.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AdventureQuest {}
