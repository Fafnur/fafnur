import { safeStringify } from '../utils/json.util';

export class StorageSync<S extends object> {
  /**
   * Current state
   */
  private state: Partial<S>;

  /**
   * Storage for working with data
   */
  readonly storage: Storage;

  /**
   * Storage key
   */
  readonly key: string;

  /**
   * @param storage Storage
   * @param key Unique key
   * @protected
   */
  protected constructor(storage: Storage, key: string) {
    this.storage = storage;
    this.key = key;
    this.state = this.getLocalState();
  }
  /**
   * Returns storage state.
   */
  getState(): Partial<S> {
    return this.state;
  }

  /**
   * Returns the number of key/value pairs.
   */
  get length(): number {
    return Object.keys(this.state).length;
  }

  /**
   * Removes all key/value pairs, if there are any.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  clear(): void {
    this.setState({});
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   *
   * @param key Key
   */
  getItem<K extends keyof S>(key: K): S[K] | null {
    return this.state[key] ?? null;
  }

  /**
   * Returns the current values associated with the given keys.
   *
   * @param keys Array keys
   */
  getItems<K extends keyof S>(keys: K[]): Pick<{ [P in keyof S]: S[P] | null }, K> {
    return keys.reduce(
      (acc, key) => ({
        ...acc,
        [key]: this.state[key] ?? null,
      }),
      {} as Pick<{ [P in keyof S]: S[P] | null }, K>,
    );
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   *
   * @param key Key
   */
  removeItem<K extends keyof S>(key: K): void {
    const state = { ...this.state };
    delete state[key];

    this.setState(state);
  }

  /**
   * Removes the key/value pair with the given keys, if a key/value pair with the given key exists.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   *
   * @param keys Keys
   */
  removeItems<K extends keyof S>(keys: K[]): void {
    const state = { ...this.state };

    for (const key of keys) {
      delete state[key];
    }

    this.setState(state);
  }

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g.,
   * the user has disabled storage for the site, or if the quota has been exceeded.)
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   *
   * @param key Key
   * @param value Saving value
   */
  setItem<K extends keyof S>(key: K, value: S[K]): void {
    this.setState({ ...this.state, [key]: value });
  }

  /**
   * Sets the values of the pairs identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g.,
   * the user has disabled storage for the site, or if the quota has been exceeded.)
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   *
   * @param state Collection values
   */
  setItems(state: Partial<S>): void {
    this.setState({ ...this.state, ...state });
  }

  /**
   * Set current state on memory and storage
   *
   * @param state New state value
   * @private
   */
  private setState(state: Partial<S>): void {
    this.state = state;
    this.setLocalState(state);
  }

  /**
   * Save current state on storage
   * @param state New state value
   * @private
   */
  private setLocalState(state: Record<string, unknown>): void {
    try {
      this.storage.setItem(this.key, safeStringify(state));
    } catch (error) {
      if (
        error instanceof DOMException &&
        (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED' || error.code === 22)
      ) {
        this.storage.clear();
      }
      console.error(error);
    }
  }

  /**
   * Return current state from storage
   * @private
   */
  private getLocalState(): S {
    const state = this.storage.getItem(this.key);

    return state ? JSON.parse(state) : ({} as S);
  }
}
