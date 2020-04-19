const funcReturnsPromiseOfArg = function(arg) {
    const promiseCallback = (resolve) => {
        resolve(arg);
    };

    return new Promise(promiseCallback);
};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsPromiseOfArg);
}

export default funcReturnsPromiseOfArg;
