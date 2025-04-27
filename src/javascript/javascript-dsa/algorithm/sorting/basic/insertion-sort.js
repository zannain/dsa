/*
    In-Place & Stable
    Runtime: O(N^2)
*/
function insertionSort(unsortedList) {
    for (var i = 0; i < unsortedList.length; i++) {
        let current = i;
        // gets the smallest element and inserts at current index
        while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
            const temp = unsortedList[current];
            // swaps current smaller element with the element before it
            unsortedList[current] = unsortedList[current - 1];
            unsortedList[current - 1] = temp;
            current--;
        }
    }
    return unsortedList;
}




const arr = [65, 99, 10, 100,1, 200, 47, 23]



console.log("Unsorted", arr)
const result = insertionSort(arr);
console.log("Sorted", arr);

