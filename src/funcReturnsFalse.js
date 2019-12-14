module.exports = require('./funcReturns')(false);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}