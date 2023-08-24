import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MockDirectives, MockModule } from 'ng-mocks';

import { GithubComponent } from './github.component';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubComponent, MockModule(MatButtonModule), MockDirectives(RouterLink)],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
