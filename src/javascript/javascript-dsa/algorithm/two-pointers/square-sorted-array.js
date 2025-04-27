export default function makeSquares(arr) {
    let left = 0;
    let right = arr.length - 1;
    let highestSquareIndex = arr.length - 1;
    let squares = Array(arr.length).fill(0);

    while (left <= right) {
        const leftSquare = Math.pow(arr[left], 2)
        const rightSquare = Math.pow(arr[right], 2);

        if (leftSquare > rightSquare) {
            squares[highestSquareIndex] = leftSquare;
            left++
        } else {
            squares[highestSquareIndex] = rightSquare;
            right--
        };
        highestSquareIndex--
    }
    return squares;

}