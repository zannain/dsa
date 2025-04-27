'''
Time Complexity: 4^(n*m)
Space Complexity: O(n * m)
'''
def countPaths(grid) -> int:
    ROWS, COLS = len(grid), len(grid[0])

    if grid[0][0] == 1 or grid[ROWS - 1][COLS - 1] == 1:
        return 0
    def dfs(r, c, visited):
        paths = 0
        if r < 0 or r >= ROWS or c < 0 or c >= COLS or grid[r][c] == 1 or visited[r][c]:
            return 0

        if r == ROWS - 1 and c == COLS - 1:
            return 1

        visited[r][c] = True

        paths += dfs(r + 1, c, visited)
        paths += dfs(r - 1, c, visited)
        paths += dfs(r, c + 1, visited)
        paths += dfs(r, c - 1, visited)

        visited[r][c] = False
        return paths



    visited = [[False for _ in range(COLS)] for _ in range(ROWS)]
    return dfs(0, 0, visited)

grid=[[0, 0, 0, 0],[1, 1, 0, 0],[0, 0, 0, 1],[0, 1, 0, 0]]
result = countPaths(grid)
print(result)