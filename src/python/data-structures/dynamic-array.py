class DynamicArray:

    def __init__(self, capacity: int):
        self.capacity = max(capacity, 0)
        self.size = 0
        self.darr = [0] * self.capacity


    def get(self, i: int) -> int:
        return self.darr[i]


    def set(self, i: int, n: int) -> None:
        self.darr[i] = n


    def pushback(self, n: int) -> None:
        if self.size == self.capacity:
            self.resize()
        self.darr[self.size] = n
        self.size += 1



    def popback(self) -> int:
        if self.size > 0:
            self.size -= 1
        return self.darr[self.size]


    def resize(self) -> None:
        newCapacity = 2 * self.capacity
        self.darr += [0] * (newCapacity - self.capacity)
        self.capacity = newCapacity


    def getSize(self) -> int:
        return self.size


    def getCapacity(self) -> int:
        return self.capacity
