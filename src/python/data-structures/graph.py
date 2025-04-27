from collections import deque
class Graph:

    def __init__(self):
        self.adj_list = {} # src -> set() of neighbors


    def addEdge(self, src: int, dst: int) -> None:
        if src not in self.adj_list:
            self.adj_list[src] = set()
        if dst not in self.adj_list:
            self.adj_list[dst] = set()

        self.adj_list[src].add(dst)




    def removeEdge(self, src: int, dst: int) -> bool:
        if src not in self.adj_list or dst not in self.adj_list[src]:
            return False

        self.adj_list[src].remove(dst)
        return True


    def hasPath(self, src: int, dst: int) -> bool:
        visited = set()
        # return self._dfs(src, dst, visited)
        return self._bfs(src, dst)

    def _dfs(self, src, dst, visited):
        if src == dst:
            return True
        visited.add(src)
        for neighbor in self.adj_list.get(src, []):
            if neighbor in visited:
                continue
            if self._dfs(neighbor, dst, visited):
                return True
        return False

    def _bfs(self, src, dst):
        visited = set()
        queue = deque([src])
        while len(queue):
            curr = queue.popleft()
            if curr == dst:
                return True
            visited.add(curr)
            for neighbor in self.adj_list.get(curr, []):
                if neighbor not in visited:
                    queue.append(neighbor)
                    visited.add(neighbor)
        return False


