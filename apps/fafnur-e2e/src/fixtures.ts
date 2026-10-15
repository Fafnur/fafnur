import { test as base } from '@playwright/test';

export type { Page } from '@playwright/test';
export { expect } from '@playwright/test';

/** Analytics counters from index.html: tests must not send visits to the real Yandex Metrika and Google Analytics. */
const ANALYTICS = /mc\.yandex\.(ru|com)|yandex\.net|googletagmanager\.com|google-analytics\.com/;

export const test = base.extend<{ blockAnalytics: void }>({
  blockAnalytics: [
    async ({ context }, use) => {
      await context.route(ANALYTICS, (route) => route.abort());
      await use();
    },
    { auto: true },
  ],
});
