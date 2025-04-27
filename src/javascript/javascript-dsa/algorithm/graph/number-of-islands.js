/*
Given a 2-dimensional matrix of values with 0 and 1, count the number of islands of 1. An island consists of all value 1 cells and is surrounded by either an edge or all 0 cells. A cell can only be adjacent to each other horizontally or vertically, not diagonally.

*/
function countNumberOfIslands(grid) {
    const numRows= grid.length;
    const numCols = grid[0].length;

    function getNeighbors(coord) {
        const row = coord[0];
        const col = coord[1];
        const deltaRow = [-1, 0, 1, 0];
        const deltaCol = [0, 1, 0, -1];
        const neighbors = [];
        for (let i = 0; i < deltaRow.length; i++) {
            const neighborRow = row + deltaRow[i];
            const neighborColumn = col + deltaCol[i];

            if (
                neighborRow >= 0 &&
                neighborRow < numRows &&
                neighborColumn>= 0 &&
                neighborColumn < numCols
            ) {
                neighbors.push ([neighborRow, neighborColumn]);

            }
        }
        return neighbors;
    }

    function bfs(start) {
        const queue = [start];
        const [r, c] = start;
        grid[r][c] = 0;
      while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of getNeighbors(node)) {
                const [r, c] = neighbor;
                if (grid[r][c] === 0) continue;
                queue.push(neighbor);
                grid[r][c] = 0;
            }
        }
    }

    let count = 0;

    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
             if (grid[r][c] === 0) { continue; }
             bfs([r,c]);
            count+= 1;
        }

    }
    return count;
}

// Track visited using a matrix

function count_number_of_islands(grid) {
    const num_rows = grid.length;
    const num_cols = grid[0].length;
    function get_neighbors(coord) {
        const res = [];
        const [row, col] = coord;
        const delta_row = [-1, 0, 1, 0];
        const delta_col = [0, 1, 0, -1];
        for (let i = 0; i < delta_row.length; i++) {
            const r = row + delta_row[i];
            const c = col + delta_col[i];
            if (0 <= r && r < num_rows && 0 <= c && c < num_cols) {
                res.push([r, c]);
            }
        }
        return res;
    }
    function bfs(start, visited) {
        const queue = [start];
        const [r, c] = start;
        visited[r][c] = true;
        while (queue.length > 0) {
            const node = queue.shift();
            for (const neighbor of get_neighbors(node)) {
                const [r, c] = neighbor;
                if (grid[r][c] === 0 || visited[r][c]) continue;
                queue.push(neighbor);
                visited[r][c] = true;
            }
        }
    }
    let count = 0;
    const visited = Array.from({length: num_rows}, () => Array(num_cols).fill(false));
    for (let r = 0; r < num_rows; r++) {
        for (let c = 0; c < num_cols; c++) {
            if (grid[r][c] === 0 || visited[r][c]) continue;
            bfs([r, c], visited);
            count++;
        }
    }
    return count;
}