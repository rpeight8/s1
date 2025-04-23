const isNullOrUndefined = require('../1.0.js');

describe('isNullOrUndefined', () => {
    test('should return true for null', () => {
        expect(isNullOrUndefined(null)).toBe(true);
    });

    test('should return true for undefined', () => {
        expect(isNullOrUndefined(undefined)).toBe(true);
    });

    test('should return false for zero', () => {
        expect(isNullOrUndefined(0)).toBe(false);
    });

    test('should return false for empty string', () => {
        expect(isNullOrUndefined('')).toBe(false);
    });

    test('should return false for false', () => {
        expect(isNullOrUndefined(false)).toBe(false);
    });

    test('should return false for NaN', () => {
        expect(isNullOrUndefined(NaN)).toBe(false);
    });

    test('should return false for object', () => {
        expect(isNullOrUndefined({})).toBe(false);
    });

    test('should return false for array', () => {
        expect(isNullOrUndefined([])).toBe(false);
    });
}); 