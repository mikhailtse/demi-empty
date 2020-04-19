# demi-empty

[![build](https://github.com/MikhailTSE/demi-empty/workflows/test/badge.svg)](https://github.com/MikhailTSE/demi-empty)

This utility provides different types of empty objects, especially functions with expected result that are repeatedly duplicated in many projects.

The idea is taken from a small utility [empty](https://github.com/iclanzan/empty).

## Installation

```
npm install demi-empty
```

## Usage

```javascript
import empty from 'demi-empty';
```

## Docs

### array

An empty array.

```javascript
empty.array;
// []
```

### func

An empty function that returns nothing (`undefined`).

```javascript
empty.func();
// undefined
```

### funcReturnsArg

A function that returns the first argument.

```javascript
empty.funcReturnsArg(2);
// 2
empty.funcReturnsArg(1, 2, 3);
// 1
```

### funcReturnsArgs

A function that returns arguments as an array.

```javascript
empty.funcReturnsArgs();
// []
empty.funcReturnsArgs('a');
// ["a"]
empty.funcReturnsArgs(1, true, 'a');
// [1, true, "a"]
```

### funcReturnsFalse

A function that returns `false`.

```javascript
empty.funcReturnsFalse();
// false
empty.funcReturnsFalse('a');
// false
empty.funcReturnsFalse(true);
// false
```

### funcReturnsNull

A function that returns `null`.

```javascript
empty.funcReturnsNull();
// null
empty.funcReturnsNull('a');
// null
empty.funcReturnsNull(true);
// null
```

### funcReturnsPromiseOfNull

A function that returns a promise of `null`.

```javascript
empty.funcReturnsPromiseOfNull().then(data => console.log(data));
// null
empty.funcReturnsPromiseOfNull('a').then(data => console.log(data));
// null
empty.funcReturnsPromiseOfNull(true).then(data => console.log(data));
// null
```

### funcReturnsThis

A function that returns `this`.

```javascript
const obj = { a: 1, b: 2 };
empty.funcReturnsThis.call(obj);
// {a: 1, b: 2}
```

### funcReturnsTrue

A function that returns `true`.

```javascript
empty.funcReturnsTrue();
// true
empty.funcReturnsTrue('a');
// true
empty.funcReturnsTrue(false);
// true
```

### object

An empty object.

```javascript
empty.object;
// {}
```

### promiseOfNull

A promise of `null`.

```javascript
empty.promiseOfNull.then(data => console.log(data));
// null
```