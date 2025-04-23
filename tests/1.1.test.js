const { isTruthy } = require('../1.1.js');

describe('isTruthy Function Tests', () => {
  describe('Numbers', () => {
    test('truthy numbers', () => {
      expect(isTruthy(1)).toBe(true);
      expect(isTruthy(-1)).toBe(true);
      expect(isTruthy(Infinity)).toBe(true);
    });

    test('falsy numbers', () => {
      expect(isTruthy(0)).toBe(false);
      expect(isTruthy(NaN)).toBe(false);
    });
  });

  describe('Strings', () => {
    test('non-empty strings', () => {
      expect(isTruthy('hello')).toBe(true);
      expect(isTruthy('0')).toBe(true);  // Edge case: string zero
    });

    test('empty string', () => {
      expect(isTruthy('')).toBe(false);
    });
  });

  describe('Booleans', () => {
    test('boolean values', () => {
      expect(isTruthy(true)).toBe(true);
      expect(isTruthy(false)).toBe(false);
    });
  });

  describe('Objects & Arrays', () => {
    test('reference types', () => {
      expect(isTruthy({})).toBe(true);
      expect(isTruthy([])).toBe(true);
    });
  });

  describe('Null & Undefined', () => {
    test('null and undefined', () => {
      expect(isTruthy(null)).toBe(false);
      expect(isTruthy(undefined)).toBe(false);
    });
  });

  describe('Special Cases', () => {
    test('special objects', () => {
      expect(isTruthy(new Date())).toBe(true);
      expect(isTruthy(() => {})).toBe(true);
      expect(isTruthy(Symbol())).toBe(true);
    });
  });
}); 