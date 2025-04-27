/*
- Input array must be sorted
- Runtime: `O(log(n))`
- Memory: `iterative: O(1) / recursive: O(log(n))`
*/
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {  // <= because left and right could point to the same element, < would miss it
        let mid = left + Math.floor((right - left) / 2);  // use `(right - left) /2` to prevent `left + right` potential overflow
        if (arr[mid] === target) return mid;  // found target, return its index
        if (arr[mid] < target) {
            // middle less than target, discard left half by making left search boundary `mid + 1`
            left = mid + 1;
        } else {
            // middle greater than target, discard right half by making right search boundary `mid - 1`
            right = mid - 1;
        }
    }
    // if we get here we didn't hit above return so we didn't find target
    return -1;
}

let result = binarySearch([1,3,5,8,9], 9);

// console.log(result);


function findBoundary(arr) {
    let index = -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === true) { index = mid; }
        if (arr[mid] === false) {
           left += 1;
        } else {
            right -= 1;
        }
    }
    return index;
}



result = findBoundary([false, false, true, true, true])

// console.log(result);



function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            boundaryIndex = mid;
            right -= 1;
        } else if (arr[mid] < target) {
            left += 1;
        } else {
            right -= 1;
        }

    }


    return boundaryIndex;
}

// console.log(findFirstOccurrence([1,3,3,3,3,6,10,10,10,100], 3))



function squareRoot(n) {
    if (n === 0) return 0;
    let left = 1;
    let right = n;
    let res = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid == n) {
            return mid;
        } else if (mid * mid > n) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return res - 1;

}


console.log(squareRoot(10))


function peakOfMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    let alen = arr.length
    while (left <= right) {
       let mid = left + Math.floor((right-left)/2);
       if (mid === alen - 1 || arr[mid] > arr[mid +1]) {
           boundaryIndex = mid;
           right = mid - 1;
       } else {
            left = mid + 1;
       }
    }
    return boundaryIndex;
}

console.log(peakOfMountainArray([0,10,3,2,1,0]))