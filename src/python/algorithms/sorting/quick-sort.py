def quick_sort(pairs):
    quickSortHelper(pairs, 0, len(pairs) - 1)
    return pairs


def quickSortHelper(arr, s, e):
    if e - s + 1 <= 1:
        return
    pivot = arr[e]
    left = s

    for i in range(s, e):
        if arr[i] < pivot:
            arr[i], arr[left] = arr[left], arr[i]
            left += 1

    arr[e], arr[left] = arr[left], pivot

    quickSortHelper(arr, s, left - 1)
    quickSortHelper(arr, left + 1, e)


arr = [65, 99, 10, 100, 1, 200, 47, 23]
quick_sort(arr)
