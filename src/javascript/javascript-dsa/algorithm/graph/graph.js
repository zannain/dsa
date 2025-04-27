class Graph {
  constructor(V) {
    this.vertices = V;
    this.adjList = new Array(V).fill().map(() => []);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u); // For an undirected graph
  }

  DFS(start) {
    const visited = new Array(this.vertices).fill(false);
    const stack = [];

    stack.push(start);
    visited[start] = true;

    while (stack.length > 0) {
      const curr = stack.pop();
      console.log(curr);

      for (const neighbor of this.adjList[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }

  BFS(startVertex) {
    const visited = new Array(this.V).fill(false); // To keep track of visited vertices
    const queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      process.stdout.write(currentVertex + " ");

      // Explore adjacent vertices
      for (const neighbor of this.adjList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}
