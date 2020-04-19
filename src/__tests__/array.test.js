import array from '../array';
import arrayToCompare from '../array';


test('array is an array', function() {
    expect(Array.isArray(array)).toBe(true);
});

test('array is empty', function() {
    expect(array.length).toBe(0);
});

test('arrays are the same instance', function() {
    expect(array === arrayToCompare).toBe(true);
});
