import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Post } from '@fafnur/posts/common';
import { PostCardComponent } from '@fafnur/posts/ui/card';
import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';

@Component({
  selector: 'fafnur-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, PostCardComponent, RowComponent, ColumnComponent, TabletDirective, WebDirective],
})
export class PostListComponent {
  @Input({ required: true }) posts!: Post[];
}
