export default function searchTriplets(arr) {
    const triplets = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        };
        searchPair(arr, triplets, -arr[i], i + 1);
    }
    return triplets;
}

function searchPair(arr, result, targetSum, left) {
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === targetSum) {
            result.push([-targetSum, arr[left], arr[right]])
            left += 1;
            right -= 1;

            while (left < right && arr[left] === arr[left - 1]) {
                left+=1;
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right -= 1;
            }
        } else if (sum > targetSum) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}