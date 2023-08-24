import { NgForOf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';

import { PostListComponent } from '@fafnur/posts/ui/list';
import { ContainerComponent } from '@fafnur/ui/container';
import { TitleComponent } from '@fafnur/ui/title';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, NgForOf, MockComponents(ContainerComponent, TitleComponent, PostListComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
