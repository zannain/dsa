export function subarraySumLongest(nums: number[], target: number) {
    let windowSum = 0;
    let length = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
         windowSum += nums[windowEnd];
         while (windowSum > target) {
            windowSum -= nums[windowStart];
            windowStart++;
        }
        length = Math.max(length, windowEnd - windowStart + 1);
    }

    return length;
}