class Pair:
    def __init__(self, key: int, value: str):
        self.key = key
        self.value = value


def merge_sort(pairs):
    n = len(pairs)
    if n <= 1:
        return pairs

    mid = n // 2
    leftPairs = pairs[0:mid]
    rightPairs = pairs[mid:]

    return merge(merge_sort(leftPairs), merge_sort(rightPairs))


def merge(left, right):
    sortedPairs = []

    while len(left) > 0 and len(right) > 0:
        if left[0].key <= right[0].key:
            sortedPairs.append(left[0])
            left.pop(0)
        else:
            sortedPairs.append(right[0])
            right.pop(0)
    return sortedPairs + left + right


arr = [Pair(9, 65), Pair(10, 99), Pair(2, 10), Pair(2, 100)]

print("before sorting")
for i in range(len(arr)):
    print(arr[i].value)

result = merge_sort(arr)

print("after sorting")
for i in range(len(result)):
    print(result[i].value)


def merge_sort(arr):

    return arr


arr = [65, 99, 10, 100, 1, 200, 47, 23]
print(merge_sort(arr))
