// /*
//   In Place
//   Not Stable
//   Runtime: O(n^2)
// */
// function selectionSort(arr) {
//     let length = arr.length;

//     for (let i = 0; i < length-1; i++) {
//       let minIndex = i;

//       for (let j = i + 1; j < length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }

//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//     return arr;
//   }

// const arr1 = [9, 3, 6, 2, 1, 11]
// const arr2 = [12, 16, 14, 1, 2, 3];

// console.log("Unsorted", arr1)
// console.log("Unsorted", arr2)

// selectionSort(arr1); // [1, 2, 3, 6, 9, 11]
// selectionSort(arr2); // [1, 2, 3, 12, 14, 16]

// console.log("Sorted", arr1)
// console.log("Sorted", arr2)