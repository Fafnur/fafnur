import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CollaborationComponent } from './collaboration/collaboration.component';
import { SocialComponent } from './socials/social.component';

@Component({
  selector: 'fafnur-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SocialComponent, CollaborationComponent],
})
export class AsideComponent {}
