/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
function chunk(array, size = 1) {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }
  const results = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === size || i === array.length - 1) {
      results.push(chunk);
      chunk = [];
    }
  }
  return results;
}

/**
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function clamp(value, lower, upper) {
  if (value < lower) {
    return lower;
  }
  if (value > upper) {
    return upper;
  }
  return value;
}

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
  return array.filter(Boolean);
}

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
function difference(array, values) {
  return array.filter((item) => !values.includes(item));
}

/**
 * @param {Array} array The array to iterate over.
 * @param {Function|string} iteratee The function invoked per iteration.
 * @returns {Object} Returns the composed aggregate object.
 */
function countBy(array, iteratee) {
  const result = {};

  const isFunction = typeof iteratee === "function";
  array.forEach((i) => {
    const key = isFunction ? iteratee(i) : i[iteratee];
    result[key] = (result[key] || 0) + 1;
  });
  return result;
}

/**
 * @param {Function} func
 * @return {Function}
 */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (arg) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}

/**
 * @param {Array} array The array to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
function groupBy(array, iteratee) {
  const result = Object.create(null);

  const isFunction = typeof iteratee === "function";

  array.forEach((item) => {
    const key = isFunction ? iteratee(item) : item[iteratee];

    result[key] ??= [];
    result[key].push(item);
  });
  return result;
}

/**
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
function intersectionBy(iteratee, ...arrays) {
  if (arrays.length == 0) {
    return [];
  }

  const mappedArrays = arrays.map((arr) => arr.map(iteratee));
  const intersectedValues = mappedArrays[0].filter((value) => {
    return mappedArrays.every((mappedArray) => mappedArray.includes(value));
  });

  return intersectedValues.map((value) => {
    const index = mappedArrays[0].indexOf(value);
    return arrays[0][index];
  });
}


function makeCounter(initialValue) {
  const count = initialValue == undefined ? 0 : initialValue

  return {
    get: function () {
      return count
    }
  }
}

const counter = makeCounter(2)
counter.get()