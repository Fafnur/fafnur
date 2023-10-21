import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MockComponents, MockModule } from 'ng-mocks';

import { ContainerComponent } from '@fafnur/ui/container';

import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        MockComponents(
          ThemeSwitcherComponent,
          ContainerComponent,
          LogoComponent,
          MenuComponent,
          AboutComponent,
          GithubComponent,
          HomeComponent,
          LanguageSwitcherComponent
        ),
        MockModule(MatToolbarModule),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
