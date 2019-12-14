exports.isPromise = function isPromise(arg) {
    return typeof arg.then == 'function';
};

exports.isObject = function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
};

exports.isEmptyObject = function isEmptyObject(arg) {
    return Object.keys(arg).length === 0 && arg.constructor === Object;
};