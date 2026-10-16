import { isPlatformServer } from '@angular/common';
import { inject, makeStateKey, PLATFORM_ID, Service, TransferState } from '@angular/core';

export interface YearMonth {
  readonly year: number;
  /** 0-based, as in `Date.getMonth()` */
  readonly month: number;
}

const BUILD_MONTH_KEY = makeStateKey<YearMonth>('buildMonth');

/**
 * The month the static site was built in. Prerendering captures it on the server, the browser reads it from
 * TransferState — so values computed from it are the same in the HTML and after hydration.
 */
@Service()
export class BuildDateService {
  private readonly transferState = inject(TransferState);
  private readonly platformId = inject(PLATFORM_ID);

  readonly month: YearMonth = this.resolve();

  private resolve(): YearMonth {
    const stored = this.transferState.get(BUILD_MONTH_KEY, null);
    if (stored) {
      return stored;
    }

    const now = new Date();
    const month: YearMonth = { year: now.getFullYear(), month: now.getMonth() };

    if (isPlatformServer(this.platformId)) {
      this.transferState.set(BUILD_MONTH_KEY, month);
    }

    return month;
  }
}
