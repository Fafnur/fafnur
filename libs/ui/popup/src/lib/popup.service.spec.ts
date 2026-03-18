import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { PopupService } from './popup.service';

@Component({ template: '<p>Dialog Content</p>' })
class TestDialogComponent {}

describe('PopupService', () => {
  let service: PopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupService);
  });

  afterEach(() => {
    service.close();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('has() returns false when no popups are open', () => {
    expect(service.has()).toBe(false);
  });

  it('has() returns true after open()', () => {
    service.open(TestDialogComponent);
    expect(service.has()).toBe(true);
  });

  it('open() appends popup element to document body', () => {
    service.open(TestDialogComponent);
    expect(document.body.querySelector('fafnur-popup')).toBeTruthy();
  });

  it('open() returns an Observable', () => {
    const obs = service.open(TestDialogComponent);
    expect(typeof obs.subscribe).toBe('function');
  });

  it('close() sets has() to false', () => {
    service.open(TestDialogComponent);
    service.close();
    expect(service.has()).toBe(false);
  });

  it('close() removes popup from DOM', () => {
    service.open(TestDialogComponent);
    service.close();
    expect(document.body.querySelector('fafnur-popup')).toBeNull();
  });

  it('close() closes all open popups', () => {
    service.open(TestDialogComponent);
    service.open(TestDialogComponent);
    service.close();
    expect(document.body.querySelectorAll('fafnur-popup').length).toBe(0);
    expect(service.has()).toBe(false);
  });

  it('observable emits undefined and completes when popup is closed', async () => {
    const result$ = service.open<string>(TestDialogComponent);
    const promise = firstValueFrom(result$);
    service.close();
    const value = await promise;
    expect(value).toBeUndefined();
  });
});
