from typing import Optional


class TreeNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.left: Optional["TreeNode"] = None
        self.right: Optional["TreeNode"] = None


class TreeMap:

    def __init__(self):
        self.root = None

    def insertIteratively(self, key: int, val: int) -> None:
        new_node = TreeNode(key, val)
        if self.root == None:
            self.root = new_node
            return

        current = self.root
        while True:
            if key < current.key:
                if current.left == None:
                    current.left = new_node
                    return
                current = current.left
            elif key > current.key:
                if current.right == None:
                    current.right = new_node
                    return
                current = current.right
            else:
                current.val = val
                return
    def insertRecursively(self, key:int, val:int):
        new_node = TreeNode(key, val)
        if not self.root:
            new_node = TreeNode(key, val)
            self.root = new_node
            return
        current = self.root
        if current.key < key:
            current.right = self.insertRecursively(key, val)
        elif current.key > key:
            current.left = self.insertRecursively(key, val)
        return

    def search(self, key: int) -> int:
        current = self.root
        while current:
            if key < current.key:
                current = current.left
            elif key > current.key:
                current = current.right
            else:
                return current.val
        return -1

    def getMin(self) -> int:
        curr = self.root
        while curr and curr.left:
            curr = curr.left
        return curr.val if curr else -1

    def getMax(self) -> int:
        curr = self.root
        while curr and curr.right:
            curr = curr.right
        return curr.val if curr else -1

    def remove(self, key: int) -> None:
        self.root = self.removeHelper(self.root, key)

    def removeHelper(self, curr, key):
        if curr is None:
            return None

        if key > curr.key:
            curr.right = self.removeHelper(curr.right, key)
        elif key < curr.key:
            curr.left = self.removeHelper(curr.left, key)
        else:
            if curr.left is None:
                return curr.right
            elif curr.right is None:
                return curr.left
            else:
                min_node = self.findMin(curr.right)
                curr.key = min_node.key
                curr.val = min_node.val
                curr.right = self.removeHelper(curr.right, min_node.key)
        return curr

    def findMin(self, node):
        while node and node.left:
            node = node.left
        return node

    def getInorderKeys(self):
        result = []
        self.inorderTraversal(self.root, result)
        return result

    def inorderTraversal(self, root, result):
        if root:
            self.inorderTraversal(root.left, result)
            result.append(root.key)
            self.inorderTraversal(root.right, result)
