/*
Given an array (list) nums consisted of only non-negative integers, find the largest sum among all subarrays of length k in nums.
*/
export function subarraySumFixed(nums: number[], k: number) {
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
         windowSum += nums[windowEnd];
        if (windowEnd >= k - 1) {
             maxSum = Math.max(maxSum, windowSum);
             windowSum -= nums[windowStart];
             windowStart++;
        }
    }
    return maxSum;
}