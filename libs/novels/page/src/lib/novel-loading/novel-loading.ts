import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafnur-novel-loading',
  template: '<ng-container i18n="Novel|Loading">Loading…</ng-container>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400 animate-pulse',
  },
})
export class NovelLoading {}
