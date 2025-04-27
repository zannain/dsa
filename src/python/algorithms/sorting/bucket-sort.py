# Time Complexity: O(n)
# Unstable because we overwrite the array
def bucket_sort(arr):
    counts = [0] * len(arr)

    for n in arr:
        counts[n] += 1

    i = 0
    for n in range(len(counts)):
        for j in range(counts[n]):
            arr[i] = n
            i += 1
    return arr


result = bucket_sort([2, 1, 2, 0, 0, 2])

print(result)
