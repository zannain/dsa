class MinHeap:

    def __init__(self):
        self.heap = [0] # Dummy value

    # Time Complexity: O(logN)
    def push(self, val: int) -> None:
        self.heap.append(val)
        self._bubble_up(len(self.heap) - 1)

    # Time Complexity: O(logN)
    def pop(self) -> int:
        if len(self.heap) <= 1:
            return -1
        if len(self.heap) == 2:
            return self.heap.pop()
        root = self.heap[1]
        self.heap[1] = self.heap.pop()
        self._bubble_down(1)
        return root


    def top(self) -> int:
        return self.heap[1] if len(self.heap) > 1 else -1

    # Time Complexity: O(n)
    def heapify(self, nums) -> None:
        self.heap = [0] + nums
        # len(self.heap) // 2 + 1 is the first node with children
        for i in reversed(range(1, len(self.heap) // 2 + 1)):
            self._bubble_down(i)

    def _bubble_up(self, index):
        parent = index // 2
        while index > 1 and self.heap[index] < self.heap[parent]:
            self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
            index = parent
            parent = index // 2

    def _bubble_down(self, index):
        child = 2 * index # left child

        while child < len(self.heap):
            if child + 1 < len(self.heap) and self.heap[child + 1] < self.heap[child]:
                # right child is smaller
                child += 1
            if self.heap[child] >= self.heap[index]:
                return

            self.heap[child], self.heap[index] = self.heap[index], self.heap[child]
            index = child
            child = 2 * index
            
           


