

/*
Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The relative order of the elements should be kept the same and you should not use any extra space so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.
*/
export default function remove(arr) {
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
      if (arr[fast] === arr[slow]) {
          arr.splice(fast, 1);
          fast--;
      } else {
          slow = fast;
      }
  }
  return arr.length;
}
