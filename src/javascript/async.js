function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}


async function greeting() {
  console.log("hello");
  await sleep(2000);
  console.log("world");
}

function setCancellableInterval(callback, delay, ...args) {
  let timerId = setInterval(callback, delay, ...args);
  return function () {
    clearInterval(timerId);
  };
}

// let timer = setCancellableInterval(console.log, 1000, 'hello', 'world')

// setTimeout(timer, 5000)

function setCancellableTimeout(callback, delay, ...args) {
  let timerId = setTimeout(callback, delay, ...args);

  return function () {
    clearTimeout(timerId);
  };
}

function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}

// try {
//     promiseReject('Hello')
// } catch (error) {
//     console.log(error)
// }
function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}

// const p0 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 100);
// });
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Err!");
//   }, 400);
// });

// let result = await promiseRace([p0, p1]); // 42
// console.log(result)


function debounceI(func, wait = 0) {

    const timeoutId = null;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        timeoutId = null;

        func.apply(this, args)
      }, wait)
    }
  }


  function debounceII(func, wait) {
    let timeoutId = null;
    let argsToInvoke = null;
    function clearTimer() {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    function invoke() {
      if (timeoutId == null) {
        return;
      }
      clearTimer()
      func.call(this, argsToInvoke)
    }

    function fn(...args) {
      clearTimer()
      argsToInvoke = args
      timeoutId = setTimeout(() => func.call(this, ...args), wait)
    }
    fn.cancel = clearTimer
    fn.flush = invoke
    return fn
  }
