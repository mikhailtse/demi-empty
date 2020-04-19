export { default as array } from './array';
export { default as func } from './func';
export { default as funcReturnsArg } from './funcReturnsArg';
export { default as funcReturnsArgs } from './funcReturnsArgs';
export { default as funcReturnsFalse } from './funcReturnsFalse';
export { default as funcReturnsNull } from './funcReturnsNull';
export { default as funcReturnsPromiseOfNull } from './funcReturnsPromiseOfNull';
export { default as funcReturnsThis } from './funcReturnsThis';
export { default as funcReturnsTrue } from './funcReturnsTrue';
export { default as object } from './object';
export { default as promiseOfNull } from './promiseOfNull';

const empty = {
    array,
    func,
    funcReturnsArg,
    funcReturnsArgs,
    funcReturnsFalse,
    funcReturnsNull,
    funcReturnsPromiseOfNull,
    funcReturnsThis,
    funcReturnsTrue,
    object,
    promiseOfNull,
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(empty);
}

export default empty;
