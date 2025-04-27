class PrefixSum:

    def __init__(self, nums):
        self.prefix = []
        total = 0
        for n in nums:
            total += n
            self.prefix.append(total)

    def rangeSum(self, left, right):
        preRight = self.prefix[right]
        preLeft = self.prefix[left - 1] if left > 0 else 0
        return preRight - preLeft


arr = [2, -1, 3, -3, 4]

prefixSum = PrefixSum(arr)

print(prefixSum.prefix)

print(prefixSum.rangeSum(2, 4))


def prefix_sum(arr):
    prefix = [0] * len(arr)

    for i in range(1, len(arr)):
        prefix[i] = prefix[i - 1] + arr[i]

    return prefix
