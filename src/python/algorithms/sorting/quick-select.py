def quick_select(nums, k):
    k = len(nums) - k

    def quick_select_helper(l, r):
        pivot, p = nums[r], l
        for i in range(l, r):
            if nums[i] <= pivot:
                nums[p], nums[i] = nums[i], nums[p]
                p += 1
        nums[p], nums[r] = nums[r], nums[p]

        if p > k:
            return quick_select_helper(l, p - 1)
        elif p < k:
            return quick_select_helper(p + 1, r)
        else:
            return nums[p]

    return quick_select_helper(0, len(nums) - 1)


arr = [5, 6, 9, 3, 1, 4]
res = quick_select(arr, k)
print(res)
