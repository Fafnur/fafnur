import { inject, Injectable } from '@angular/core';

import { LocalStorage } from '../storages/local.storage';
import { InkLine } from './ink.interface';

export interface InkState {
  readonly story: string;
  readonly lines: InkLine[];
  readonly lineId: number;
  readonly blockId: number;
}

const STATE_KEY = 'inkState';

const initialState: InkState = {
  story: '',
  lines: [],
  lineId: 0,
  blockId: 0,
} as const;

@Injectable({
  providedIn: 'root',
})
export class InkStorage {
  private readonly localStorage = inject<LocalStorage<{ readonly [STATE_KEY]: InkState }>>(LocalStorage);

  getState(): InkState {
    const state = this.localStorage.getItem(STATE_KEY);
    if (state) {
      return state;
    }

    return this.resetState();
  }

  saveState(state: InkState): void {
    this.localStorage.setItem(STATE_KEY, state);
  }

  resetState(): InkState {
    this.localStorage.setItem(STATE_KEY, initialState);

    return initialState;
  }
}
