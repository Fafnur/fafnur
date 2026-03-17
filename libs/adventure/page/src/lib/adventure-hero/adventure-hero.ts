import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Headline } from '@fafnur/ui/headline';
import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-adventure-hero',
  imports: [Unit, Headline],
  templateUrl: './adventure-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AdventureHero {}
