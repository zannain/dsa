function validPath(n, edges, start, end) {
    const graph = Array.from({ length: n }, () => []);
    const visited = Array(n).fill(false);
    function dfs(graph, node, end) {
        if (node === end) return true; // Found the path
        visited[node] = true;

        // Traverse neighbors
        for (const neighbor of graph[node]) {
            if (!visited[neighbor] && dfs(graph, neighbor, end)) {
                return true;
            }
        }
        return false; // Path not found
    }
    // Initialize the graph
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    // Populate the graph from edges
    for (const edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]); // Because it's an undirected graph
    }

    return dfs(graph, start, end);
}

