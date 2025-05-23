/*
  Stable
  Not In Place
  Runtime: O(nlogN)
*/

const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }

    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
  };

  const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray[0]);
        leftArray.shift();
      } else {
        sortedArray.push(rightArray[0]);
        rightArray.shift();
      }
    }
    return sortedArray.concat(leftArray).concat(rightArray);
  };


const arr = [65, 99, 10, 100]

const result = mergeSort(arr);

console.log(result)
