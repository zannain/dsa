/*
You are given an m by n grid of integers representing a map of a dungeon. In this map:

-1 represents a wall or an obstacle of some kind.
0 represents a gate out of the dungeon.
INF represents empty space.
For this question, let INF be 2^31 - 1 == 2147483647, which is the max value of the integer type in many programming languages.

Venturing into the dungeon is very dangerous, so you would like to know how close you are at each point in the dungeon to the closest exit. Given the map of the dungeon, return the same map, but for each empty space, that space is replaced by the number of steps it takes to reach the closest exit. If a space cannot reach the exit, that space remains INF.

Note that each step, you can move horizontally or vertically, but you cannot move pass a wall or an obstacle.

Input
dungeon_map: a matrix of integer representing the dungeon map.
Output
A matrix of integer representing the dungeon map with the addition of distance to an exit for each empty space.

Examples
Example 1:
Input:

dungeon_map = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
]
Output: [ [3, -1, 0, 1], [2, 2, 1, -1], [1, -1, 2, -1], [0, -1, 3, 4], ]
*/

const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]];
const INF = 2147483647;

function mapGateDistances(dungeonMap) {
    const m = dungeonMap.length;
    const n = dungeonMap[0].length;
    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dungeonMap[i][j] === 0) {
                queue.push([i,j]);
            }
        }
    }

    while (queue.length > 0) {
     const [cRow, cCol] = queue.shift();
     for (const [deltaRow, deltaCol] of DIRECTIONS) {
         const nRow = cRow + deltaRow;
         const nCell = cCol + deltaCol;

         if (nCell >= 0 && nCell < n && nRow >= 0 && nRow < m) {
             if (dungeonMap[nRow][nCell] === INF) {
                 dungeonMap[nRow][nCell] = dungeonMap[cRow][cCol] + 1;
                 queue.push([nRow, nCell]);
             }
         }
     }
    }
    return dungeonMap;
}