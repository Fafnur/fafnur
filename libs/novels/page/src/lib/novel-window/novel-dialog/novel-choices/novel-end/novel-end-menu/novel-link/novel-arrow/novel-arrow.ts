import { Component } from '@angular/core';

@Component({
  selector: 'fafnur-novel-arrow',
  template: '›',
  host: {
    class: 'text-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity select-none shrink-0',
  },
})
export class NovelArrow {}
