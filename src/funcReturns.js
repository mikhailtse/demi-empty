module.exports = function(arg) {
    return function() {
        return arg;
    };
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(module.exports);
}