const func = function() {};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(func);
}

export default func;
