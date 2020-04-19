import funcReturnsArg from '../funcReturnsArg';
import funcReturnsArgToCompare from '../funcReturnsArg';


test('funcReturnsArg is a function', function() {
    expect({}.toString.call(funcReturnsArg)).toBe('[object Function]');
});

test('funcReturnsArg returns argument', function() {
    expect(funcReturnsArg(undefined)).toBe(undefined);
    expect(funcReturnsArg(true)).toBe(true);
    expect(funcReturnsArg(null)).toBe(null);
    expect(funcReturnsArg(1)).toBe(1);
});

test('funcReturnsArg returns only first argument', function() {
    expect(funcReturnsArg(1, 2)).toBe(1);
});

test('2 variables of funcReturnsArg point to the same function', function() {
    expect(funcReturnsArg === funcReturnsArgToCompare).toBe(true);
});
