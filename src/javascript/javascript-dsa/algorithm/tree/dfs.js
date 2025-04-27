class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfs(root, target) {
    if (!root) return null;
    if (root.val === target) return root;

    const left = dfs(root.left, target);
    if (left != null) return left;

    const right = dfs(root.right, target);
    return right;

}

