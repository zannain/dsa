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

class Foo {
  foo = function () {
    let obj = { fizz: 'buzz' }
    console.log(obj);
  };
}
