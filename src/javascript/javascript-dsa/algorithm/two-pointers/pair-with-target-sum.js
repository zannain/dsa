// Pair with Target Sum
export default function search(arr, targetSum) {
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