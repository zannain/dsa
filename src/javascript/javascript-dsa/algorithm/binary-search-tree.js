/* eslint-disable consistent-return */
import BinaryTreeNode from "./tree-traversal";

export default function find(tree, val) {
  if (tree === null) return false;
  if (tree.val === val) {
    return true;
  }

  if (tree.val < val) {
    return find(tree.right, val);
  }
  return find(tree.left, val);
}

export function insert(root, val) {
  const tree = root;
  if (tree == null) return new BinaryTreeNode(val);
  if (tree.val < val) {
    tree.right = insert(tree.right, val);
  } else if (tree.val > val) {
    tree.left = insert(tree.left, val);
  }
  return tree;
}

export function validBst(root) {
  function dfs(tree, minVal, maxVal) {
    // empty nodes are always valid
    if (!tree) return true;

    if (!(minVal < root.val && root.val < maxVal)) return false;

    return (
      dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
    );
  }
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

export function lcaOnBst(bst, p, q) {
  if (p < bst.val && q < bst.val) {
    return lcaOnBst(bst.left, p, q);
  }
  if (p > bst.val && q > bst.val) {
    return lcaOnBst(bst.right, p, q);
  }
  return bst.val;
}

export function lca(root, node1, node2) {
  if (!root) return;
  // case 2 in above figure
  if (root === node1 || root === node2) return root;

  const left = lca(root.left, node1, node2);
  const right = lca(root.right, node1, node2);
  // case 1
  if (left && right) return root;

  // at this point, left and right can't be both non-null since we checked above
  // case 4 and 5, report target node or LCA back to parent
  if (left) return left;
  if (right) return right;

  // case 3, not found return null
  return null;
}
