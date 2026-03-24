import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';

import { InkService } from '@fafnur/core';
import { IconImage } from '@fafnur/ui/icons';

@Component({
  selector: 'fafnur-novel-image',
  imports: [IconImage],
  template: `
    @if ($error()) {
      <fafnur-icon-image width="62" height="62" />
      {{ $currentView() }}
    } @else {
      <img class="w-full h-full object-cover object-center" [src]="$src()" (error)="onError()" alt="" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600',
  },
})
export class NovelImage {
  private readonly inkService = inject(InkService);

  readonly $error = signal(false);
  readonly $currentView = this.inkService.$currentView;
  readonly $src = computed(() => `/novel/${this.$currentView()}.jpg`);

  constructor() {
    effect(() => {
      this.$currentView();
      this.$error.set(false);
    });
  }

  onError(): void {
    this.$error.set(true);
  }
}
