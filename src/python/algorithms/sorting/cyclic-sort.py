def cyclic_sort(nums):
    i = 0

    while i < len(nums):
        j = nums[i] - 1
        if nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1

    return nums


nums = [3, 1, 5, 4, 2]
cyclic_sort(nums)

print(nums)


# print(cyclic_sort([2, 6, 4, 3, 1, 5]))
# print(cyclic_sort([1, 5, 6, 4, 3, 2]))
def cyclic_sort2(nums):
    i, n = 0, len(nums)

    while i < n:
        j = nums[i]
        if nums[i] < n and nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1

    return nums
