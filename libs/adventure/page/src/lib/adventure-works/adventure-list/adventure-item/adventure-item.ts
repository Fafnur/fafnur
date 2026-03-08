import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Unit } from '@fafnur/ui/unit';

@Component({
  selector: 'fafnur-adventure-item',
  imports: [Unit],
  templateUrl: './adventure-item.html',
  styleUrl: './adventure-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex gap-3 items-start',
  },
})
export class AdventureItem {
  readonly $index = input.required<number | string>({ alias: 'index' });
  readonly $content = input.required<number | string>({ alias: 'content' });
}
