import { inject, Injectable } from '@angular/core';
import { v4 } from 'uuid';

import { LocalStorage } from '../storages/local.storage';

interface VisitorStorage {
  readonly visitorUuid: string;
}

@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  private readonly localStorage = inject<LocalStorage<VisitorStorage>>(LocalStorage);

  get(): string {
    let visitorUuid = this.localStorage.getItem('visitorUuid');
    if (!visitorUuid) {
      visitorUuid = v4();
      this.localStorage.setItem('visitorUuid', visitorUuid);
    }

    return visitorUuid;
  }
}
