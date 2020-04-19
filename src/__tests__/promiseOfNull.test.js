import promiseOfNull from '../promiseOfNull';
import promiseOfNullToCompare from '../promiseOfNull';

import { isPromise } from './utils';


test('promiseOfNull is a promise', function() {
    expect(isPromise(promiseOfNull)).toBe(true);
});

test('promiseOfNull is a promise null', function() {
    expect.assertions(1);

    return promiseOfNull.then(function(data) {
        expect(data).toBe(null);
    });
});

test('2 variables of promiseOfNull point to the same promise', function() {
    expect(promiseOfNull === promiseOfNullToCompare).toBe(true);
});
