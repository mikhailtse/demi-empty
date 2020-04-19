import funcReturns from '../funcReturns';


test('funcReturns is a function', function() {
    expect({}.toString.call(funcReturns)).toBe('[object Function]');
});

test('funcReturns returns a function', function() {
    const func = funcReturns();
    expect({}.toString.call(func)).toBe('[object Function]');
});

test('funcReturns always returns a function', function() {
    const func1 = funcReturns(undefined);
    const func2 = funcReturns(true);
    const func3 = funcReturns(1);
    const func4 = funcReturns('abc');

    expect({}.toString.call(func1)).toBe('[object Function]');
    expect({}.toString.call(func2)).toBe('[object Function]');
    expect({}.toString.call(func3)).toBe('[object Function]');
    expect({}.toString.call(func4)).toBe('[object Function]');
});

test('funcReturns returns a function that returns arg', function() {
    expect(funcReturns(undefined)()).toBe(undefined);
    expect(funcReturns(true)()).toBe(true);
    expect(funcReturns(null)()).toBe(null);
    expect(funcReturns(1)()).toBe(1);
});

test('funcReturns returns a function that returns only the first arg', function() {
    expect(funcReturns(1, 2)()).toBe(1);
});
