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
      title: 'Habr',
      posts: [
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/e97/e06/460/e97e06460712376610e04f90ebe87479.jpg',
          title: 'Создание статичного блога на Angular и Contentful',
          route: 'https://habr.com/ru/articles/754928/',
          created: '2022-08-16',
        },
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/f8e/909/552/f8e90955210ecbd340428f0b2538c940.jpg',
          title: 'Как я переносил блог из CakePHP в Angular',
          route: 'https://habr.com/ru/articles/754884/',
          created: '2022-08-16',
        },
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/289/b7a/bae/289b7abaeae61d82aaf730db5977600e.jpg',
          title: 'Как работает Evercookie в 2023 году',
          route: 'https://habr.com/ru/articles/750856/',
          created: '2022-07-28',
        },
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/0c2/5ea/5c1/0c25ea5c1c4aebc7fe6fca63425cb0f7.jpg',
          title: 'Redux в Angular. Туда и обратно',
          route: 'https://habr.com/ru/articles/706092/',
          created: '2022-12-17',
        },
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/10e/6e2/8d5/10e6e28d5e22c812101e72da8b2f1c74.jpg',
          title: 'Как я делал сайт визитку на Angular',
          route: 'https://habr.com/ru/articles/658787/',
          created: '2022-04-03',
        },
        {
          image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/28f/a63/b20/28fa63b20ae71ac4ea61c25231fe5758.png',
          title: 'Разработка приложений на Typescript с использованием Nx',
          route: 'https://habr.com/ru/post/652453/',
          created: '2022-02-19',
        },
        {
          image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/2b2/284/eef/2b2284eef5b7ccbfff69f18e0b180a75.jpg',
          title: 'Как Angular загоняет фронтенд разработчиков в enterprise-кабалу',
          route: 'https://habr.com/ru/post/591963/',
          created: '2021-11-27',
        },
        {
          image: 'https://hsto.org/r/w1560/getpro/habr/upload_files/d92/125/e59/d92125e595b6cb783c3b36c6015fbbcf.jpg',
          title: 'Как я писал тестовое задание на Angular и почему некоторым разработчикам не стоит давать тестовое задание',
          route: 'https://habr.com/ru/post/567014/',
          created: '2021-07-10',
        },
      ],
    },
    {
      title: 'Medium',
      posts: [
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*GBHwGmFtSHFvBHEohYU3hg.png',
          title: 'Перевод Angular проекта на standalone компоненты.',
          route: 'https://medium.com/p/be9003ae4c29',
          created: '2023-07-03',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*dNI0PZi5k6Nor9hyzrb2hQ.jpeg',
          title: 'Создание иконок Material font и svg без Angular Material.',
          route: 'https://medium.com/p/197eaf9e26',
          created: '2023-07-02',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*kEilqREy3Elzw026BR0OdQ.jpeg',
          title: 'Redux в Angular. State management стандартными средствами Angular.',
          route: 'https://medium.com/p/c93691e0074c',
          created: '2022-12-06',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*wm_azRaA9tv7UTBhFKU6dw.jpeg',
          title: 'Redux в Angular. Введение.',
          route: 'https://medium.com/p/591ba785e0fc',
          created: '2022-11-24',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*9ycZpLoFV3ygrxvdO0Anlg.jpeg',
          title: 'Настройка husky в проекте Angular. Миграция с 4 до 8 версии.',
          route: 'https://medium.com/p/c3d04ffc95c',
          created: '2022-10-23',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*nIxTeEZX4WqslNfwFCBh1Q.jpeg',
          title: 'Использование SVG иконок с помощью Angular Material',
          route: 'https://medium.com/p/4e9ffabef3a',
          created: '2022-08-25',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*nV4cVRQZLZVUHWMke0mbtg.jpeg',
          title: 'Типизированные формы в Angular',
          route: 'https://medium.com/p/f5bc6fb86f38',
          created: '2022-08-12',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*UXqlKP7HjWouk9Q84VjQfQ.jpeg',
          title: 'Настройка Angular Universal с Angular Localization',
          route: 'https://medium.com/p/9bc18c25fe37',
          created: '2022-03-27',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*n1jyS9K3xFoEbZcgY-SA4w.jpeg',
          title: 'Настройка Angular Universal с Angular Localization',
          route: 'https://medium.com/p/c4ce999b1b05',
          created: '2022-02-12',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_O9qP7ksFLITetQFm1ZVjg.jpeg',
          title: 'Banx. Проектирование регистрации на Angular',
          route: 'https://medium.com/p/e00c5d77606c',
          created: '2022-01-23',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*365mCZMcTwUOT5AgSJjH3w.jpeg',
          title: 'Banx. Реализация отпечатков пальцев браузера в Angular.',
          route: 'https://medium.com/p/f521f906aa07',
          created: '2021-10-18',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qHesFtTNcpYuDZ26KXuK1A.jpeg',
          title: 'Banx. Создание трекера событий пользователя в Angular.',
          route: 'https://medium.com/p/b5113a591ee8',
          created: '2021-10-05',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-j3dtMkMU-6sYbA0mgtxKg.jpeg',
          title: 'Banx. Создание API NestJS + TypeOrm + Mariadb.',
          route: 'https://medium.com/p/14ae64432cb6',
          created: '2021-08-31',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EGAPN20MTn4In_a9zKhRkQ.jpeg',
          title: 'Banx. Создание API NestJS + TypeOrm + Mariadb.',
          route: 'https://medium.com/p/ac72fc3e28c7',
          created: '2021-08-02',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*59OIwK2bHMs3MV1LUdG5cQ.jpeg',
          title: 'Тестовое задание на Angular. Введение.',
          route: 'https://medium.com/p/3dca4a11fe9',
          created: '2021-07-05',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*59OIwK2bHMs3MV1LUdG5cQ.jpeg',
          title: 'Тестовое задание на Angular. Введение.',
          route: 'https://medium.com/p/3dca4a11fe9',
          created: '2021-07-05',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*jS5yVXyZ0CNEXm9Nj3A0sA.jpeg',
          title: 'Banx. Создание fake API с помощью json-server.',
          route: 'https://medium.com/p/49cf713dae36',
          created: '2021-04-10',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*-LEc5tBQpsHoB1go7tcJuw.jpeg',
          title: 'Banx. Основы верстки в Angular на примере создания страниц ошибок.',
          route: 'https://medium.com/p/f60afaa82996',
          created: '2021-04-05',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*yspyPdhStrFBxELJV_F53A.jpeg',
          title: 'Angular docs. Навигация в приложении: маршрутизация в представлениях.',
          route: 'https://medium.com/p/c7402c16ce26',
          created: '2021-04-04',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*iWuP8MbKXf5g98QKzAUm_w.jpeg',
          title: 'Banx. Создание базового лейаута в Angular.',
          route: 'https://medium.com/p/6c01392bd85a',
          created: '2021-03-31',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*weHZxHzHlZWGZADyQYxeHQ.jpeg',
          title: 'Angular docs. Приоритеты стилей.',
          route: 'https://medium.com/p/ee132b30f837',
          created: '2021-03-29',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*i7btGFmSbgj1xdFV5xO9dg.jpeg',
          title: 'Banx. Создание Nx workspace для Angular',
          route: 'https://medium.com/p/26a12cc74e15',
          created: '2021-03-26',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*G11wsLJ-jk6ts5SUwGfwLA.jpeg',
          title: 'CSS решения. Создание сетки, колонок и гридов',
          route: 'https://medium.com/p/b849d800bffa',
          created: '2020-06-06',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*leW1Qbz9fya_iZ33RArAuw.jpeg',
          title: 'CSS решения. Фиксированный блок плюс адаптивный блок.',
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-28',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*S_kBglM23LH3Q6e_KH94YQ.jpeg',
          title: 'Angular тестирование component с помощью Jest',
          route: 'https://medium.com/p/870def88bbf0',
          created: '2020-05-06',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*955z3llkhbPtWB07eXSlAg.jpeg',
          title: 'Архитектура enterprise Angular приложений с использованием монорепозитория Nx',
          route: 'https://medium.com/p/f94955d3bbe5',
          created: '2020-04-26',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*iwctB_k7xkk0PCUyFDaVQg.png',
          title: 'Структура и подходы к организации экшенов, селекторов, редьюсеров и эффектов в Ngrx и Nx',
          route: 'https://medium.com/p/b848bb15f8ac',
          created: '2020-02-29',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*jKaO3A5Q1cn6LGj68TOL8A.png',
          title: 'Redux в Angular. Управление состояниями в Angular с помощью Ngrx и Nx.',
          route: 'https://medium.com/p/cea8c64f70e9',
          created: '2020-02-25',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*8ToEhC28PrSF_kep-Z5ApQ.png',
          title: 'Бесконечный скролл в Angular 9 с помощью Intersection Observer API.',
          route: 'https://medium.com/p/5b46c5ad9996',
          created: '2020-02-21',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*XsZqvasNMdE5dUm02S_2Hw.png',
          title: 'Каково учить JavaScript в 2020',
          route: 'https://medium.com/p/3512fb5c5f3e',
          created: '2020-01-09',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*jMCRicB3hTJWXRwSsNEDMA.png',
          title: 'Интеграция GraphQL API в Angular приложение',
          route: 'https://medium.com/p/7c3a76bb77ef',
          created: '2020-01-03',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*5UHmfvuq6DENvCN5E95dZw.png',
          title: 'Создаем моно репозиторий на основе angular/cli без Nx или Lerna',
          route: 'https://medium.com/p/cfbdcb65594d',
          created: '2019-12-24',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*HHVACMYwHfy1qN7Bhxurww.png',
          title: 'GraphQL API для Angular с помощью NX и Nest',
          route: 'https://medium.com/p/696850d8e91a',
          created: '2019-12-23',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*-jGaV8QNNfpFovoo8g39cw.png',
          title: 'Разработка слайдера (карусели) на Angular c Rxjs',
          route: 'https://medium.com/p/ec0eb5140ac0',
          created: '2019-12-21',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*1Fj_D4pRtl2TA2rWiZ_zZQ.png',
          title: 'Как правильно выбрать фронтэнд framework или почему нельзя верить сравнению фреймверков',
          route: 'https://medium.com/p/e995d2765682',
          created: '2019-10-08',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*VTXEf01LC3cXa3h9arQZuw.png',
          title: 'Проверь себя на знание синтаксиса JavaScript в игре «Что выведется»',
          route: 'https://medium.com/p/268624e4f3ff',
          created: '2019-10-06',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*I_38asXg-o8ijKiDYnN7KQ.png',
          title: 'БЭМ и проблема наименования. Ускоряем и стандартизируем нейминг в HTML и CSS',
          route: 'https://medium.com/p/849041f7b064',
          created: '2019-09-24',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*LJ20Y9uiYtglelG1JJNT1g.png',
          title: 'Семь смертных грехов верстальщика',
          route: 'https://medium.com/p/7061cca4d9ad',
          created: '2019-09-16',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3808/format:webp/1*GYbk-zPbt2j8F80biLN-LA.png',
          title: 'Основы верстки в Angular c Redux и Nx. Часть 1. Верстка Header и Navbar.',
          route: 'https://medium.com/p/2da5e0b8e3e8',
          created: '2019-08-24',
        },
        {
          image: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*n7ZX5cKO7zWIJusgjaZakg.png',
          title: 'Семь смертных грехов Фронтенд/JavaScript разработчика',
          route: 'https://medium.com/p/82b487287c78',
          created: '2019-08-20',
        },
      ],
    },
  ];
}
