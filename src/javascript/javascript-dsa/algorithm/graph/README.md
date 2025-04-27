# Graphs

## Terminology

### Digraphs (i.e _directed graph_):

Each edge connects two vertices (nodes), but the direction of the edge indicates a one-way relationship between the nodes.

### Loop in a graph

- In an undirected graph, a loop is simply an edge that connects a vertex to itself.
- In a directed graph, a loop is an arc (directed edge) that starts and ends at the same vertex

### Node in a graph

- A fundamental building block of a graph. A graph is a mathematical representation of a set of vertices (nodes) and the connections (edges) between those objects.

### Adjacent Nodes

- Two nodes are said to be adjacent if an edge is connected directly. The set of nodes adjacent to a particular node is known as its neighborhood.

### Degree of a Node

#### Undirected Graph

- represents the number of neighbors a node has

#### Directed Graph

- The in-degree (number of incoming edges)
- The out-degree (number of outgoing edges)

### Path

- A sequence of vertices in which each consecutive pair of vertices is connected by an edge

### Cycle

- A path in which the first and last vertices are the same, forming a closed loop

### Graph Types

1. **Undirected** - _In an undirected graph, edges have no direction, representing a bidirectional connection between two vertices_
   - Example: Friends network
2. **Directed** - _In a directed graph, edges have a direction, indicating a one-way connection between vertices_
   - Example: Webpage links
3. **Weighted** - _Each edge is associated with a numerical value called a weight in a weighted graph._
   - Example: Transportation Links
4. **Unweighted** - _All edges have the same default weight of 1 in an unweighted graph. There are no additional numerical values associated with the edges. In an unweighted graph, the absence of edge weights implies that all edges are considered to have equal importance or distance between the connected nodes._
   - Example: Family Tree
5. **Cyclic** - _A cyclic graph is a graph that contains at least one cycle, which is a closed path (sequence of vertices) that starts and ends at the same vertex_
6. **Acyclic** - _An acyclic graph is a directed graph that has no cycles_
   - They have at least one node with no incoming edges (called a source node)
   - They have at least one node with no outgoing edges (called a sink node)
7. **Connected** - _A connected graph is one in which there is a path between every pair of vertices. In other words, every vertex is reachable from any other vertex in the graph_
8. **Disconnected** - _A disconnected graph has two or more connected components (subgraphs) with no direct connection between these components_
9. **Strongly Connected** - _A strongly connected graph is a type of directed graph in which there is a directed path from every vertex to every other vertex. In other words, for any two vertices, A and B, in a strongly connected graph, there is a directed path from A to B and B to A_

## Representing Graphs

### Matrix
   - `0` is *free*
   - `1` is *blocked*
   - `grid[r]` gives you the row
   - `grid[r][c]` gives you the column

```js
const grid = [
//col: 0 1 2 3
      [0,0,0,0], // row: 0
      [1,1,0,0], // row: 1
      [0,0,0,1], // row: 2
      [0,1,0,0], // row: 3
]
```

### Adjacency matrix
   - rows and columns represent the vertices of the graph
   - entries (elements) of the matrix indicate whether there is an edge between the corresponding vertices.
   - For an undirected edge between vertices i and j, the corresponding entries in the matrix (A[i][j] and A[j][i]) will have a value of 1, indicating the presence of an edge.
   - If there is no edge between vertices i and j, the matrix entries will have the value of 0.
   - Space complexity will be `O(V^2)` if the graph has few edges where `V` is the number of vertices

```
      A   B   C   D
  A   0   1   0   1
  B   1   0   1   0
  C   0   1   0   1
  D   1   0   1   0
```

```js
const adjacencyMatrix = [
  [0, 1, 1, 0], // Node 0 is connected to nodes 1 and 2
  [1, 0, 1, 1], // Node 1 is connected to nodes 0, 2, and 3
  [1, 1, 0, 1], // Node 2 is connected to nodes 0, 1, and 3
  [0, 1, 1, 0], // Node 3 is connected to nodes 1 and 2
];
```

### Adjacency list
   - each vertex is associated with a list of its neighboring vertices directly connected to it
   - In an undirected graph the list is symmetric
   - In a directed graph since there is a direction, the list is asymmetric
   ```js
   const adjacencyList = {
     0: [1, 2],
     1: [0, 2, 3],
     2: [0, 1, 3],
     3: [1, 2],
   };
   ```

### Graph API

1. Adding a new vertex
1. Removing a vertex
1. Adding an edge between two vertices
1. Removing an edge between two vertices
1. Getting a list of all the vertices
1. Checking if two graph nodes are adjacent to each other or not
1. Getting count of the total vertices in the graph
1. Getting count of the total edges in the graph
1. Getting a list of the graph edges
1. Getting neighbors of a graph vertex
