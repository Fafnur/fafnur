import '@angular/localize/init';
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';

import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();

Element.prototype.scrollTo = vi.fn();
