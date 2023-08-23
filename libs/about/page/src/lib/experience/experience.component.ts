import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ColumnComponent, RowComponent, TabletDirective, WebDirective } from '@fafnur/ui/grid';
import { TitleComponent } from '@fafnur/ui/title';
import { ReplaceSpacesPipe } from './replace-spaces.pipe';

interface Experience {
  readonly company: string;
  readonly post: string;
  readonly description: string[];
  readonly start: string;
  readonly end: string;
  readonly time: string;
}

@Component({
  selector: 'fafnur-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, ColumnComponent, RowComponent, TabletDirective, TitleComponent, WebDirective, ReplaceSpacesPipe],
})
export class ExperienceComponent {
  /* eslint-disable max-len */
  readonly experiences: Experience[] = [
    {
      company: 'ООО "Информационные Технологии"',
      post: 'Верстальщик',
      start: 'Сентябрь 2011',
      end: 'февраль 2012',
      time: '6 месяцев',
      description: ['Верстка сайтов по макету на внутренней системе компании.'],
    },
    {
      company:
        'ООО "НПП Микропроцессорные технологии", Новосибирск, <a href="https://i-mt.net" rel="nofollow" target="_blank">i-mt.net</a>',
      post: 'Программист',
      start: 'Февраль 2012',
      end: 'Февраль 2015',
      time: '3 года',
      description: ['Создание и поддержка сайта компании.'],
    },
    {
      company: 'ООО Главвеб, <a href="https://glavweb.ru" rel="nofollow" target="_blank">glavweb.ru</a>',
      post: 'Программист',
      start: 'Январь 2015',
      end: 'январь 2017',
      time: '2 года 1 месяц',
      description: [
        'Разработка front-end составляющей (верстка, интеграция) для нескольких маркетинговых агентств.',
        'Разработка back-end части на PHP (symfony, yii, cake).',
        'Обучение новых сотрудников frontend',
      ],
    },
    {
      company: 'ООО ФТМ ПМ, Новосибирск, <a href="https://ftm.pm" rel="nofollow" target="_blank">ftm.pm</a>',
      post: 'Директор',
      start: 'Октябрь 2017',
      end: 'март 2019',
      time: '1 год 6 месяцев',
      description: ['Разработка игр на Unity3d и Unreal engine 4.', 'Создание сайтов и веб-приложений'],
    },
    {
      company: 'СГУПС НИЛ ИТТ, Новосибирск, <a href="https://www.stu.ru" rel="nofollow" target="_blank">www.stu.ru</a>',
      post: 'Инженер',
      start: 'Август 2016',
      end: 'май 2019',
      time: '2 года 10 месяцев',
      description: [
        'Разработка редактора онтологий с использованием OWL и интеграцией с системами логического вывода основанными на OWL.',
        'Стек: Angular, Spring (системы логического вывода), Symfony (облачное хранилище, генерация OWL), Postgresql.',
      ],
    },
    {
      company:
        'Институт вычислительной математики и математической геофизики СО РАН, Новосибирск, <a href="https://icmmg.nsc.ru" rel="nofollow" target="_blank">icmmg.nsc.ru</a>',
      post: 'Младший научный сотрудник',
      start: 'Июль 2018',
      end: 'декабрь 2020',
      time: '2 года 6 месяцев',
      description: [
        'Разработка новых численных методов для уравнений в частных производных для газовой, магнитной газовой динамики.',
        'Создание новых вычислительных методов',
      ],
    },
    {
      company:
        'ООО МКК "РУСИНТЕРФИНАНС", Новосибирск, <a href="https://rusinterfinance.ru" rel="nofollow" target="_blank">rusinterfinance.ru</a>',
      post: 'Frontend-разработчик',
      start: 'Сентябрь 2018',
      end: 'по настоящее время',
      time: '5 лет',
      description: [
        'Миграция старого кода на новый стек: angular, nx, ngrx, universal, l18n.',
        'Управление командой фронтенд разработки (постановка задач, митинги, code review)',
        'Разработка новых сервисов на новом стеке, в частности разделение монолита на независимые приложения (приложение для коллекшина саппорта, юристов и т.д)',
      ],
    },
  ];
  /* eslint-enable max-len */
}
