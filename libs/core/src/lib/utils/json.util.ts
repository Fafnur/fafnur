/**
 * Safe stringify
 *
 * ### Usage
 *
 * Simple usage:
 *
 * ```TypeScript
 * const result = safeStringify({ custom: 'object' });
 * ```
 *
 * @param obj Object for stringify
 * @param indent Indent
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#examples
 * @see https://stackoverflow.com/questions/11616630/how-can-i-print-a-circular-structure-in-a-json-like-format
 */
export function safeStringify(obj: object, indent = 0): string {
  let cache: unknown[] | null = [];

  const result = JSON.stringify(
    obj,
    (key, value) =>
      cache !== null && typeof value === 'object' && value !== null
        ? cache.includes(value)
          ? '[Circular]'
          : cache.push(value) && value
        : value,
    indent,
  );
  // You need to clear the cache to fix memory leaks
  cache = null;

  return result;
}
