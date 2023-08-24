import { Post, PostGroup } from './post.interface';

export const POST_STUB: Post = {
  image: '/assets/images/demo/1.jpg',
  title: 'Static Blog with Angular and Contentful',
  route: 'https://angular-blog.fafn.ru',
  created: '2023-08-16',
};

export const POSTS_STUB: Post[] = [POST_STUB];

export const POSTS_GROUP: PostGroup = {
  title: 'Habr',
  posts: POSTS_STUB,
};

export const POSTS_GROUPS: PostGroup[] = [POSTS_GROUP];
