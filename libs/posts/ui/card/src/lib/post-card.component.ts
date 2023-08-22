import { DatePipe, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { Post } from '@fafnur/posts/common';

import { PostCardImagePipe } from './post-card-image.pipe';

@Component({
  selector: 'fafnur-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, MatButtonModule, PostCardImagePipe, NgStyle, DatePipe],
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post;
}
