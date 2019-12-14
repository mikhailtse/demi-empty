module.exports = function() {
    return Array.prototype.slice.call(arguments);
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}