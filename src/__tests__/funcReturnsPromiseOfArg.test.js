import funcReturnsPromiseOfArg from '../funcReturnsPromiseOfArg';
import funcReturnsPromiseOfArgToCompare from '../funcReturnsPromiseOfArg';

import { isPromise } from './utils';


test('funcReturnsPromiseOfArg is a function', function() {
    expect({}.toString.call(funcReturnsPromiseOfArg)).toBe('[object Function]');
});

test('funcReturnsPromiseOfArg returns a promise', function() {
    const promise = funcReturnsPromiseOfArg();
    expect(isPromise(promise)).toBe(true);
});

test('funcReturnsPromiseOfArg always returns a promise', function() {
    const promise1 = funcReturnsPromiseOfArg(undefined);
    const promise2 = funcReturnsPromiseOfArg(true);
    const promise3 = funcReturnsPromiseOfArg();
    const promise4 = funcReturnsPromiseOfArg(1, 2, 3, 4);

    expect(isPromise(promise1)).toBe(true);
    expect(isPromise(promise2)).toBe(true);
    expect(isPromise(promise3)).toBe(true);
    expect(isPromise(promise4)).toBe(true);
});

test('funcReturnsPromiseOfArg always returns a promise null', function() {
    expect.assertions(1);

    return Promise.all([
        funcReturnsPromiseOfArg(undefined),
        funcReturnsPromiseOfArg(true),
        funcReturnsPromiseOfArg(),
        funcReturnsPromiseOfArg(1),
        funcReturnsPromiseOfArg('a'),
    ]).then(function(data) {
        expect(data).toEqual([undefined, true, undefined, 1, 'a']);
    });
});

test('funcReturnsPromiseOfArg returns only a promise of the first argument', function() {
    funcReturnsPromiseOfArg(1, 2).then((data) => {
        expect(data).toBe(1);
    });
});

test('2 variables of funcReturnsPromiseOfArg point to the same function', function() {
    expect(funcReturnsPromiseOfArg === funcReturnsPromiseOfArgToCompare).toBe(true);
});
