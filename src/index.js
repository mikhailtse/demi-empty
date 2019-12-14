exports.array = require('./array');
exports.func = require('./func');
exports.funcReturnsArg = require('./funcReturnsArg');
exports.funcReturnsArgs = require('./funcReturnsArgs');
exports.funcReturnsFalse = require('./funcReturnsFalse');
exports.funcReturnsNull = require('./funcReturnsNull');
exports.funcReturnsPromiseOfNull = require('./funcReturnsPromiseOfNull');
exports.funcReturnsThis = require('./funcReturnsThis');
exports.funcReturnsTrue = require('./funcReturnsTrue');
exports.object = require('./object');
exports.promiseOfNull = require('./promiseOfNull');

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(exports);
}