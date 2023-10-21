import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AsideComponent } from '@fafnur/ui/aside';

import { AboutComponent } from '../about/about.component';
import { GithubComponent } from '../github/github.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'fafnur-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AsideComponent,
    AboutComponent,
    GithubComponent,
    HomeComponent,
  ],
})
export class MenuComponent {}
