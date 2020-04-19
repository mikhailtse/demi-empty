import funcReturnsPromiseOfNull from '../funcReturnsPromiseOfNull';
import funcReturnsPromiseOfNullToCompare from '../funcReturnsPromiseOfNull';

import { isPromise } from './utils';


test('funcReturnsPromiseOfNull is a function', function() {
    expect({}.toString.call(funcReturnsPromiseOfNull)).toBe('[object Function]');
});

test('funcReturnsPromiseOfNull returns a promise', function() {
    const promise = funcReturnsPromiseOfNull();
    expect(isPromise(promise)).toBe(true);
});

test('funcReturnsPromiseOfNull always returns a promise', function() {
    const promise1 = funcReturnsPromiseOfNull(undefined);
    const promise2 = funcReturnsPromiseOfNull(true);
    const promise3 = funcReturnsPromiseOfNull();
    const promise4 = funcReturnsPromiseOfNull(1, 2, 3, 4);

    expect(isPromise(promise1)).toBe(true);
    expect(isPromise(promise2)).toBe(true);
    expect(isPromise(promise3)).toBe(true);
    expect(isPromise(promise4)).toBe(true);
});

test('funcReturnsPromiseOfNull always returns a promise null', function() {
    expect.assertions(1);

    return Promise.all([
        funcReturnsPromiseOfNull(undefined),
        funcReturnsPromiseOfNull(true),
        funcReturnsPromiseOfNull(),
        funcReturnsPromiseOfNull(1, 2, 3, 4)
    ]).then(function(data) {
        expect(data).toEqual([null, null, null, null]);
    });
});

test('2 variables of funcReturnsPromiseOfNull point to the same function', function() {
    expect(funcReturnsPromiseOfNull === funcReturnsPromiseOfNullToCompare).toBe(true);
});

test('2 variables of funcReturnsPromiseOfNull returns the same promise', function() {
    expect(funcReturnsPromiseOfNull() === funcReturnsPromiseOfNullToCompare()).toBe(true);
});
