/**
 * If storage is available, storage is returned
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 *
 * @usageNotes
 *
 * ### Usage
 *
 * For get a storage:
 *
 * ```TypeScript
 * const storage = getStorage('localStorage');
 * ```
 *
 * @param type Storage name like as localStorage, sessionStorage
 */
export function getStorage(type: 'localStorage' | 'sessionStorage'): Storage | null {
  let storage;

  if (typeof window === 'undefined') {
    return null;
  }

  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (error) {
    const can =
      error instanceof DOMException &&
      // everything except Firefox
      (error.code === 22 ||
        // Firefox
        error.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        error.name === 'QuotaExceededError' ||
        // Firefox
        error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      !!storage &&
      storage?.length !== 0;

    return can && storage ? storage : null;
  }
}
