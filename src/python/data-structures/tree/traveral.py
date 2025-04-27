from Tree import BinarySearchTree


def inorder(root, result):
    if not root:
        return
    inorder(root.left, result)
    result.append(root.val)
    inorder(root.right, result)


def preorder(root):
    if not root:
        return
    print(root.val)
    preorder(root.left)
    preorder(root.right)


def postorder(root):
    if not root:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.val)


def test_inorder():
    tree = BinarySearchTree()
    tree.insert(1)
    tree.insert(20)
    tree.insert(40)
    tree.insert(50)
    result = []
    inorder(tree, result)
    assert len(result) == 1


test_inorder()
