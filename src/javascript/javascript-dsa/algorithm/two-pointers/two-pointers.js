/*
Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].
*/
function search(arr, targetSum) {
  let sortedArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];

    if (sum === targetSum) {
      let leftIndex = arr.indexOf(sortedArr[left]);
      let rightIndex = arr.lastIndexOf(sortedArr[right]);

      return [leftIndex, rightIndex];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

/*
Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The relative order of the elements should be kept the same and you should not use any extra space so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.
*/

function remove(arr) {
  let start = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[start] === arr[i]) {
      arr.splice(i, 1);
      i--;
    } else {
      start = i;
    }
  }
  return arr.length;
}
