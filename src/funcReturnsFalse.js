import funcReturns from './funcReturns';

const funcReturnsFalse = funcReturns(false);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsFalse);
}

export default funcReturnsFalse;
