function promiseCallback(resolve) {
    resolve(null);
}

const promiseOfNull = new Promise(promiseCallback);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(promiseOfNull);
}

export default promiseOfNull;
