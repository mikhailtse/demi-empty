import object from '../object';
import objectToCompare from '../object';

import { isObject, isEmptyObject } from './utils';


test('object is an object', function() {
    expect(isObject(object)).toBe(true);
});

test('object is empty', function() {
    expect(isEmptyObject(object)).toBe(true);
});

test('objects are the same instance', function() {
    expect(object === objectToCompare).toBe(true);
});
