def insertion_sort(arr):
    for i in range(len(arr)):
        current = i

        while current > 0 and arr[current] < arr[current - 1]:
            arr[current], arr[current - 1] = arr[current - 1], arr[current]
            current -= 1
    return arr


arr = [65, 99, 10, 100, 1, 200, 47, 23]
# print(arr)

insertion_sort(arr)

# print(arr)


def insertion_sort_practice(arr):

    return arr
