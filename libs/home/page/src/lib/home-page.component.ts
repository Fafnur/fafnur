import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PostGroup } from '@fafnur/posts/common';
import { PostListComponent } from '@fafnur/posts/ui/list';
import { TitleComponent } from '@fafnur/ui/title';

@Component({
  selector: 'fafnur-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TitleComponent, PostListComponent, NgForOf],
})
export class HomePageComponent {
  readonly content: PostGroup[] = [
    {
      title: $localize`:Home Page|:Demo projects from article series`,
      posts: [
        {
          image: '/assets/images/demo/1.jpg',
          title: $localize`:Home Page|:Static Blog with Angular and Contentful`,
          route: 'https://angular-blog.fafn.ru',
          created: '2023-08-16',
        },
        {
          image: '/assets/images/demo/2.jpg',
          title: $localize`:Home Page|:An example of a simple news site with Redux`,
          route: 'https://redux.fafn.ru',
          created: '2022-11-24',
        },
        {
          image: '/assets/images/demo/3.jpg',
          title: $localize`:Home Page|:An example of a business card site with a product catalog`,
          route: 'https://banshop.fafn.ru',
          created: '2021-07-05',
        },
      ],
    },
    {
      title: $localize`:Home Page|:Articles on Habr`,
      posts: [
        {
          image: '/assets/images/habr/1.jpg',
          title: $localize`:Home Page|:Creating a Static Blog with Angular and Contentful`,
          route: 'https://habr.com/ru/articles/754928/',
          created: '2022-08-16',
        },
        {
          image: '/assets/images/habr/2.jpg',
          title: $localize`:Home Page|:How I ported a blog from CakePHP to Angular`,
          route: 'https://habr.com/ru/articles/754884/',
          created: '2022-08-16',
        },
        {
          image: '/assets/images/habr/3.jpg',
          title: $localize`:Home Page|:How Evercookie works in 2023`,
          route: 'https://habr.com/ru/articles/750856/',
          created: '2022-07-28',
        },
        {
          image: '/assets/images/habr/4.jpg',
          title: $localize`:Home Page|:Redux in Angular. Roundtrip`,
          route: 'https://habr.com/ru/articles/706092/',
          created: '2022-12-17',
        },
        {
          image: '/assets/images/habr/5.jpg',
          title: $localize`:Home Page|:How I made a business card website in Angular`,
          route: 'https://habr.com/ru/articles/658787/',
          created: '2022-04-03',
        },
        {
          image: '/assets/images/habr/6.png',
          title: $localize`:Home Page|:Typescript app development using Nx`,
          route: 'https://habr.com/ru/post/652453/',
          created: '2022-02-19',
        },
        {
          image: '/assets/images/habr/7.jpg',
          title: $localize`:Home Page|:How Angular drives front-end developers into enterprise bondage`,
          route: 'https://habr.com/ru/post/591963/',
          created: '2021-11-27',
        },
        {
          image: '/assets/images/habr/8.jpg',
          title: $localize`:Home Page|:How I wrote a test task in Angular and why some developers should not be given a test task`,
          route: 'https://habr.com/ru/post/567014/',
          created: '2021-07-10',
        },
      ],
    },
    {
      title: $localize`:Home Page|:Posts on Medium`,
      posts: [
        {
          image: '/assets/images/medium/1.webp',
          title: $localize`:Home Page|:Transferring an Angular project to standalone components.`,
          route: 'https://medium.com/p/be9003ae4c29',
          created: '2023-07-03',
        },
        {
          image: '/assets/images/medium/2.webp',
          title: $localize`:Home Page|:Creating Material font and svg icons without Angular Material.`,
          route: 'https://medium.com/p/197eaf9e26',
          created: '2023-07-02',
        },
        {
          image: '/assets/images/medium/3.webp',
          title: $localize`:Home Page|:Redux in Angular. State management using standard Angular tools.`,
          route: 'https://medium.com/p/c93691e0074c',
          created: '2022-12-06',
        },
        {
          image: '/assets/images/medium/4.webp',
          title: $localize`:Home Page|:Redux in Angular. Introduction.`,
          route: 'https://medium.com/p/591ba785e0fc',
          created: '2022-11-24',
        },
        {
          image: '/assets/images/medium/5.webp',
          title: $localize`:Home Page|:Setting up husky in an Angular project. Migration from version 4 to version 8.`,
          route: 'https://medium.com/p/c3d04ffc95c',
          created: '2022-10-23',
        },
        {
          image: '/assets/images/medium/6.webp',
          title: $localize`:Home Page|:Using SVG Icons with Angular Material`,
          route: 'https://medium.com/p/4e9ffabef3a',
          created: '2022-08-25',
        },
        {
          image: '/assets/images/medium/7.webp',
          title: $localize`:Home Page|:Typed Forms in Angular`,
          route: 'https://medium.com/p/f5bc6fb86f38',
          created: '2022-08-12',
        },
        {
          image: '/assets/images/medium/8.webp',
          title: $localize`:Home Page|:Business card website in Angular. Introduction`,
          route: 'https://medium.com/p/9bc18c25fe37',
          created: '2022-03-27',
        },
        {
          image: '/assets/images/medium/9.webp',
          title: $localize`:Home Page|:Setting up Angular Universal with Angular Localization`,
          route: 'https://medium.com/p/c4ce999b1b05',
          created: '2022-02-12',
        },
        {
          image: '/assets/images/medium/10.webp',
          title: $localize`:Home Page|:Banx. Designing Registration with Angular`,
          route: 'https://medium.com/p/e00c5d77606c',
          created: '2022-01-23',
        },
        {
          image: '/assets/images/medium/11.webp',
          title: $localize`:Home Page|:Banx. Implementing Browser Fingerprinting in Angular.`,
          route: 'https://medium.com/p/f521f906aa07',
          created: '2021-10-18',
        },
        {
          image: '/assets/images/medium/12.webp',
          title: $localize`:Home Page|:Banx. Creating a user event tracker in Angular..`,
          route: 'https://medium.com/p/b5113a591ee8',
          created: '2021-10-05',
        },
        {
          image: '/assets/images/medium/13.webp',
          title: $localize`:Home Page|:Banx. Flexible templates with routerOutlet in Angular.`,
          route: 'https://medium.com/p/14ae64432cb6',
          created: '2021-08-31',
        },
        {
          image: '/assets/images/medium/14.webp',
          title: $localize`:Home Page|:Banx. Building the NestJS API + TypeOrm + Mariadb.`,
          route: 'https://medium.com/p/ac72fc3e28c7',
          created: '2021-08-02',
        },
        {
          image: '/assets/images/medium/15.webp',
          title: $localize`:Home Page|:Test task in Angular. Introduction.`,
          route: 'https://medium.com/p/3dca4a11fe9',
          created: '2021-07-05',
        },
        {
          image: '/assets/images/medium/16.webp',
          title: $localize`:Home Page|:Banx. Creating a fake API with json-server.`,
          route: 'https://medium.com/p/49cf713dae36',
          created: '2021-04-10',
        },
        {
          image: '/assets/images/medium/17.webp',
          title: $localize`:Home Page|:Banx. Basics of layout in Angular using the example of creating error pages.`,
          route: 'https://medium.com/p/f60afaa82996',
          created: '2021-04-05',
        },
        {
          image: '/assets/images/medium/18.webp',
          title: $localize`:Home Page|:Angular docs. App Navigation: Routing in Views.`,
          route: 'https://medium.com/p/c7402c16ce26',
          created: '2021-04-04',
        },
        {
          image: '/assets/images/medium/19.webp',
          title: $localize`:Home Page|:Banx. Creating a basic layout in Angular.`,
          route: 'https://medium.com/p/6c01392bd85a',
          created: '2021-03-31',
        },
        {
          image: '/assets/images/medium/20.webp',
          title: $localize`:Home Page|:Angular docs. Style Priorities.`,
          route: 'https://medium.com/p/ee132b30f837',
          created: '2021-03-29',
        },
        {
          image: '/assets/images/medium/21.webp',
          title: $localize`:Home Page|:Banx. Creating an Nx workspace for Angular`,
          route: 'https://medium.com/p/26a12cc74e15',
          created: '2021-03-26',
        },
        {
          image: '/assets/images/medium/22.webp',
          title: $localize`:Home Page|:CSS solutions. Creating a Grid, Columns and Grids`,
          route: 'https://medium.com/p/b849d800bffa',
          created: '2020-06-06',
        },
        {
          image: '/assets/images/medium/23.webp',
          title: $localize`:Home Page|:CSS solutions. Fixed block plus adaptive block.`,
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-28',
        },
        {
          image: '/assets/images/medium/24.webp',
          title: $localize`:Home Page|:Angular component testing with Jest`,
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-06',
        },
        {
          image: '/assets/images/medium/25.webp',
          title: $localize`:Home Page|:Architecture of enterprise Angular applications using Nx monorepository`,
          route: 'https://medium.com/p/f94955d3bbe5',
          created: '2020-04-26',
        },
        {
          image: '/assets/images/medium/26.webp',
          // eslint-disable-next-line max-len
          title: $localize`:Home Page|:Structure and approaches to organizing actions, selectors, reducers and effects in Ngrx and Nx`,
          route: 'https://medium.com/p/b848bb15f8ac',
          created: '2020-02-29',
        },
        {
          image: '/assets/images/medium/27.webp',
          title: $localize`:Home Page|:Redux in Angular. Managing states in Angular with Ngrx and Nx.`,
          route: 'https://medium.com/p/cea8c64f70e9',
          created: '2020-02-25',
        },
        {
          image: '/assets/images/medium/28.webp',
          title: $localize`:Home Page|:Infinite Scroll in Angular 9 with Intersection Observer API.`,
          route: 'https://medium.com/p/5b46c5ad9996',
          created: '2020-02-21',
        },
        {
          image: '/assets/images/medium/29.webp',
          title: $localize`:Home Page|:What is it like to learn JavaScript in 2020`,
          route: 'https://medium.com/p/3512fb5c5f3e',
          created: '2020-01-09',
        },
        {
          image: '/assets/images/medium/30.webp',
          title: $localize`:Home Page|:GraphQL API integration in Angular app`,
          route: 'https://medium.com/p/7c3a76bb77ef',
          created: '2020-01-03',
        },
        {
          image: '/assets/images/medium/31.webp',
          title: $localize`:Home Page|:Create a mono repository based on angular/cli without Nx or Lerna`,
          route: 'https://medium.com/p/cfbdcb65594d',
          created: '2019-12-24',
        },
        {
          image: '/assets/images/medium/32.webp',
          title: $localize`:Home Page|:GraphQL API for Angular with NX and Nest`,
          route: 'https://medium.com/p/696850d8e91a',
          created: '2019-12-23',
        },
        {
          image: '/assets/images/medium/33.webp',
          title: $localize`:Home Page|:Development of a slider (carousel) on Angular with Rxjs`,
          route: 'https://medium.com/p/ec0eb5140ac0',
          created: '2019-12-21',
        },
        {
          image: '/assets/images/medium/34.webp',
          // eslint-disable-next-line max-len
          title: $localize`:Home Page|:How to choose the right front-end framework or why you can't trust the comparison of frameworks`,
          route: 'https://medium.com/p/e995d2765682',
          created: '2019-10-08',
        },
        {
          image: '/assets/images/medium/35.webp',
          title: $localize`:Home Page|:Test your knowledge of JavaScript syntax in the game "What will be displayed"`,
          route: 'https://medium.com/p/268624e4f3ff',
          created: '2019-10-06',
        },
        {
          image: '/assets/images/medium/36.webp',
          title: $localize`:Home Page|:BEM and the naming problem. Speeding up and standardizing naming in HTML and CSS`,
          route: 'https://medium.com/p/849041f7b064',
          created: '2019-09-24',
        },
        {
          image: '/assets/images/medium/37.webp',
          title: $localize`:Home Page|:The seven deadly sins of a coder`,
          route: 'https://medium.com/p/7061cca4d9ad',
          created: '2019-09-16',
        },
        {
          image: '/assets/images/medium/38.webp',
          title: $localize`:Home Page|:Basics of layout in Angular with Redux and Nx. Part 1. Layout Header and Navbar.`,
          route: 'https://medium.com/p/2da5e0b8e3e8',
          created: '2019-08-24',
        },
        {
          image: '/assets/images/medium/39.webp',
          title: $localize`:Home Page|:The Seven Deadly Sins of a Frontend/JavaScript Developer`,
          route: 'https://medium.com/p/82b487287c78',
          created: '2019-08-20',
        },
      ],
    },
  ];
}
