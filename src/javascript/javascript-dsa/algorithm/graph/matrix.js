const grid = [[]];
const numRows = grid.length;
const numCols = grid[0].length;
export function get4Neighbors(coord) {
  const [row, col] = coord;
  const deltaRow = [-1, 0, 1, 0];
  const deltaCol = [0, 1, 0, -1];
  const res = [];
  for (let i = 0; i < deltaRow.length; i += 1) {
    const neighborRow = row + deltaRow[i];
    const neighborCol = col + deltaCol[i];
    if (
      neighborRow >= 0 &&
      neighborRow < numRows &&
      neighborCol >= 0 &&
      neighborCol < numCols
    ) {
      res.push([neighborRow, neighborCol]);
    }
  }
  return res;
}

function get8Neighbors(coord) {
  const [row, col] = coord;
  const deltaRow = [-2, -2, -1, 1, 2, 2, 1, -1];
  const deltaCol = [-1, 1, 2, 2, 1, -1, -2, -2];
  const res = [];
  for (let i = 0; i < deltaRow.length; i += 1) {
    const neighborRow = row + deltaRow[i];
    const neighborCol = col + deltaCol[i];
    if (
      neighborRow >= 0 &&
      neighborRow < numRows &&
      neighborCol >= 0 &&
      neighborCol < numCols
    ) {
      res.push([neighborRow, neighborCol]);
    }
  }
  return res;
}
