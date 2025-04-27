class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize(root) {
    let res = [];
    serialize_dfs(root, res);
    return res.join(" ");
}

function serialize_dfs(root, res) {
    if (!root) {
        res.push("x");
        return;
    }
    res.push(root.val);
    serialize_dfs(root.left, res);
    serialize_dfs(root.right, res);
}

function deserialize(s) {
    // create an iterator that returns a token each time we call `next`
    return deserialize_dfs(s.split(" ")[Symbol.iterator]());
}

function deserialize_dfs(nodes) {
    let val = nodes.next().value;
    if (val === 'x') return;
    const cur = new Node(parseInt(val, 10));
    cur.left = deserialize_dfs(nodes);
    cur.right = deserialize_dfs(nodes);
    return cur;
}



const input = '5 4 3 x x 8 x x 6 x x';
const result = deserialize(input);


console.log(result)