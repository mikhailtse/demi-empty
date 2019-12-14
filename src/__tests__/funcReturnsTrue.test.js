const funcReturnsTrue = require('../funcReturnsTrue');
const funcReturnsTrueToCompare = require('../funcReturnsTrue');

test('funcReturnsTrue is a function', function() {
    expect({}.toString.call(funcReturnsTrue)).toBe('[object Function]');
});

test('funcReturnsTrue always returns true', function() {
    expect(funcReturnsTrue(undefined)).toBe(true);
    expect(funcReturnsTrue(false)).toBe(true);
    expect(funcReturnsTrue()).toBe(true);
    expect(funcReturnsTrue(1, 2, 3)).toBe(true);
});

test('2 variables of funcReturnsTrue point to the same function', function() {
    expect(funcReturnsTrue === funcReturnsTrueToCompare).toBe(true);
});