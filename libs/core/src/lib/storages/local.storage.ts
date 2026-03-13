import { Injectable } from '@angular/core';

import { MemoryStorage } from './memory.storage';
import { getStorage } from './strorage.util';
import { StorageSync } from './sync.storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage<S extends object = object> extends StorageSync<S> {
  constructor() {
    super(getStorage('localStorage') ?? new MemoryStorage(), 'FAFNUR_STATE');
  }
}
