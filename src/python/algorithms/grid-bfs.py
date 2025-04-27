from collections import deque
'''
Time complexity: O(n * m) where n is the number of rows and m is the number of columns
'''
def shortestPath(grid):
    grid = grid
    rows = len(grid)
    cols = len(grid[0])
    queue = deque()
    queue.append((0, 0))
    visited = set()
    visited.add((0, 0))
    paths = 0

    while len(queue):
        for i in range(len(queue)):
            r, c = queue.popleft()
            if r == rows - 1 and c == cols - 1:
                return paths
            neighbors = [[0,1], [0,-1], [1,0], [-1,0]]
            for dr, dc in neighbors:
                nr = dr + r
                nc = dc + c
                if nr < 0 or nc < 0 or nr == rows or nc == cols or (nr, nc) in visited or grid[nr][nc] == 1:
                    continue
                queue.append((nr, nc))
                visited.add((nr, nc))
        paths += 1
    return -1