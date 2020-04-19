const funcReturnsThis = function() {
    return this;
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsThis);
}

export default funcReturnsThis;
