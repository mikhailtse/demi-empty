import funcReturnsFalse from '../funcReturnsFalse';
import funcReturnsFalseToCompare from '../funcReturnsFalse';


test('funcReturnsFalse is a function', function() {
    expect({}.toString.call(funcReturnsFalse)).toBe('[object Function]');
});

test('funcReturnsFalse always returns false', function() {
    expect(funcReturnsFalse(undefined)).toBe(false);
    expect(funcReturnsFalse(true)).toBe(false);
    expect(funcReturnsFalse()).toBe(false);
    expect(funcReturnsFalse(1, 2, 3)).toBe(false);
});

test('2 variables of funcReturnsFalse point to the same function', function() {
    expect(funcReturnsFalse === funcReturnsFalseToCompare).toBe(true);
});
