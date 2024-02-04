import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.scss'],
  standalone: true,
  imports: [TitleComponent, RouterLink],
})
export class PrivacyPageComponent {}
