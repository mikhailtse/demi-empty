const promiseOfNull = require('./promiseOfNull');

module.exports = require('./funcReturns')(promiseOfNull);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}