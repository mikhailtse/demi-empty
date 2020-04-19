import funcReturnsThis from '../funcReturnsThis';
import funcReturnsThisToCompare from '../funcReturnsThis';


test('funcReturnsThis is a function', function() {
    expect({}.toString.call(funcReturnsThis)).toBe('[object Function]');
});

test('funcReturnsThis returns this', function() {
    const obj = { a: 1, b: 2 };

    expect(funcReturnsThis.call(obj)).toEqual(obj);
});

test('funcReturnsThis always returns this', function() {
    const obj = { a: 1, b: 2 };

    expect(funcReturnsThis.call(obj, undefined)).toEqual(obj);
    expect(funcReturnsThis.call(obj, true)).toEqual(obj);
    expect(funcReturnsThis.call(obj)).toEqual(obj);
    expect(funcReturnsThis.call(obj, 1, 2, 3)).toEqual(obj);
});

test('2 variables of funcReturnsThis point to the same function', function() {
    expect(funcReturnsThis === funcReturnsThisToCompare).toBe(true);
});
