/**
 * Memory storage for support SSR.
 */
export class MemoryStorage implements Storage {
  /**
   * Storage
   */
  readonly storage: Storage = this;

  /**
   * Storage state
   * @private
   */
  private data: Record<string, unknown> = {};

  /**
   * @inheritDoc
   */
  get length(): number {
    return Object.keys(this.data).length;
  }

  /**
   * @inheritDoc
   */
  clear(): void {
    this.data = {};
  }

  /**
   * @inheritDoc
   */
  getItem<T = unknown>(key: string): T | null {
    return key in this.data ? (this.data[key] as T) : null;
  }

  /**
   * @inheritDoc
   */
  key(index: number): string | null {
    const keys = Object.keys(this.data);

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  /**
   * @inheritDoc
   */
  removeItem(key: string): void {
    delete this.data[key];
  }

  /**
   * @inheritDoc
   */
  setItem<T = unknown>(key: string, value: T): void {
    this.data[key] = value;
  }
}
