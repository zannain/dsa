# Combinatorial Search Problems

**Search Space**: all the possibilities to search
**State-space-tree**: all the possible states in the search space
**Prune**: discard branches and stop further traversals

1. What is the difference between backtracking and depth-first-search problems?

- Backtracking we are not given a tree but rather we **construct the tree / generate the edges and tree nodes as we go**.

### Template

```python
function dfs(start_index, path):
  if is_leaf(start_index):
    report(path)
    return
  for edge in get_edges(start_index):
    path.add(edge)
    dfs(start_index + 1, path)
    path.pop()
```

### Time And Space Complexity

- Time complexity is proportional to the number of nodes in the state-space-tree because we visit each one once.
  - `number of children of each node ^ height of the tree`
- Space complexity is the height of the tree

## Pruning Problems

1. When it's clear that going into that branch would not yield a valid final state. This happens when the problem comes with one or more constraints, and the branches violates those contraints.

### Template

```python
function dfs(start_index, path):
  if is_leaf(start_index):
    report(path)
    return
  for edge in get_edges(start_index):
    # prune if needed
    if not is_valid(edge):
      continue
    path.add(edge)
    # increment start_index
    dfs(start_index + len(edge), path)
    path.pop()
```

## Backtracking with Additional States

1. the constraints imposed by the problem require us to keep additional states to check the validity of a branch.

### Template

```javascript
function dfs(startIndex, path, res, [...additional states]) {
    if (isLeaf(path)) {
        res.push(new Array(path));
        return;
    }
    for (const edge of getEdges(startIndex, [...additional states])) {
        path.push(choice);
        if (...additional states) update(...additional states)
        dfs(startIndex + edge.length, path, res, [...addtional states]);
        path.pop();
        // revert(...additional states) if necessary, e.g. permutations
    }
}

```

## Backtracking - Aggregation

1. Is it possible to make up a word using other words from a dictionary?
1. Find the number of ways to decode a message
1. Find the minimum number of coins to make up an amount

### Template

```javascript
function dfs(startIndex, target) {
    if (isLeaf(startIndex)) {
        return 1
    }
    let ans = initialValue;
    for (const edge of getEdges(startIndex, [...additional states])) {
        if (additional states) {
            update([...additional states]);
        }
        ans = aggregate(ans, dfs(startIndex + edge.length(), [...additional states])
        if (additional states) {
            revert([...additional states]);
        }
    }
    return ans;
}
```

<table>
    <th>Problem Statement</th>
    <th>Initial Value</th>
    <th>Aggregate</th>
    <tr>
        <td>
            If it's possible? does it exist?
        </td>
        <td>
            boolean
        </td>
        <td>
            Logical OR
        </td>
    </tr>
    <tr>
        <td>
            Number of ways to..
        </td>
        <td>
            0
        </td>
        <td>
            addition (+)
        </td>
    </tr>
    <tr>
        <td>
            Maximum / minimum ways/values to...
        </td>
        <td>
            0, infinity
        </td>
        <td>
            max / min
        </td>
    </tr>
</table>
