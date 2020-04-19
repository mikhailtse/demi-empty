const array = [];

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(array);
}

export default array;
