import func from '../func';
import funcToCompare from '../func';


test('func is a function', function() {
    expect({}.toString.call(func)).toBe('[object Function]');
});

test('func returns undefined', function() {
    expect(func()).toBe(undefined);
});

test('2 variables of func point to the same function', function() {
    expect(func === funcToCompare).toBe(true);
});
