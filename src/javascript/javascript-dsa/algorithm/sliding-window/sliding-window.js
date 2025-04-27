// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.
function findAverages(K, arr) {
    let windowStart = 0;
    let windowSum = 0.0;
    let result = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        if (windowEnd >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}

let arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];

let result = findAverages(5, arr)

console.log(result)