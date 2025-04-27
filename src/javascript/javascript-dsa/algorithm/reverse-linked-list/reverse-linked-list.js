function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    let next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    // before we move to the next node, point previous to the current node
    previous = current;
    current = next; // move on the next node
  }
  return previous;
}


  function hasPath(root, sum) {
    if (root === null) { return false }

    if (root.val === sum && root.left === null && root.right === null) {
      return true;
    }

    return this.hasPath(root.left, sum - root.val) || this.hasPath(root.right, sum - root.val);
  }