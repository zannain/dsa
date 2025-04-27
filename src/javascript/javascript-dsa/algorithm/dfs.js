import BinaryTreeNode from "./tree-traversal";

export default function dfs(root, target) {
  if (!root) return null;

  if (root.val === target) return root;

  const left = dfs(root.left, target);
  if (left !== null) return left;

  const right = dfs(root.right, target);
  return right;
}

/*
    Max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth. Here, we define the length of the path to be the number of edges on that path, not the number of nodes.
*/
export function treeMaxDepth(root) {
  function dfsDepth(tree) {
    if (tree === null) return 0;

    return Math.max(dfs(root.left), dfs(root.right)) + 1;
  }

  return root !== null ? dfsDepth(root) - 1 : 0;
}

/*
    In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, there isn't any node with a value higher than this node's value.

    The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.
*/
export function visibleTreeNode(root) {
  function dfsVisibleTree(tree, maxSoFar) {
    if (root === null) {
      return 0;
    }
    let total = 0;
    if (root.val >= maxSoFar) {
      total += 1;
    }
    total += dfsVisibleTree(root.left, Math.max(maxSoFar, root.val));
    total += dfsVisibleTree(root.right, Math.max(maxSoFar, root.val));
    return total;
  }

  return dfsVisibleTree(root, Number.NEGATIVE_INFINITY);
}

/*
    A binary tree is considered balanced if, for every node in the tree, the difference in the height (or depth) of its left and right subtrees is at most 1.

    In other words, the depth of the two subtrees for every node in the tree differ by no more than one.

    The height (or depth) of a tree is defined as the number of edges on the longest path from the root node to any leaf node.

    Note: An empty tree is considered balanced by definition.

    In that case, given a binary tree, determine if it's balanced.
*/
export function isBalanced(root) {
  function treeHeight(tree) {
    if (tree == null) return 0;
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return treeHeight(root) !== -1;
}

export function deserializeDFS(nodes) {
  const val = nodes.next().value;
  if (val === "x") return;
  const cur = new BinaryTreeNode(parseInt(val, 10));
  cur.left = deserializeDFS(nodes);
  cur.right = deserializeDFS(nodes);
  // eslint-disable-next-line consistent-return
  return cur;
}

export function serializeDFS(root, res) {
  if (!root) {
    res.push("x");
    return res;
  }
  res.push(root.val);
  serializeDFS(root.left, res);
  serializeDFS(root.right, res);
  return res;
}

export function invertBinaryTree(tree) {
  if (tree === null) {
    return null;
  }
  return new BinaryTreeNode(
    tree.val,
    invertBinaryTree(tree.right),
    invertBinaryTree(tree.left),
  );
}
