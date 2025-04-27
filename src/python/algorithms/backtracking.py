# Permutation


# Time: O(n^2 * n!)
def permutationsRecursive(nums):
    if len(nums) == 0:
        return [[]]

    perms = permutationsRecursive(nums[1:])
    res = []
    for p in perms:
        # len(p) + 1 represents the number of insertable positions
        for i in range(len(p) + 1):
            copy = p.copy()
            copy.insert(i, nums[0])
            res.append(copy)
    return res


def permutationIterative(nums):
    perms = [[]]

    for n in nums:
        nextPerms = []
        for p in perms:
            for i in range(len(p) + 1):
                pCopy = p.copy()
                pCopy.insert(i, n)
                nextPerms.append(pCopy)
        perms = nextPerms
    return perms


arr = [1, 2, 3]
subsets2(arr)
# print(permutationsRecursive(arr))
# print(permutationIterative(arr))
# Deduplication
# def three_sum(nums, target):
#    nums.sort()
#    for i in range(len(nums)):
#        if i > 0 and nums[i - 1] == nums[i]:
#            continue
#        tuples = two_sum(nums[i + 1 :], target - nums[i])
#        print(tuples)


# def two_sum(nums, target):
#    hashmap = {}
#    for i in range(len(nums)):
#        compliment = target - nums[i]
#        if compliment in hashmap:
#            return [hashmap[compliment], i]
#        hashmap[nums[i]] = i
