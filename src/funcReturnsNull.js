module.exports = require('./funcReturns')(null);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}
