const funcReturnsNull = require('../funcReturnsNull');
const funcReturnsNullToCompare = require('../funcReturnsNull');

test('funcReturnsNull is a function', function() {
    expect({}.toString.call(funcReturnsNull)).toBe('[object Function]');
});

test('funcReturnsNull always returns null', function() {
    expect(funcReturnsNull(undefined)).toBe(null);
    expect(funcReturnsNull(true)).toBe(null);
    expect(funcReturnsNull()).toBe(null);
    expect(funcReturnsNull(1, 2, 3)).toBe(null);
});

test('2 variables of funcReturnsNull point to the same function', function() {
    expect(funcReturnsNull === funcReturnsNullToCompare).toBe(true);
});