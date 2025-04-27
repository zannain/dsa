export function subarraySumShortest(nums: number[], target: number) {
    let windowStart = 0;
    let windowSum = 0;
    let length = nums.length;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
         windowSum = windowSum + nums[windowEnd];

        while (windowSum >= target) {
            length = Math.min(length, windowEnd - windowStart + 1);
            windowSum = windowSum - nums[windowStart];
            windowStart++;
        }

    }
    return length;
}