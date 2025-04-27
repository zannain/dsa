/* eslint-disable no-restricted-syntax */
import getNeighbors from "./matrix";

/*
  Time Complexity: O(V + E)
    V: number of vertices
    E: number of edges which can range from O(1) to O(V^2)

  When to use BFS:
    1. uses less memory than BFS for wide graphs (that is, graphs with large breadth factors), since BFS has to keep all the nodes in the queue, and for wide graphs this can be quite large.
    2. finding nodes far away from the root
*/
export default function dfs(root, visited) {
  for (const neighbor of getNeighbors(root)) {
    if (visited.has(neighbor)) continue;
    visited.add(neighbor);
    dfs(neighbor, visited);
  }
}
