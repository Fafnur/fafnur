import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CollaborationComponent } from './collaboration/collaboration.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SocialComponent } from './socials/social.component';

@Component({
  selector: 'fafnur-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SocialComponent, CollaborationComponent, MatrixComponent],
})
export class AsideComponent {}
