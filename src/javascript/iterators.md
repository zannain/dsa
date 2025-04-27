Programs store data and apply functionality to it.

1. Access each element
2. Do something to that element

```js
let numbers = [4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

Iterators automate the accessing of each element so we can focus on what to do to each element.

```js
function createNewFunction() {
  function add2(num) {
    return num + 2;
  }
  return add2;
}

const newFunction = createNewFunction();
const result = newFunction(2);
```

- Persistent Lexically Scoped Reference Data (PLSRD)
- Closed Over Variable Environment (COVE)
- backpack
- closure

```js
function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();
```

Iterators turn data into 'streams'

**What does it mean to be iterable?**

> You can loop over it

**What does `[Symbol.iterator]` do?**

> Special value that finds a location on the object and produces an iterator from it

```js
var str = "Hello";
var world = ["W", "o", "r", "l", "d"];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

it1.next(); // { value: "H", done: false }
it1.next(); // { value: "e", done: false }
it1.next(); // { value: "l", done: false }
it1.next(); // { value: "l", done: false }
it1.next(); // { value: "l", done: false }
it1.next(); // { value: undefined, done: true }

it2.next(); // { value: "W", done: false }
```

> Looping using iterator (imperative)

```js
var str = "Hello";

for (
  let it = str[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done && (v = result.value || true);

) {
  console.log(v);
}
// "H", "e", "l", "l", "o"
```

> Using `for-of` loop (declarative)

```js
var str = "Hello";
var it = str[Symbol.iterator]();

for (let v of it) {
  console.log(v);
}
// "H", "e", "l", "l", "o"

for (let v of str) {
  console.log(v);
}
// "H", "e", "l", "l", "o"

var letters = [...str];
letters;
// "H", "e", "l", "l", "o"
```

> Objects are not iterable

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let v of obj) {
  console.log(v);
}
// TypeError
```

> Since objects do not have a defaul iterator, you can now create one (imperative approach)

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};

console.log([...obj]);
// [1 , 2, 3]
```

> Declarative approach to making an object iterable: **generators**

```js
function *main() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

var it = main();

it.next() // { value: 1, done: false }
it.next() // { value: 2, done: false }
it.next() // { value: 3, done: false }
it.next() // { value: 4, done: true }

[...main()]
// [1,2,3]

var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator]() {
        for (let key of Object.keys(this)) {
            yield this[key]
        }
    }
}

[...obj]
// [1, 2, 3]
```

```js
var numbers = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 100; i++) {
      yield i;
    }
  },
};

for (let num of numbers) {
  console.log(num);
}
```

```js
/* eslint-disable no-restricted-syntax */
const numbers = {
  *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  },
};

console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({
      start: 6,
      end: 30,
      step: 4,
    }),
  ]}`,
);
```
