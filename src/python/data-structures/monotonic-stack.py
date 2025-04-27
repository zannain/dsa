def monotonically_decreasing(arr):
    stack = []

    for i in arr:
        while stack and stack[-1] <= i:
            stack.pop()

        stack.append(i)
    return stack


def monotonically_increasing(arr):
    stack = []

    for i in arr:
        while stack and stack[-1] >= i:
            stack.pop()
        stack.append(i)
    return stack
