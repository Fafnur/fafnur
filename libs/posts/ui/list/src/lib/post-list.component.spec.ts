import { NgForOf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';

import { POSTS_STUB } from '@fafnur/posts/common';
import { PostCardComponent } from '@fafnur/posts/ui/card';
import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';

import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PostListComponent,
        MockDirectives(NgForOf, TabletDirective, WebDirective),
        MockComponents(PostCardComponent, RowComponent, ColumnComponent),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    component.posts = POSTS_STUB;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
