import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { InkService } from '@fafnur/core';

import { storyContent } from './story';

@Component({
  selector: 'fafnur-novel-page',
  imports: [],
  templateUrl: './novel.page.html',
  styleUrl: './novel.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovelPage implements OnInit {
  private readonly inkService = inject(InkService);

  readonly $lines = this.inkService.$lines;
  readonly $choices = this.inkService.$choices;
  readonly $hasChoices = this.inkService.$hasChoices;

  ngOnInit() {
    this.inkService.init(storyContent);
  }

  choose(index: number) {
    this.inkService.choose(index);
  }
}
