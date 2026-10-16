import { Service } from '@angular/core';

import { MemoryStorage } from './memory.storage';
import { getStorage } from './strorage.util';
import { StorageSync } from './sync.storage';

@Service()
export class LocalStorage<S extends object = object> extends StorageSync<S> {
  constructor() {
    super(getStorage('localStorage') ?? new MemoryStorage(), 'FAFNUR_STATE');
  }
}
