from typing import Optional


class TreeNode:
    def __init__(
        self, val, left: Optional["TreeNode"] = None, right: Optional["TreeNode"] = None
    ):
        self.val = val
        self.left = left
        self.right = right


class BinarySearchTree:
    def __init__(self):
        self.root = None
    # Time Complexity: O(logN)
    def insert(self, val: int):
        if not self.root:
            return TreeNode(val)
        curr = self.root
        if val > curr.val:
            curr.right = self.insert(val)
        else:
            curr.left = self.insert(val)
        return curr
    

    def getMin(self, node):
        curr = node
        while curr and curr.left:
            curr = curr.left
        return curr

    # Time Complexity: O(logN)
    def remove(self, node):
        if self.root is None:
            return self.root

        if node.val < self.root.val:
            self.left = self.remove(node)
        elif node.val > self.root.val:
            self.right = self.remove(node)
        else:
            if not self.root.left:
                return self.root.right
            elif not self.root.right:
                return self.root.left
            else:
                minNode = self.getMin(self.root.right)
                self.root.val = minNode.val
                self.root.right = self.remove(minNode.val)
        return self.root


