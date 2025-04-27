/*
Given an (unweighted) connected graph, return the length of the shortest path between two nodes A and B, in terms of the number of edges.

Assume there always exists a path between nodes A and B.

graph = [[1, 2], [0, 2, 3], [0, 1], [1]]
A = 0
B = 3
*/

function shortestPath(graph, a, b) {
    function getNeighbors(node) {
        return graph[node];
    }
    const queue = [a];
    const visited = new Set(queue);
    let level = 0;
    while (queue.length > 0) {
     for (let i = 0; i < queue.length; i++) {
          const node = queue.shift();
          if (node === b) { return level; }
          for (const neighbor of getNeighbors(node)) {
              if (visited.has(neighbor)) continue;
              queue.push(neighbor);
              visited.add(neighbor);
          }

     }
     level+=1;
    }
}
