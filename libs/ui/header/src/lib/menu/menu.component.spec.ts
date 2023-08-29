import { NgFor } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MockComponents, MockDirectives, MockModule } from 'ng-mocks';

import { AsideComponent } from '@fafnur/ui/aside';

import { AboutComponent } from '../about/about.component';
import { GithubComponent } from '../github/github.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuComponent,
        MockModule(MatIconModule),
        MockModule(MatButtonModule),
        MockModule(MatSidenavModule),
        MockComponents(AboutComponent, GithubComponent, HomeComponent, AsideComponent),
        MockDirectives(NgFor, RouterLink, RouterLinkActive),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
