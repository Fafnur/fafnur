import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent],
})
export class HomePageComponent {}
