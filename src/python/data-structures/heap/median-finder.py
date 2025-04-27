from heapq import heappush, heappop


class MedianFinder:
    def __init__(self):
        self.small = []  # max heap
        self.large = []  # min heap

    def addNum(self, num: int) -> None:
        # add it to an arbitrary side
        heappush(self.small, -num)
        # balance both sides if they aren't
        if self.small and self.large and -self.small[0] > self.large[0]:
            heappush(self.large, -heappop(self.small))

        if len(self.small) > len(self.large) + 1:
            heappush(self.large, -heappop(self.small))
        if len(self.large) > len(self.small):
            heappush(self.small, -heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        elif len(self.large) > len(self.small):
            return self.large[0]
        return (-self.small[0] * self.large[0]) / 2.0
