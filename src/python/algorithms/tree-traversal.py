def preorder(root, result):
    if not root:
        return
    result.append(root.val)
    preorder(root.left, result)
    preorder(root.right, result)


def preorderTraversal(root):
    res = []
    preorder(root, res)
    return res


def inorder(root, result):
    if not root:
        return None
    inorder(root.left, result)
    result.append(root.val)
    inorder(root.right, result)


def inorderTraversal(root):
    res = []
    inorder(root, res)
    return res


def postOrder(root, result):
    if not root:
        return
    postOrder(root.left, result)
    postOrder(root.right, result)
    result.append(root.val)


def postorderTraversal(root):
    res = []
    postOrder(root, res)
    return res
