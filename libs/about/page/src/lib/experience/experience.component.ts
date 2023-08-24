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
      company: $localize`:About Experience|:LLC "Information Technologies", Novosibirsk`,
      post: $localize`:About Experience|:Layout designer`,
      start: $localize`:About Experience|:September 2011`,
      end: $localize`:About Experience|:february 2012`,
      time: $localize`:About Experience|:6 months`,
      description: [$localize`:About Experience|:Layout of sites according to the layout.`],
    },
    {
      company: $localize`:About Experience|:NPP Microprocessor Technologies LLC, Novosibirsk,`,
      post: $localize`:About Experience|:Programmer`,
      start: $localize`:About Experience|:February 2012`,
      end: $localize`:About Experience|:february 2015`,
      time: $localize`:About Experience|:3 years`,
      description: [$localize`:About Experience|:Creation and support of the company website.`],
    },
    {
      company: $localize`:About Experience|:OOO Glavweb, Novosibirsk,`,
      post: $localize`:About Experience|:Programmer`,
      start: $localize`:About Experience|:January 2015`,
      end: $localize`:About Experience|:january 2017`,
      time: $localize`:About Experience|:2 years 1 month`,
      description: [
        $localize`:About Experience|:UI/UX development for several marketing agencies.`,
        $localize`:About Experience|:Back-end development in PHP (symfony, yii, cake).`,
        $localize`:About Experience|:Training new frontend developers`,
      ],
    },
    {
      company: $localize`:About Experience|:LLC FTM PM, Novosibirsk,`,
      post: $localize`:About Experience|:CEO`,
      start: $localize`:About Experience|:October 2017`,
      end: $localize`:About Experience|:march 2019`,
      time: $localize`:About Experience|:1 year 6 months`,
      description: [
        $localize`:About Experience|:Game development on Unity3d and Unreal engine 4.`,
        $localize`:About Experience|:Creation of sites and web applications`,
      ],
    },
    {
      company: $localize`:About Experience|:SGUPS NIL ITT, Novosibirsk,`,
      post: $localize`:About Experience|:Engineer`,
      start: $localize`:About Experience|:August 2016`,
      end: $localize`:About Experience|:may 2019`,
      time: $localize`:About Experience|:2 years 10 months`,
      description: [
        $localize`:About Experience|:Development of an ontology editor using OWL and integration with OWL-based inference systems.`,
        $localize`:About Experience|:Stack: Angular, Spring (inference systems), Symfony (cloud storage, OWL generation), Postgresql.`,
      ],
    },
    {
      company: $localize`:About Experience|:Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk,`,
      post: $localize`:About Experience|:Junior Research Fellow`,
      start: $localize`:About Experience|:July 2018`,
      end: $localize`:About Experience|:december 2020`,
      time: $localize`:About Experience|:2 years 6 months`,
      description: [
        $localize`:About Experience|:Development of new numerical methods for partial differential equations for gas, magnetic gas dynamics.`,
      ],
    },
    {
      company: $localize`:About Experience|:LLC "RUSINTERFINANS", Novosibirsk,`,
      post: $localize`:About Experience|:Frontend developer`,
      start: $localize`:About Experience|:September 2018`,
      end: $localize`:About Experience|:until now`,
      time: $localize`:About Experience|:5 years`,
      description: [
        $localize`:About Experience|:Migrating old code to new stack: angular, nx, ngrx, universal, l18n.`,
        $localize`:About Experience|:Management of the front-end development team (setting tasks, rallies, code review).`,
        $localize`:About Experience|:Development of new services on a new stack.`,
      ],
    },
  ];
  /* eslint-enable max-len */
}
