import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SocialComponent } from './socials/social.component';

@Component({
  selector: 'fafnur-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SocialComponent],
})
export class AsideComponent {}
