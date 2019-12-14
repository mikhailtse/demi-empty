module.exports = require('./funcReturns')(true);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}
