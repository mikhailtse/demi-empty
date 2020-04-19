import funcReturns from './funcReturns';

const funcReturnsTrue = funcReturns(true);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsTrue);
}

export default funcReturnsTrue;
