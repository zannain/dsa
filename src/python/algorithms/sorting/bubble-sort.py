"""
  - Iterates through a list and compares pairing of adjacent elements
  - Stable
  - In Place
  - Runtime: `O(n^2)`
  - Memory: `O(1)`
"""


def swap(arr, index_one, index_two):
    temp = arr[index_two]
    arr[index_two] = arr[index_one]
    arr[index_one] = temp


def bubble_sort(input_list):
    swapping = True

    while swapping:
        swapping = False
        for i in range(len(input_list) - 1):
            if input_list[i] > input_list[i + 1]:
                print(
                    f"Swapping pair {input_list[i]}, {input_list[i + 1]} in {input_list}"
                )
                swap(input_list, i, i + 1)
                swapping = True
    return input_list


def bubble_sort_practice(arr):
    swapping = True

    while swapping:
        swapping = False
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapping = True
    return arr
