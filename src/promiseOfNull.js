function promiseCallback(resolve) {
    resolve(null);
}

module.exports = new Promise(promiseCallback);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}