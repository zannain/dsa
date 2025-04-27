/*
  - Iterates through a list and compares pairing of adjacent elements
  - Stable
  - In Place
  - Runtime: `O(n^2)`
  - Memory: `O(1)`
*/
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

const bubbleSort = (input) => {
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i + 1]} in [${input}]`);
        swap(input, i, i + 1);
        swapping = true;
      }
    }
  }
  return input;
};




const test = [65, 99, 10, 100];


console.log("Unsorted", test)
const result = bubbleSort(test);

console.log("Sorted", test);

