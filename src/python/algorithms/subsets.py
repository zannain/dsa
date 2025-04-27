"""
Given an integer array nums of unique elements, return all possible
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Time Complexity: O(N * 2^N)
Space Complexity: O(N)
"""


def subsets_dfs_v1(nums):
    res = []
    subset = []

    def dfs(i):
        if i >= len(nums):
            res.append(subset.copy())
            return
        # decision to include nums[i]
        subset.append(nums[i])
        dfs(i + 1)
        # decision NOT to include nums[i]
        subset.pop()
        dfs(i + 1)

    dfs(0)
    return res


def subsets_dfs_v2(nums):
    res = []

    def dfs(i, path):
        res.append(path[:])
        for n in range(i, len(nums)):
            path.append(nums[n])
            dfs(n + 1, path)
            path.pop()

    dfs(0, [])
    return res


def subsets_bfs(nums):
    subsets = []
    subsets.append([])

    for num in nums:
        n = len(subsets)
        for i in range(n):
            set1 = list(subsets[i])
            set1.append(num)
            subsets.append(set1)

    return subsets


# Time Complexity: O(N * 2^N)
# Space Complexity: O(N)
def subsets_ii_dfs(nums):
    def backtrack(i, path):
        if i >= len(nums):
            res.append(path.copy())
            return
        path.append(nums[i])
        backtrack(i + 1, path)
        path.pop()

        while i + 1 < len(nums) and nums[i] == nums[i + 1]:
            i += 1
        backtrack(i + 1, path)

    nums.sort()
    res = []
    backtrack(0, [])
    return res
