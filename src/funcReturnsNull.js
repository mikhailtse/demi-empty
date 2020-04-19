import funcReturns from './funcReturns';

const funcReturnsNull = funcReturns(null);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsNull);
}

export default funcReturnsNull;
