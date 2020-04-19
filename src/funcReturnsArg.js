const funcReturnsArg = function(arg) {
    return arg;
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsArg);
}

export default funcReturnsArg;
