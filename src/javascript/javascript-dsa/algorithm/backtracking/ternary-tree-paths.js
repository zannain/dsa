// Given a ternary tree (each node of the tree has at most three children), find all root-to-leaf paths.
function ternaryTreePaths(root) {
    let res = [];
    findPath(root, [], res)
    return res;
}

function dfs(tree, path, result) {
    if (tree.children.length === 0) {
        path.push(tree.val);
        const currentPath = path.join('->')
        res.push(currentPath)
        path.pop();
        return;

    }
    for (const child of tree.children) {
        if (child) {
            path.push(tree.val);
            dfs(child, path, res);
            path.pop();
        }
    }
}