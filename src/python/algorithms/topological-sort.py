from collections import deque
def topologicalSort(n, edges):
    graph = { node: [] for node in range(n)}
    indegree = { node: 0 for node in graph}
    q = deque()
    res = []
    for a,b in edges:
        graph[a].append(b)

    for node in graph:
        for neighbor in graph[node]:
            indegree[neighbor] += 1

    for node in indegree:
        if indegree[node] == 0:
            q.append(node)

    while len(q):
        n = q.popleft()
        res.append(n)
        for neighbor in graph[n]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)
    return res if len(res) == len(graph) else []


result = topologicalSort(6, [[2,3], [3,1], [4,0], [4,1], [5,0], [5,2]])

print(result)



