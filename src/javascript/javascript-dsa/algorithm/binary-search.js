export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export function findBoundary(arr) {
  let index = -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === true) {
      index = mid;
    }
    if (arr[mid] === false) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return index;
}

/*
Given an array of integers sorted in increasing order and a target, find the index of the first element in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.
*/
export function firstNotSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let feasibleTarget = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] >= target) {
      feasibleTarget = mid;
      right -= 1;
    } else {
      left += 1;
    }
  }
  return feasibleTarget;
}
/*
Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).
*/
export function squareRoot(n) {
  if (n === 0) return 0;
  let left = 1;
  let right = n;
  let res = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === n) {
      return mid;
    }
    if (mid * mid > n) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res - 1;
}

/*
A sorted array of unique integers was rotated at an unknown pivot. Find the index of the minimum element in this array.
*/
export function findMinRotated(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // if <= last element, then belongs to lower half
    if (arr[mid] <= arr[arr.length - 1]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

// [30, 40, 50, 10, 20]
