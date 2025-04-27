class Node:
    def __init__(self, val=None):
        self.val = val
        self.next = None


class Queue:
    def __init__(self) -> None:
        self.left = self.right = None

    def enqueue(self, val):
        newNode = Node(val)
        # queue is not empty
        if self.right:
            self.right.next = newNode
            self.right = self.right.next
        # queue is empty
        else:
            self.left = self.right = newNode

    def dequeue(self):
        # queue is empty
        if not self.left:
            return None
        # Remove left node and return value
        val = self.left.val
        self.left = self.left.next
        if not self.right:
            self.right = None
        return val

    def print(self):
        cur = self.left
        while cur:
            print(cur.val, " -> ", end="")
            cur = cur.next
        print()
