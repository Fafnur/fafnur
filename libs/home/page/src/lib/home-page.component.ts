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
      title: 'Демо проекты из циклов статей',
      posts: [
        {
          image: '/assets/images/demo/1.jpg',
          title: 'Статичный блог на Angular и Contentful',
          route: 'https://angular-blog.fafn.ru',
          created: '2023-08-16',
        },
        {
          image: '/assets/images/demo/2.jpg',
          title: 'Пример простого новостного сайта с Redux',
          route: 'https://redux.fafn.ru',
          created: '2022-11-24',
        },
        {
          image: '/assets/images/demo/3.jpg',
          title: 'Пример сайта визитки с каталогом товаров',
          route: 'https://banshop.fafn.ru',
          created: '2021-07-05',
        },
        // {
        //   image: 'https://github.com/Fafnur/barinb/raw/master/docs/cabinet.gif',
        //   title: 'Проект представляет собой реализацию одной из частей приложения для бронирования жилья',
        //   route: 'https://github.com/Fafnur/barinb',
        //   created: '2021-07-14',
        // },
      ],
    },
    {
      title: 'Статьи на Хабре',
      posts: [
        {
          image: '/assets/images/habr/1.jpg',
          title: 'Создание статичного блога на Angular и Contentful',
          route: 'https://habr.com/ru/articles/754928/',
          created: '2022-08-16',
        },
        {
          image: '/assets/images/habr/2.jpg',
          title: 'Как я переносил блог из CakePHP в Angular',
          route: 'https://habr.com/ru/articles/754884/',
          created: '2022-08-16',
        },
        {
          image: '/assets/images/habr/3.jpg',
          title: 'Как работает Evercookie в 2023 году',
          route: 'https://habr.com/ru/articles/750856/',
          created: '2022-07-28',
        },
        {
          image: '/assets/images/habr/4.jpg',
          title: 'Redux в Angular. Туда и обратно',
          route: 'https://habr.com/ru/articles/706092/',
          created: '2022-12-17',
        },
        {
          image: '/assets/images/habr/5.jpg',
          title: 'Как я делал сайт визитку на Angular',
          route: 'https://habr.com/ru/articles/658787/',
          created: '2022-04-03',
        },
        {
          image: '/assets/images/habr/6.png',
          title: 'Разработка приложений на Typescript с использованием Nx',
          route: 'https://habr.com/ru/post/652453/',
          created: '2022-02-19',
        },
        {
          image: '/assets/images/habr/7.jpg',
          title: 'Как Angular загоняет фронтенд разработчиков в enterprise-кабалу',
          route: 'https://habr.com/ru/post/591963/',
          created: '2021-11-27',
        },
        {
          image: '/assets/images/habr/8.jpg',
          title: 'Как я писал тестовое задание на Angular и почему некоторым разработчикам не стоит давать тестовое задание',
          route: 'https://habr.com/ru/post/567014/',
          created: '2021-07-10',
        },
      ],
    },
    {
      title: 'Статьи на Медиуме',
      posts: [
        {
          image: '/assets/images/medium/1.webp',
          title: 'Перевод Angular проекта на standalone компоненты.',
          route: 'https://medium.com/p/be9003ae4c29',
          created: '2023-07-03',
        },
        {
          image: '/assets/images/medium/2.webp',
          title: 'Создание иконок Material font и svg без Angular Material.',
          route: 'https://medium.com/p/197eaf9e26',
          created: '2023-07-02',
        },
        {
          image: '/assets/images/medium/3.webp',
          title: 'Redux в Angular. State management стандартными средствами Angular.',
          route: 'https://medium.com/p/c93691e0074c',
          created: '2022-12-06',
        },
        {
          image: '/assets/images/medium/4.webp',
          title: 'Redux в Angular. Введение.',
          route: 'https://medium.com/p/591ba785e0fc',
          created: '2022-11-24',
        },
        {
          image: '/assets/images/medium/5.webp',
          title: 'Настройка husky в проекте Angular. Миграция с 4 до 8 версии.',
          route: 'https://medium.com/p/c3d04ffc95c',
          created: '2022-10-23',
        },
        {
          image: '/assets/images/medium/6.webp',
          title: 'Использование SVG иконок с помощью Angular Material',
          route: 'https://medium.com/p/4e9ffabef3a',
          created: '2022-08-25',
        },
        {
          image: '/assets/images/medium/7.webp',
          title: 'Типизированные формы в Angular',
          route: 'https://medium.com/p/f5bc6fb86f38',
          created: '2022-08-12',
        },
        {
          image: '/assets/images/medium/8.webp',
          title: 'Настройка Angular Universal с Angular Localization',
          route: 'https://medium.com/p/9bc18c25fe37',
          created: '2022-03-27',
        },
        {
          image: '/assets/images/medium/9.webp',
          title: 'Настройка Angular Universal с Angular Localization',
          route: 'https://medium.com/p/c4ce999b1b05',
          created: '2022-02-12',
        },
        {
          image: '/assets/images/medium/10.webp',
          title: 'Banx. Проектирование регистрации на Angular',
          route: 'https://medium.com/p/e00c5d77606c',
          created: '2022-01-23',
        },
        {
          image: '/assets/images/medium/11.webp',
          title: 'Banx. Реализация отпечатков пальцев браузера в Angular.',
          route: 'https://medium.com/p/f521f906aa07',
          created: '2021-10-18',
        },
        {
          image: '/assets/images/medium/12.webp',
          title: 'Banx. Создание трекера событий пользователя в Angular.',
          route: 'https://medium.com/p/b5113a591ee8',
          created: '2021-10-05',
        },
        {
          image: '/assets/images/medium/13.webp',
          title: 'Banx. Гибкие шаблоны с routerOutlet в Angular.',
          route: 'https://medium.com/p/14ae64432cb6',
          created: '2021-08-31',
        },
        {
          image: '/assets/images/medium/14.webp',
          title: 'Banx. Создание API NestJS + TypeOrm + Mariadb.',
          route: 'https://medium.com/p/ac72fc3e28c7',
          created: '2021-08-02',
        },
        {
          image: '/assets/images/medium/15.webp',
          title: 'Тестовое задание на Angular. Введение.',
          route: 'https://medium.com/p/3dca4a11fe9',
          created: '2021-07-05',
        },
        {
          image: '/assets/images/medium/16.webp',
          title: 'Banx. Создание fake API с помощью json-server.',
          route: 'https://medium.com/p/49cf713dae36',
          created: '2021-04-10',
        },
        {
          image: '/assets/images/medium/17.webp',
          title: 'Banx. Основы верстки в Angular на примере создания страниц ошибок.',
          route: 'https://medium.com/p/f60afaa82996',
          created: '2021-04-05',
        },
        {
          image: '/assets/images/medium/18.webp',
          title: 'Angular docs. Навигация в приложении: маршрутизация в представлениях.',
          route: 'https://medium.com/p/c7402c16ce26',
          created: '2021-04-04',
        },
        {
          image: '/assets/images/medium/19.webp',
          title: 'Banx. Создание базового лейаута в Angular.',
          route: 'https://medium.com/p/6c01392bd85a',
          created: '2021-03-31',
        },
        {
          image: '/assets/images/medium/20.webp',
          title: 'Angular docs. Приоритеты стилей.',
          route: 'https://medium.com/p/ee132b30f837',
          created: '2021-03-29',
        },
        {
          image: '/assets/images/medium/21.webp',
          title: 'Banx. Создание Nx workspace для Angular',
          route: 'https://medium.com/p/26a12cc74e15',
          created: '2021-03-26',
        },
        {
          image: '/assets/images/medium/22.webp',
          title: 'CSS решения. Создание сетки, колонок и гридов',
          route: 'https://medium.com/p/b849d800bffa',
          created: '2020-06-06',
        },
        {
          image: '/assets/images/medium/23.webp',
          title: 'CSS решения. Фиксированный блок плюс адаптивный блок.',
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-28',
        },
        {
          image: '/assets/images/medium/24.webp',
          title: 'Angular тестирование component с помощью Jest',
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-06',
        },
        {
          image: '/assets/images/medium/25.webp',
          title: 'Архитектура enterprise Angular приложений с использованием монорепозитория Nx',
          route: 'https://medium.com/p/f94955d3bbe5',
          created: '2020-04-26',
        },
        {
          image: '/assets/images/medium/26.webp',
          title: 'Структура и подходы к организации экшенов, селекторов, редьюсеров и эффектов в Ngrx и Nx',
          route: 'https://medium.com/p/b848bb15f8ac',
          created: '2020-02-29',
        },
        {
          image: '/assets/images/medium/27.webp',
          title: 'Redux в Angular. Управление состояниями в Angular с помощью Ngrx и Nx.',
          route: 'https://medium.com/p/cea8c64f70e9',
          created: '2020-02-25',
        },
        {
          image: '/assets/images/medium/28.webp',
          title: 'Бесконечный скролл в Angular 9 с помощью Intersection Observer API.',
          route: 'https://medium.com/p/5b46c5ad9996',
          created: '2020-02-21',
        },
        {
          image: '/assets/images/medium/29.webp',
          title: 'Каково учить JavaScript в 2020',
          route: 'https://medium.com/p/3512fb5c5f3e',
          created: '2020-01-09',
        },
        {
          image: '/assets/images/medium/30.webp',
          title: 'Интеграция GraphQL API в Angular приложение',
          route: 'https://medium.com/p/7c3a76bb77ef',
          created: '2020-01-03',
        },
        {
          image: '/assets/images/medium/31.webp',
          title: 'Создаем моно репозиторий на основе angular/cli без Nx или Lerna',
          route: 'https://medium.com/p/cfbdcb65594d',
          created: '2019-12-24',
        },
        {
          image: '/assets/images/medium/32.webp',
          title: 'GraphQL API для Angular с помощью NX и Nest',
          route: 'https://medium.com/p/696850d8e91a',
          created: '2019-12-23',
        },
        {
          image: '/assets/images/medium/33.webp',
          title: 'Разработка слайдера (карусели) на Angular c Rxjs',
          route: 'https://medium.com/p/ec0eb5140ac0',
          created: '2019-12-21',
        },
        {
          image: '/assets/images/medium/34.webp',
          title: 'Как правильно выбрать фронтэнд framework или почему нельзя верить сравнению фреймверков',
          route: 'https://medium.com/p/e995d2765682',
          created: '2019-10-08',
        },
        {
          image: '/assets/images/medium/35.webp',
          title: 'Проверь себя на знание синтаксиса JavaScript в игре «Что выведется»',
          route: 'https://medium.com/p/268624e4f3ff',
          created: '2019-10-06',
        },
        {
          image: '/assets/images/medium/36.webp',
          title: 'БЭМ и проблема наименования. Ускоряем и стандартизируем нейминг в HTML и CSS',
          route: 'https://medium.com/p/849041f7b064',
          created: '2019-09-24',
        },
        {
          image: '/assets/images/medium/37.webp',
          title: 'Семь смертных грехов верстальщика',
          route: 'https://medium.com/p/7061cca4d9ad',
          created: '2019-09-16',
        },
        {
          image: '/assets/images/medium/38.webp',
          title: 'Основы верстки в Angular c Redux и Nx. Часть 1. Верстка Header и Navbar.',
          route: 'https://medium.com/p/2da5e0b8e3e8',
          created: '2019-08-24',
        },
        {
          image: '/assets/images/medium/39.webp',
          title: 'Семь смертных грехов Фронтенд/JavaScript разработчика',
          route: 'https://medium.com/p/82b487287c78',
          created: '2019-08-20',
        },
      ],
    },
  ];
}
