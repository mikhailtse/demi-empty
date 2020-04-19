const object = {};

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(object);
}

export default object;
