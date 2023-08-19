import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IconService } from '@fafnur/core';

import { appStore, playStore } from './markets.icons';

@Component({
  selector: 'fafnur-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule],
})
export class MarketsComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.add('app_store', appStore);
    this.iconService.add('play_store', playStore);
  }
}
