/*
In computer graphics, an uncompressed raster image is presented as a matrix of numbers. Each entry of the matrix represents the color of a pixel. A flood fill algorithm takes a coordinate r, c and a replacement color, and replaces all pixels connected to r, c that have the same color (i.e., the pixels connected to the given coordinate with same color and all the other pixels connected to the those pixels of the same color) with the replacement color. (e.g. MS-Paint's paint bucket tool).

r: row
c: column
replacement: replacement color
image: an 2D array of integers representing the image

Input:
r = 2
c = 2
replacement = 9
arr = [[0,1,3,4,1],[3,8,8,3,3],[6,7,8,8,3],[12,2,8,9,1],[12,3,1,3,2]]


Output: [[0,1,3,4,1],[3,9,9,3,3],[6,7,9,9,3],[12,2,9,9,1],[12,3,1,3,2]]
*/
function floodFill(r, c, replacement, image) {
    const numRows = image.length;
    const numCols = image[0].length;
    function getNeighbors(node, color) {
        const row = node[0];
        const column = node[1];
        const deltaRow = [-1, 0, 1, 0];
        const deltaColumn = [0,1,0,-1];
        const neighbors = [];
        for (let i = 0; i < deltaRow.length; i++) {
            const neighborRow = row + deltaRow[i];
            const neighborCol = column + deltaColumn[i];

            if (neighborRow >= 0 && neighborRow < numRows && neighborCol >= 0 && neighborCol < numCols) {
                if (image[neighborRow][neighborCol] === color) {
                    neighbors.push([neighborRow, neighborCol]);
                }
            }
        }
        return neighbors;
    }

    function bfs(coord) {
        const queue = [coord];
        const visited = Array.from({length: numRows}, (v,i) => Array(numCols).fill(false));
        const r = coord[0];
        const c = coord[1];
        const color = image[r][c];
        image[r][c] = replacement;
        while (queue.length > 0) {
            const node = queue.shift();
            for (const [row, col] of getNeighbors(node ,color)) {
                if (visited[row][col]) { continue; };

                image[row][col] = replacement;
                queue.push([row,col]);
                visited[row][col] = true;
            }
        }

    }

    bfs([r,c])
    return image;
}