export interface Post {
  readonly title: string;
  readonly created: string;
  readonly image: string;
  readonly route: string;
}

export interface PostGroup {
  readonly title: string;
  readonly posts: Post[];
}
