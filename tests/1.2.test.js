const {
    validateUserInput,
    calculateDiscount,
    concatenateArrays,
    processUserData,
    formatDateTime,
    validatePhoneNumber,
    mergeObjects,
    calculateAverage,
    validatePassword,
    formatCurrency
} = require('../1.2');

describe('validateUserInput', () => {
    test('should validate all inputs present', () => {
        expect(validateUserInput('John', 25, 'john@example.com')).toBe('All inputs are valid');
    });

    test('should handle null/undefined name', () => {
        expect(validateUserInput(null, 25, 'john@example.com')).toBe('Name is required');
        expect(validateUserInput(undefined, 25, 'john@example.com')).toBe('Name is required');
    });

    test('should handle null/undefined age', () => {
        expect(validateUserInput('John', null, 'john@example.com')).toBe('Age is required');
        expect(validateUserInput('John', undefined, 'john@example.com')).toBe('Age is required');
    });

    test('should handle null/undefined email', () => {
        expect(validateUserInput('John', 25, null)).toBe('Email is required');
        expect(validateUserInput('John', 25, undefined)).toBe('Email is required');
    });
});

describe('calculateDiscount', () => {
    test('should calculate correct discount', () => {
        expect(calculateDiscount(100, 20)).toBe(80);
    });

    test('should handle null/undefined price', () => {
        expect(calculateDiscount(null, 20)).toBe('Price is required');
        expect(calculateDiscount(undefined, 20)).toBe('Price is required');
    });

    test('should handle null/undefined discount', () => {
        expect(calculateDiscount(100, null)).toBe('Discount percentage is required');
        expect(calculateDiscount(100, undefined)).toBe('Discount percentage is required');
    });
});

describe('concatenateArrays', () => {
    test('should concatenate two arrays', () => {
        expect(concatenateArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle null/undefined first array', () => {
        expect(concatenateArrays(null, [3, 4])).toBe('First array is required');
        expect(concatenateArrays(undefined, [3, 4])).toBe('First array is required');
    });

    test('should handle null/undefined second array', () => {
        expect(concatenateArrays([1, 2], null)).toBe('Second array is required');
        expect(concatenateArrays([1, 2], undefined)).toBe('Second array is required');
    });
});

describe('processUserData', () => {
    test('should process valid user data', () => {
        expect(processUserData({ name: 'John', age: 25 }))
            .toBe('Processed data for user: John, age: 25');
    });

    test('should handle null/undefined userData', () => {
        expect(processUserData(null)).toBe('User data is required');
        expect(processUserData(undefined)).toBe('User data is required');
    });

    test('should handle missing name in userData', () => {
        expect(processUserData({ age: 25 })).toBe('Name in user data is required');
        expect(processUserData({ name: null, age: 25 })).toBe('Name in user data is required');
    });

    test('should handle missing age in userData', () => {
        expect(processUserData({ name: 'John' })).toBe('Age in user data is required');
        expect(processUserData({ name: 'John', age: null })).toBe('Age in user data is required');
    });
});

describe('formatDateTime', () => {
    test('should format date and time', () => {
        expect(formatDateTime('2024-03-20', 'YYYY-MM-DD'))
            .toBe('Formatted date: 2024-03-20 with format: YYYY-MM-DD');
    });

    test('should handle null/undefined date', () => {
        expect(formatDateTime(null, 'YYYY-MM-DD')).toBe('Date is required');
        expect(formatDateTime(undefined, 'YYYY-MM-DD')).toBe('Date is required');
    });

    test('should handle null/undefined format', () => {
        expect(formatDateTime('2024-03-20', null)).toBe('Format is required');
        expect(formatDateTime('2024-03-20', undefined)).toBe('Format is required');
    });
});

describe('validatePhoneNumber', () => {
    test('should validate phone number with country code', () => {
        expect(validatePhoneNumber('+1', '5555555555')).toBe('Valid phone: +15555555555');
    });

    test('should handle null/undefined country code', () => {
        expect(validatePhoneNumber(null, '5555555555')).toBe('Country code is required');
        expect(validatePhoneNumber(undefined, '5555555555')).toBe('Country code is required');
    });

    test('should handle null/undefined phone number', () => {
        expect(validatePhoneNumber('+1', null)).toBe('Phone number is required');
        expect(validatePhoneNumber('+1', undefined)).toBe('Phone number is required');
    });
});

describe('mergeObjects', () => {
    test('should merge two objects', () => {
        expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });

    test('should handle null/undefined first object', () => {
        expect(mergeObjects(null, { b: 2 })).toBe('First object is required');
        expect(mergeObjects(undefined, { b: 2 })).toBe('First object is required');
    });

    test('should handle null/undefined second object', () => {
        expect(mergeObjects({ a: 1 }, null)).toBe('Second object is required');
        expect(mergeObjects({ a: 1 }, undefined)).toBe('Second object is required');
    });
});

describe('calculateAverage', () => {
    test('should calculate average of numbers', () => {
        expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should handle null/undefined array', () => {
        expect(calculateAverage(null)).toBe('Numbers array is required');
        expect(calculateAverage(undefined)).toBe('Numbers array is required');
    });

    test('should handle non-array input', () => {
        expect(calculateAverage('not an array')).toBe('Input must be an array');
    });

    test('should handle empty array', () => {
        expect(calculateAverage([])).toBe('Array cannot be empty');
    });

    test('should handle array with null/undefined values', () => {
        expect(calculateAverage([1, null, 3])).toBe('Array contains null or undefined values');
        expect(calculateAverage([1, undefined, 3])).toBe('Array contains null or undefined values');
    });
});

describe('validatePassword', () => {
    test('should validate password length', () => {
        expect(validatePassword('password123', 8)).toBe('Password is valid');
        expect(validatePassword('short', 8)).toBe('Password must be at least 8 characters long');
    });

    test('should handle null/undefined password', () => {
        expect(validatePassword(null, 8)).toBe('Password is required');
        expect(validatePassword(undefined, 8)).toBe('Password is required');
    });

    test('should handle null/undefined minimum length', () => {
        expect(validatePassword('password123', null)).toBe('Minimum length is required');
        expect(validatePassword('password123', undefined)).toBe('Minimum length is required');
    });
});

describe('formatCurrency', () => {
    test('should format currency correctly', () => {
        expect(formatCurrency(100, 'USD')).toBe('100 USD');
    });

    test('should handle null/undefined amount', () => {
        expect(formatCurrency(null, 'USD')).toBe('Amount is required');
        expect(formatCurrency(undefined, 'USD')).toBe('Amount is required');
    });

    test('should handle null/undefined currency', () => {
        expect(formatCurrency(100, null)).toBe('Currency is required');
        expect(formatCurrency(100, undefined)).toBe('Currency is required');
    });
}); 