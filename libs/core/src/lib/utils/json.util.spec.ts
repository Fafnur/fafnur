import { safeStringify } from './json.util';

describe('safeStringify', () => {
  it('should stringify a simple flat object', () => {
    expect(safeStringify({ a: 1, b: 'hello' })).toBe('{"a":1,"b":"hello"}');
  });

  it('should stringify an object with a null value', () => {
    expect(safeStringify({ a: null })).toBe('{"a":null}');
  });

  it('should stringify an object with nested objects', () => {
    expect(safeStringify({ a: { b: { c: 3 } } })).toBe('{"a":{"b":{"c":3}}}');
  });

  it('should stringify an object containing an array', () => {
    expect(safeStringify({ arr: [1, 2, 3] })).toBe('{"arr":[1,2,3]}');
  });

  it('should apply indentation when indent is provided', () => {
    const result = safeStringify({ a: 1 }, 2);
    expect(result).toBe('{\n  "a": 1\n}');
  });

  it('should replace circular references with [Circular]', () => {
    const obj: Record<string, unknown> = { a: 1 };
    obj['self'] = obj;
    const result = safeStringify(obj);
    expect(result).toContain('[Circular]');
    expect(result).not.toContain('"self":{"a":1');
  });

  it('should handle deeply nested circular references', () => {
    const child: Record<string, unknown> = { value: 42 };
    const parent: Record<string, unknown> = { child };
    child['parent'] = parent;
    const result = safeStringify(parent);
    expect(result).toContain('[Circular]');
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: { c: 2 } };
    safeStringify(obj);
    expect(obj).toEqual({ a: 1, b: { c: 2 } });
  });

  it('should handle an empty object', () => {
    expect(safeStringify({})).toBe('{}');
  });

  it('should handle boolean values', () => {
    expect(safeStringify({ flag: true, off: false })).toBe('{"flag":true,"off":false}');
  });

  it('should produce valid JSON parseable output', () => {
    const obj = { name: 'test', count: 5, nested: { value: true } };
    const result = safeStringify(obj);
    expect(() => JSON.parse(result)).not.toThrow();
    expect(JSON.parse(result)).toEqual(obj);
  });
});
