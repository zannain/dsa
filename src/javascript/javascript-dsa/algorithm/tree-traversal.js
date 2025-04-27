export default function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/*
    Node -> Left -> Right
*/
export function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

/*
    Left -> Node -> Right
*/
export function inOrderTraversal(root) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
  }
}
/*
    Left -> Right -> Node
*/
export function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
  }
}
