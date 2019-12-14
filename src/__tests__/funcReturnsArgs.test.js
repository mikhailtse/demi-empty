const funcReturnsArgs = require('../funcReturnsArgs');
const funcReturnsArgsToCompare = require('../funcReturnsArgs');

test('funcReturnsArgs is a function', function() {
    expect({}.toString.call(funcReturnsArgs)).toBe('[object Function]');
});

test('funcReturnsArgs returns arguments', function() {
    expect(funcReturnsArgs(undefined)).toEqual([undefined]);
    expect(funcReturnsArgs(true, null, 1)).toEqual([true, null, 1]);
    expect(funcReturnsArgs(1, 2)).toEqual([1, 2]);
    expect(funcReturnsArgs()).toEqual([]);
});

test('2 variables of funcReturnsArgs point to the same function', function() {
    expect(funcReturnsArgs === funcReturnsArgsToCompare).toBe(true);
});