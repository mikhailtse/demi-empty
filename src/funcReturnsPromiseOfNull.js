import funcReturns from './funcReturns';
import promiseOfNull from './promiseOfNull';

const funcReturnsPromiseOfNull = funcReturns(promiseOfNull);

if ('production' !== process.env.NODE_ENV) {
    Object.freeze(funcReturnsPromiseOfNull);
}

export default funcReturnsPromiseOfNull;
