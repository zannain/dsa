from typing import Optional


class ListNode:
    def __init__(
        self,
        val: int,
        next: Optional['ListNode'] = None,
        prev: Optional['ListNode'] = None,
    ):
        self.val = val
        self.next = next
        self.prev = prev


# Implementation for Doubly Linked List
class DoublyLinkedList:
    def __init__(self):
        # Init the list with 'dummy' head and tail nodes which makes
        # edge cases for insert & remove easier.
        self.head = ListNode(-1)
        self.tail = ListNode(-1)
        self.head.next = self.tail
        self.tail.prev = self.head

    def insertFront(self, val: int):
        head, next = self.head, self.head.next
        newNode = ListNode(val)
        newNode.prev = head
        newNode.next = next
        if next:
            next.prev = newNode
        head.next = newNode

    def insertEnd(self, val: int):
        tail, prev = self.tail, self.tail.prev
        newNode = ListNode(val)
        newNode.next = tail
        newNode.prev = prev
        if prev:
            prev.next = newNode

        prev.next = newNode
        tail.prev = newNode

    # Remove first node after dummy head (assume it exists)
    def removeFront(self):
        self.head.next.next.prev = self.head
        self.head.next = self.head.next.next

    # Remove last node before dummy tail (assume it exists)
    def removeEnd(self):
        self.tail.prev.prev.next = self.tail
        self.tail.prev = self.tail.prev.prev

    def print(self):
        curr = self.head.next
        while curr != self.tail:
            print(curr.val, " -> ")
            curr = curr.next
        print()
