import { makeStateKey, PLATFORM_ID, TransferState } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BuildDateService, YearMonth } from './build-date.service';

const KEY = makeStateKey<YearMonth>('buildMonth');

describe('BuildDateService', () => {
  function createService(platformId: 'browser' | 'server'): BuildDateService {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: platformId }] });
    return TestBed.inject(BuildDateService);
  }

  it('should default to the current month', () => {
    const now = new Date();
    const service = createService('browser');
    expect(service.month).toEqual({ year: now.getFullYear(), month: now.getMonth() });
  });

  it('should store the month in TransferState on the server', () => {
    const service = createService('server');
    expect(TestBed.inject(TransferState).get(KEY, null)).toEqual(service.month);
  });

  it('should read the month from TransferState in the browser', () => {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'browser' }] });
    TestBed.inject(TransferState).set(KEY, { year: 2020, month: 4 });
    expect(TestBed.inject(BuildDateService).month).toEqual({ year: 2020, month: 4 });
  });
});
