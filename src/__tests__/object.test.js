const object = require('../object');
const objectToCompare = require('../object');

const isObject = require('./utils').isObject;
const isEmptyObject = require('./utils').isEmptyObject;

test('object is an object', function() {
    expect(isObject(object)).toBe(true);
});

test('object is empty', function() {
    expect(isEmptyObject(object)).toBe(true);
});

test('objects are the same instance', function() {
    expect(object === objectToCompare).toBe(true);
});