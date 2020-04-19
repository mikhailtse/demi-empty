export function isPromise(arg) {
    return typeof arg.then == 'function';
}

export function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}

export function isEmptyObject(arg) {
    return Object.keys(arg).length === 0 && arg.constructor === Object;
}
