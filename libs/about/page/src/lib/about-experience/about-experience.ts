import { Component } from '@angular/core';

import { Title } from '@fafnur/ui/title';
import { Unit } from '@fafnur/ui/unit';

import { AboutExperienceCard, Experience } from './about-experience-card/about-experience-card';

@Component({
  selector: 'fafnur-about-experience',
  imports: [AboutExperienceCard, Title, Unit],
  templateUrl: './about-experience.html',
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class AboutExperience {
  readonly experiences: Experience[] = [
    {
      company: $localize`:About Experience|:LLC "RUSINTERFINANS", Novosibirsk,`,
      post: $localize`:About Experience|:Frontend team lead`,
      start: { year: 2018, month: 8 },
      description: [
        $localize`:About Experience|:Migrating old code to new stack: angular, nx, ngrx, ssr, i18n.`,
        $localize`:About Experience|:Management of the front-end development team (setting tasks, rallies, code review).`,
        $localize`:About Experience|:Development of new services on a new stack.`,
        $localize`:About Experience|:Development of a Flutter mobile app: native authorization, cookies, in-app WebView (BLoC, get_it).`,
      ],
    },
    {
      company: $localize`:About Experience|:Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk,`,
      post: $localize`:About Experience|:Junior Research Fellow`,
      start: { year: 2018, month: 6 },
      end: { year: 2020, month: 11 },
      description: [
        $localize`:About Experience|:Development of new numerical methods for partial differential equations for gas, magnetic gas dynamics.`,
      ],
    },
    {
      company: $localize`:About Experience|:SGUPS NIL ITT, Novosibirsk,`,
      post: $localize`:About Experience|:Engineer`,
      start: { year: 2016, month: 7 },
      end: { year: 2019, month: 4 },
      description: [
        $localize`:About Experience|:Development of an ontology editor using OWL and integration with OWL-based inference systems.`,
        $localize`:About Experience|:Stack: Angular, Spring (inference systems), Symfony (cloud storage, OWL generation), Postgresql.`,
      ],
    },
    {
      company: $localize`:About Experience|:LLC FTM PM, Novosibirsk,`,
      post: $localize`:About Experience|:CEO`,
      start: { year: 2017, month: 9 },
      end: { year: 2019, month: 2 },
      description: [
        $localize`:About Experience|:Game development on Unity3d and Unreal engine 4.`,
        $localize`:About Experience|:Creation of sites and web applications`,
      ],
    },
    {
      company: $localize`:About Experience|:OOO Glavweb, Novosibirsk,`,
      post: $localize`:About Experience|:Programmer`,
      start: { year: 2015, month: 0 },
      end: { year: 2017, month: 0 },
      description: [
        $localize`:About Experience|:UI/UX development for several marketing agencies.`,
        $localize`:About Experience|:Back-end development in PHP (symfony, yii, cake).`,
        $localize`:About Experience|:Training new frontend developers`,
      ],
    },
    {
      company: $localize`:About Experience|:NPP Microprocessor Technologies LLC, Novosibirsk,`,
      post: $localize`:About Experience|:Programmer`,
      start: { year: 2012, month: 1 },
      end: { year: 2015, month: 1 },
      description: [$localize`:About Experience|:Creation and support of the company website.`],
    },
    {
      company: $localize`:About Experience|:LLC "Information Technologies", Novosibirsk`,
      post: $localize`:About Experience|:Layout designer`,
      start: { year: 2011, month: 8 },
      end: { year: 2012, month: 1 },
      description: [$localize`:About Experience|:Layout of sites according to the layout.`],
    },
  ];
}
