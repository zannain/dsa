class LinkedListNode:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next


class SinglyLinkedList:

    def __init__(self):
        self.head = LinkedListNode(-1)
        self.tail = self.head

    def get(self, index: int):
        current = self.head.next
        i = 0
        while current:
            if i == index:
                return current.val
            current = current.next
            i += 1
        return -1

    def insertHead(self, val: int):
        new_node = LinkedListNode(val)
        new_node.next = self.head.next
        self.head.next = new_node
        if not new_node.next:
            self.tail = new_node

    def insertTail(self, val: int):
        self.tail.next = LinkedListNode(val)
        self.tail = self.tail.next

    def remove(self, index: int):
        i = 0
        curr = self.head
        while i < index and curr:

            curr = curr.next
            i += 1
        if curr and curr.next:
            if curr.next == self.tail:
                self.tail = curr
            curr.next = curr.next.next
            return True
        return False

    def print(self):
        curr = self.head.next
        res = []
        while curr:
            res.append(curr.val)
            curr = curr.next
        return res
